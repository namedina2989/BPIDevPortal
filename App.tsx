

import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ApiCatalogPage } from './pages/ApiCatalogPage';
import { GetStartedPage } from './pages/GetStartedPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { SupportPage } from './pages/SupportPage';
import { TermsOfServiceModal } from './components/TermsOfServiceModal';
import { ContactUsPage } from './pages/ContactUsPage';
import { RegisterPage } from './pages/RegisterPage';
import { BillsPaymentPage } from './pages/BillsPaymentPage';
import { FundTransferPage } from './pages/FundTransferPage';
import { RegistrationSuccessPage } from './pages/RegistrationSuccessPage';
import { OpenBankingPage } from './pages/OpenBankingPage';
import { Page } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openTermsModal = useCallback(() => setIsTermsModalOpen(true), []);
  const closeTermsModal = useCallback(() => setIsTermsModalOpen(false), []);

  const handleSignIn = useCallback(() => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  }, []);

  const handleRegistration = useCallback(() => {
    setCurrentPage('registration-success');
  }, []);

  const handleSignOut = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'api-catalog':
        return <ApiCatalogPage setCurrentPage={setCurrentPage} />;
      case 'get-started':
        return <GetStartedPage setCurrentPage={setCurrentPage} />;
      case 'documentation':
        return <DocumentationPage setCurrentPage={setCurrentPage} />;
      case 'support':
        return <SupportPage setCurrentPage={setCurrentPage} />;
      case 'contact-us':
        return <ContactUsPage />;
      case 'register':
        return <RegisterPage setCurrentPage={setCurrentPage} onRegister={handleRegistration} onOpenTerms={openTermsModal} />;
      case 'registration-success':
        return <RegistrationSuccessPage setCurrentPage={setCurrentPage} />;
      case 'bills-payment':
        return <BillsPaymentPage setCurrentPage={setCurrentPage} />;
      case 'fund-transfer':
        return <FundTransferPage setCurrentPage={setCurrentPage} />;
      case 'open-banking':
        return <OpenBankingPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  const mainBgClass = () => {
    if (['get-started', 'bills-payment', 'documentation', 'fund-transfer', 'open-banking'].includes(currentPage)) return 'bg-white';
    return 'bg-white';
  }


  if (currentPage === 'register' || currentPage === 'registration-success') {
    return (
      <>
        {renderPage()}
        <TermsOfServiceModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
      </>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${mainBgClass()}`}>
      <Header 
        isLoggedIn={isLoggedIn} 
        onSignOut={handleSignOut}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="flex-grow">
        {renderPage()}
      </div>
      {currentPage !== 'get-started' && <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} onOpenTerms={openTermsModal} />}
      <TermsOfServiceModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
    </div>
  );
};

const Footer: React.FC<{ setCurrentPage: (page: Page) => void; currentPage: Page; onOpenTerms: () => void; }> = ({ setCurrentPage, currentPage, onOpenTerms }) => {
    const footerBgClass = ['bills-payment', 'documentation', 'fund-transfer', 'open-banking'].includes(currentPage) ? 'bg-gray-100' : 'bg-gray-50';
    const textColorClass = ['bills-payment', 'documentation', 'fund-transfer', 'open-banking'].includes(currentPage) ? 'text-gray-600' : 'text-gray-500';

    return (
        <footer className={`${footerBgClass} border-t border-gray-200`}>
            <div className={`container mx-auto px-6 py-8 text-center ${textColorClass} text-sm`}>
            <div className="flex justify-center space-x-6 mb-4">
                    <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); onOpenTerms(); }}
                        className="hover:text-bpi-red transition-colors">
                        Terms of Service
                    </a>
                    <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); setCurrentPage('contact-us'); }}
                        className="hover:text-bpi-red transition-colors">
                        Contact Us
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} BPI. All Rights Reserved.</p>
                
            </div>
        </footer>
    );
}

export default App;