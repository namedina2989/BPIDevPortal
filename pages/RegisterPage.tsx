import React from 'react';
import { Page } from '../types';
import { CloseIcon } from '../components/Icons';

interface RegisterPageProps {
    setCurrentPage: (page: Page) => void;
    onSignIn: () => void;
    onOpenTerms: () => void;
}

const BpiLogo = () => (
    <div className="flex items-center space-x-2">
      <a href="https://www.bpi.com.ph/" className="font-medium hover:underline ml-1">
         <img src="../bpi.jpg" alt="BPI Logo" className="font-medium hover:underline ml-1" width="40" height="40" border-radius= "50px" />
     </a>
      <span className="font-bold text-xl text-gray-900">BPI Developer Portal</span>
    </div>
);

export const RegisterPage: React.FC<RegisterPageProps> = ({ setCurrentPage, onSignIn, onOpenTerms }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl flex overflow-hidden relative">
                <button
                    onClick={() => setCurrentPage('home')}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-20"
                    aria-label="Close registration and return to home page"
                >
                    <CloseIcon className="w-7 h-7" />
                </button>
                
                {/* Left Side - Info */}
                <div className="w-1/2 hidden md:flex flex-col justify-between p-12 bg-cover bg-center relative" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556156163-aa29a1b55a8a?q=80&w=1887&auto=format&fit=crop')` }}>
                    <div className="absolute inset-0 bg-white/50"></div>
                    <div className="relative z-10">
                        <BpiLogo />
                        <h1 className="text-4xl font-bold text-gray-900 mt-8">Start Building the Future of Finance</h1>
                        <p className="text-gray-700 mt-4">Join our community of innovators and leverage our robust APIs to create exceptional financial experiences.</p>
                    </div>
                     <div className="relative z-10 text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} BPI. All Rights Reserved.
                    </div>
                </div>
                
                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                    <p className="text-gray-500 mb-8">Let's get you started!</p>
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input type="text" id="first-name" name="first-name" className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" required />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input type="text" id="last-name" name="last-name" className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" required />
                            </div>
                        </div>

                         <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" required />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                            <input type="tel" id="mobile-number" name="mobile-number" className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" required />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" required />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" required />
                        </div>

                         <div className="mt-6 flex items-start">
                            
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="text-gray-500">
                                   Read the 
                                    <a href="#" onClick={(e) => { e.preventDefault(); onOpenTerms(); }} className="font-medium text-bpi-red hover:underline ml-1">
                                        Terms of Service
                                    </a>
                                </label>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <button type="submit" className="w-full bg-bpi-red text-white font-semibold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors">
                                Create Account
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};