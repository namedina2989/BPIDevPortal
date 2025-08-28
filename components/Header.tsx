
import React, { useState } from 'react';
import { NAV_LINKS, LOGGED_IN_MENU } from '../constants';
import { SearchIcon, ChevronDownIcon } from './Icons';
import { Page } from '../types';

interface HeaderProps {
  isLoggedIn: boolean;
  onSignOut: () => void;
  setCurrentPage: (page: Page) => void;
  currentPage: Page;
}

const BpiLogo = () => (
  <div className="flex items-center space-x-2">
   
    
    <a href="https://www.bpi.com.ph/" className="font-medium hover:underline ml-1">
         <img src="BPI_logo_red.png" alt="BPI Logo" className="font-medium hover:underline ml-1" width="50" height="50" border-radius= "50px" />
     </a>
    
  </div>
);

const UserMenu: React.FC<{ onSignOut: () => void, setCurrentPage: (page: Page) => void }> = ({ onSignOut, setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (page: Page) => {
        if (page) {
            setCurrentPage(page);
        }
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
                <span className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center font-bold text-white">U</span>
                <ChevronDownIcon className="text-gray-600" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {LOGGED_IN_MENU.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(item.href as Page);
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                        onClick={onSignOut}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, onSignOut, setCurrentPage, currentPage }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <BpiLogo />
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setCurrentPage(link.href as Page)}}
                  className={`text-sm font-medium transition-colors ${currentPage === link.href ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  {link.name}
                  {currentPage === link.href && <div className="h-0.5 w-full bg-bpi-red mt-1 rounded-full"></div>}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900 transition-colors">
              <SearchIcon className="w-5 h-5"/>
            </button>
            {isLoggedIn ? (
               <UserMenu onSignOut={onSignOut} setCurrentPage={setCurrentPage} />
            ) : (
              <button
                onClick={() => setCurrentPage('register')}
                className="bg-bpi-red text-sm font-medium px-5 py-2 rounded-md hover:bg-opacity-80 transition-colors text-white"
              >
                Register
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
