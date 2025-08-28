import React from 'react';
import { Page } from '../types';
import { PlayIcon } from '../components/Icons';

interface GetStartedPageProps {
    setCurrentPage: (page: Page) => void;
}

const BpiLogoFooter = () => (
    <div className="flex items-center space-x-2">
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#E4002B"/>
        <path d="M12 12H18.6667C20.4667 12 22.1333 12.6333 23.3333 13.8333C24.5333 15.0333 25.1667 16.7 25.1667 18.5C25.1667 20.3 24.5333 21.9667 23.3333 23.1667C22.1333 24.3667 20.4667 25 18.6667 25H12V12ZM15.3333 15.3333V21.6667H18.6667C19.5667 21.6667 20.3 21.35 20.8667 20.7833C21.4333 20.2167 21.7167 19.45 21.7167 18.5C21.7167 17.55 21.4333 16.7833 20.8667 16.2167C20.3 15.65 19.5667 15.3667 18.6667 15.3667H15.3333Z" fill="white"/>
      </svg>
      <span className="font-bold text-lg text-bpi-dark-blue">BPI</span>
    </div>
);

const GetStartedFooter: React.FC = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto px-6 py-6 text-gray-500 text-xs">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} BPI. All rights reserved. Copyright | Data Privacy Financial Consumer Protection</p>
                        <p className="mt-1">BPI is regulated by the Bangko Sentral ng Pilipinas. https://www.bsp.gov.ph</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <BpiLogoFooter />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export const GetStartedPage: React.FC<GetStartedPageProps> = ({ setCurrentPage }) => {
    return (
        <div className="h-full flex flex-col">
            <main className="text-bpi-dark-blue flex-grow">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-sm text-gray-500">
                            <button onClick={() => setCurrentPage('home')} className="hover:underline" aria-label="Go to Home page">Home</button>
                            <span className="mx-2" aria-hidden="true">&gt;</span>
                            <span aria-current="page">Get Started</span>
                        </p>
                        <button 
                            onClick={() => setCurrentPage('home')} 
                            className="bg-bpi-red text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-opacity-80 transition-colors"
                            aria-label="Close Get Started and return to Home"
                        >
                            CLOSE
                        </button>
                    </div>
                    
                    <div className="relative group w-full max-w-4xl mx-auto cursor-pointer my-8">
                        <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2940&auto=format&fit=crop" alt="Promotional video thumbnail of a team collaborating." className="w-full rounded-lg shadow-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg group-hover:bg-opacity-50 transition-all" aria-hidden="true">
                            <PlayIcon className="w-24 h-24 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
                            43:27 / 97:30
                        </div>
                    </div>
                    
                    <div className="text-center my-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-bpi-dark-blue">Ready to empower your innovation teams?</h2>
                        <div className="mt-8">
                             <button 
                                onClick={() => setCurrentPage('register')}
                                className="bg-bpi-red text-white font-semibold px-10 py-4 rounded-md hover:bg-opacity-80 transition-transform transform hover:scale-105">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <GetStartedFooter />
        </div>
    );
};