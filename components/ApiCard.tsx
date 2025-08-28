
import React from 'react';
import { ApiData, Page } from '../types';
import { ArrowRightIcon } from './Icons';

interface ApiCardProps {
  api: ApiData;
  setCurrentPage: (page: Page) => void;
}

export const ApiCard: React.FC<ApiCardProps> = ({ api, setCurrentPage }) => {
  const canNavigate = !!api.pageLink;

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (canNavigate) {
      setCurrentPage(api.pageLink);
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:border-bpi-red transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
      <div>
        <div className="flex justify-between items-start">
            {api.icon}
            {api.isComingSoon && (
                <span className="bg-yellow-500 text-black text-xs font-bold px-2.5 py-1 rounded-full">
                    COMING SOON
                </span>
            )}
        </div>
        <h3 className="text-xl font-bold mt-4 text-gray-900">{api.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{api.version}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{api.description}</p>
      </div>
      <a 
        href="#" 
        onClick={handleLearnMore}
        className={`flex items-center space-x-2 font-semibold text-sm group ${canNavigate ? 'text-bpi-red cursor-pointer' : 'text-gray-500 cursor-not-allowed'}`}
        aria-disabled={!canNavigate}
      >
        <span>Learn More</span>
        <ArrowRightIcon className={`w-4 h-4 transform transition-transform ${canNavigate ? 'group-hover:translate-x-1' : ''}`} />
      </a>
    </div>
  );
};