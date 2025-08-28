import React, { useState, useMemo } from 'react';
import { APIS, API_CATEGORIES } from '../constants';
import { ApiCard } from '../components/ApiCard';
import { SearchIcon, GridIcon, ListIcon } from '../components/Icons';
import { Page, ApiData } from '../types';
import { UseCaseModal } from '../components/UseCaseModal';

interface ApiCatalogPageProps {
    setCurrentPage: (page: Page) => void;
}

const PageBanner = () => (
    <div className="relative py-24 bg-gray-100">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/apicatalog/1920/400')"}}></div>
        <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-gray-900">API Catalog</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore all our APIs or search for the ones that meet your specific needs. Learn more.
            </p>
        </div>
    </div>
);

const ApiClassificationTabs: React.FC<{ activeCategory: string; onSelectCategory: (category: string) => void }> = ({ activeCategory, onSelectCategory }) => (
    <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {API_CATEGORIES.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeCategory === category
                            ? 'border-bpi-red text-bpi-red'
                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                    }`}
                >
                    {category}
                </button>
            ))}
        </nav>
    </div>
);


export const ApiCatalogPage: React.FC<ApiCatalogPageProps> = ({ setCurrentPage }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [displayMode, setDisplayMode] = useState('grid');
    const [activeUseCase, setActiveUseCase] = useState<'bills-payment' | 'fund-transfer' | null>(null);

    const filteredApis = useMemo(() => {
        return APIS.filter(api => {
            const matchesCategory = activeCategory === 'All' || api.category === activeCategory;
            const matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  api.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const handleLearnMore = (api: ApiData) => {
        if (api.id === '1') {
            setActiveUseCase('bills-payment');
        } else if (api.id === '3') {
            setActiveUseCase('fund-transfer');
        } else if (api.pageLink) {
            setCurrentPage(api.pageLink);
        }
    };
    
    return (
        <main className="bg-white">
            <PageBanner />
            <div className="container mx-auto px-6 py-12">
                <ApiClassificationTabs activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

                <div className="flex justify-between items-center my-8">
                    <p className="text-gray-500 text-sm">Showing {filteredApis.length} results out of {APIS.length} items</p>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-white border border-gray-300 rounded-md py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="w-5 h-5 text-gray-400"/>
                            </div>
                        </div>
                        <div className="flex items-center bg-white border border-gray-300 rounded-md">
                            <button onClick={() => setDisplayMode('grid')} className={`p-2 rounded-l-md ${displayMode === 'grid' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}>
                                <GridIcon className="w-5 h-5" />
                            </button>
                             <button onClick={() => setDisplayMode('list')} className={`p-2 rounded-r-md ${displayMode === 'list' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}>
                                <ListIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {displayMode === 'grid' ? (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredApis.map(api => (
                            <ApiCard
                                key={api.id}
                                api={api}
                                setCurrentPage={(_page: Page) => handleLearnMore(api)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {/* List view can be implemented here, for now using grid card */}
                         {filteredApis.map(api => (
                            <ApiCard
                                key={api.id}
                                api={api}
                                setCurrentPage={(_page: Page) => handleLearnMore(api)}
                            />
                        ))}
                    </div>
                )}

                {filteredApis.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-2xl font-bold">No APIs Found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
            <UseCaseModal 
                isOpen={activeUseCase !== null} 
                onClose={() => setActiveUseCase(null)} 
                useCase={activeUseCase}
            />
        </main>
    );
};