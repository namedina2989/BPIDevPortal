import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '../components/Icons';

export const ContactUsPage: React.FC = () => {
    return (
        <main className="bg-white">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-900">Get in Touch</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Whether you have a question about our APIs, need support, or just want to give feedback, please reach out.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" placeholder="Juan dela Cruz" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" placeholder="you@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input type="text" id="subject" name="subject" className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" placeholder="API Integration Question" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea id="message" name="message" rows={5} className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red" placeholder="Your message here..."></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-bpi-red text-white font-semibold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info & FAQs */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-start space-x-4">
                                    <EnvelopeIcon className="w-6 h-6 text-bpi-red mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <a href="partnerManagement@bpi.com.ph" className="text-gray-600 hover:text-bpi-red transition-colors">partnerManagement@bpi.com.ph</a>
                                        <a href="digitalincubation@bpi.com.ph" className="text-gray-600 hover:text-bpi-red transition-colors"> and digitalincubation@bpi.com.ph</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <PhoneIcon className="w-6 h-6 text-bpi-red mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Hotline</h4>
                                        <p className="text-gray-600">(+632) 889-10000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h3>
                            <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                                <li>How do I get API keys?</li>
                                <li>What are the rate limits for the APIs?</li>
                                <li>Where can I find the API documentation?</li>
                            </ul>
                            <a href="#" className="mt-4 inline-block text-bpi-red font-semibold hover:underline">View all FAQs &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};