import React from 'react';
import { Page } from '../types';

interface SupportPageProps {
  setCurrentPage: (page: Page) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ setCurrentPage }) => {
    return (
        <main className="container mx-auto px-6 py-24">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-900">Support & Community</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    This is where you'll find community forums and FAQs. Get help from the community and share your knowledge.
                </p>
                 <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    For direct inquiries, please{' '}
                    <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); setCurrentPage('contact-us'); }}
                        className="font-medium text-bpi-red hover:underline"
                    >
                        Contact Us
                    </a>.
                </p>
            </div>
        </main>
    );
};