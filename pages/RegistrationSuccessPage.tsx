import React from 'react';
import { CheckCircleIcon } from '../components/Icons';

export const RegistrationSuccessPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="w-full max-w-lg bg-bpi-red rounded-2xl shadow-2xl flex flex-col items-center justify-center p-12 text-center text-white">
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
