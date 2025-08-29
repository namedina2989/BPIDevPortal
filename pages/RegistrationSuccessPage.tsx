import React from 'react';
import { CheckCircleIcon, CloseIcon } from '../components/Icons';
import { Page } from '../types';

interface RegistrationSuccessPageProps {
    setCurrentPage: (page: Page) => void;
}

export const RegistrationSuccessPage: React.FC<RegistrationSuccessPageProps> = ({ setCurrentPage }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="relative w-full max-w-lg bg-bpi-red rounded-2xl shadow-2xl flex flex-col items-center justify-center p-12 text-center text-white">
                <button
                    onClick={() => setCurrentPage('home')}
                    className="absolute top-4 right-4 text-white hover:opacity-80 transition-opacity z-10"
                    aria-label="Close and return to homepage"
                >
                    <CloseIcon className="w-8 h-8" />
                </button>
                <div className="border-2 border-white rounded-full p-1 mb-6">
                    <CheckCircleIcon className="w-16 h-16 text-white" />
                </div>
                <h1 className="text-3xl font-bold uppercase tracking-wide">
                    NICE Juan! Welcome onboard!
                </h1>
                <p className="mt-4 text-base opacity-90">
                    Thanks for signing up for BPI Developer Portal. We've sent you an email the next step
                </p>
            </div>
        </div>
    );
};
