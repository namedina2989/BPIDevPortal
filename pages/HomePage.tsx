import React from 'react';
import { Page } from '../types';

import { 
    BuildIcon, 
    ConnectIcon, 
    GlobeIcon, 
    PlayTriangleIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    PlayIcon
} from '../components/Icons';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const Hero: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-6 py-16 md:py-24 flex items-center min-h-[70vh]">
                <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                    <div className="max-w-xl text-center md:text-left">
                        <h1 className="text-6xl md:text-8xl font-black text-gray-900 uppercase" style={{ lineHeight: '1.1' }}>
                            The Future
                            <br />
                            of Banking
                            <br />
                            is Open
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            Use our open APIs to create bespoke enhancements for your business.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                           <button
                                onClick={() => setCurrentPage('get-started')}
                                className="flex items-center justify-center space-x-2 bg-bpi-red text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-colors text-lg"
                            >
                                <span>Get Started</span>
                                <PlayTriangleIcon className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setCurrentPage('register')}
                                className="bg-transparent border-2 border-gray-800 text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-gray-800 hover:text-white transition-colors text-lg"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src="./HomePage.png" alt="A group of developers happily working on their laptops" className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Features: React.FC<HomePageProps> = ({ setCurrentPage }) => (
    <section className="bg-bpi-red">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
                <InfoTile 
                    icon={<GlobeIcon className="w-12 h-12" />}
                    title="Discover"
                    description="Get inspired by browsing our API catalog and datasets to develop your next big idea. Find APIs & datasets."
                    buttonText="Explore APIs"
                    onClick={() => setCurrentPage('api-catalog')}
                />
                <InfoTile 
                    icon={<BuildIcon className="w-12 h-12" />}
                    title="Build"
                    description="Open access to our financial software enables rapid product development and project implementation."
                    buttonText="Access Documentation"
                    onClick={() => setCurrentPage('documentation')}
                />
                <InfoTile 
                    icon={<ConnectIcon className="w-12 h-12" />}
                    title="Connect"
                    description="Get help and discuss solutions with our experts. Share your knowledge and learn from others."
                    buttonText="Join the Community"
                    onClick={() => setCurrentPage('support')}
                />
            </div>
        </div>
    </section>
);

const InfoTile: React.FC<{ icon: React.ReactNode; title: string; description: string; buttonText: string; onClick: () => void; }> = ({ icon, title, description, buttonText, onClick }) => (
    <div className="flex flex-col items-center text-center p-8">
        <div className="text-white mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-base mb-6 flex-grow max-w-xs">{description}</p>
        <button 
            onClick={onClick}
            className="bg-white text-bpi-red font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
        >
            {buttonText}
        </button>
    </div>
);


const PartnersHub: React.FC = () => {
    const partners = [
        
        {
            name: 'GCash',
            logoUrl: './gcash_refreshes_logo1.jpg',
            quote: "Integrating with BPI's APIs has been a game-changer for our platform. The seamless and secure fund transfer capabilities have significantly enhanced our user experience, allowing for instant cash-ins and greater financial flexibility for our customers.",
            backgroundImageUrl: './GCash-Logo.jpg'
        },
        {
            name: 'Maya',
            logoUrl: './maya.jpg',
            quote: "Through BPI's robust API infrastructure, we've streamlined our payment processes, offering our customers a secure and frictionless checkout experience. This partnership has been pivotal in enhancing user trust and operational efficiency on our platform.",
            backgroundImageUrl: './money-green.jpg'
        },
        {
            name: 'XENDIT',
            logoUrl: './xenditsmalllogo.png',
            quote: "The reliability and performance of BPI's payment APIs have allowed us to offer our users a trusted and efficient payment method. This collaboration has been crucial in building customer confidence and simplifying our checkout process.",
            backgroundImageUrl: './Xendit.png'
        }
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? partners.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === partners.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentPartner = partners[currentIndex];

    return (
        <section className="relative bg-gray-100 text-bpi-dark-blue py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 mb-12 lg:mb-0">
                        <h2 className="text-5xl font-bold">Partners Hub</h2>
                    </div>
                    <div className="lg:w-2/3 relative">
                         <div className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg transition-all duration-1000" style={{ backgroundImage: `url('${currentPartner.backgroundImageUrl}')` }}>
                            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                         </div>
                         <div className="relative flex flex-col justify-center p-8 min-h-[350px]">
                            <div className="flex items-center justify-center flex-grow w-full">
                                <button onClick={goToPrevious} className="absolute left-4 p-2 bg-white/50 rounded-full hover:bg-white transition-colors z-10" aria-label="Previous partner">
                                    <ChevronLeftIcon className="w-6 h-6"/>
                                </button>
                                <div className="w-full max-w-lg bg-white/10 backdrop-blur-sm p-8 rounded-lg text-white border border-white/20">
                                    <img src={currentPartner.logoUrl} alt={currentPartner.name} className="h-8 mb-4 object-contain" />
                                    <p className="text-sm">"{currentPartner.quote}"</p>
                                    <button className="mt-4 text-sm font-bold text-white hover:underline">Read More &rarr;</button>
                                </div>
                                <button onClick={goToNext} className="absolute right-4 p-2 bg-white/50 rounded-full hover:bg-white transition-colors z-10" aria-label="Next partner">
                                    <ChevronRightIcon className="w-6 h-6"/>
                                </button>
                            </div>
                            <div className="flex justify-center space-x-2 mt-6">
                                {partners.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                            currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PortalBuzz: React.FC = () => {
    const buzzItems = [
        {
            name: 'Chandler Bing',
            role: 'Project Manager, Digital Services',
            title: 'When (not if) Open Banking becomes standard in Treasury',
            image: 'https://i.pravatar.cc/150?img=1'
        },
        {
            name: 'Phoebe Buffay',
            role: 'System Analyst, Digital Services',
            title: 'Open Finance: the next step on the journey towards Open Economy',
            image: 'https://i.pravatar.cc/150?img=2'
        },
        {
            name: 'Ross Geller',
            role: 'Shum Lead, Digital Services',
            title: 'The current status of Open Banking and a glimpse into the future',
            image: 'https://i.pravatar.cc/150?img=3'
        }
    ];

    return (
        <section className="bg-white text-bpi-dark-blue py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-bpi-red">Portal Buzz</h2>
                    <p className="mt-2 text-gray-600">Find out more about BPI Open Banking and APIs</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {buzzItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col">
                           <div className="bg-bpi-red p-4 text-white">
                                <span className="text-xs uppercase">Open Banking Dev Talk</span>
                                <div className="flex items-start mt-2 space-x-4">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full border-2 border-white object-cover" />
                                    <div>
                                        <h4 className="font-bold">{item.title}</h4>
                                        <div className="flex items-center justify-between mt-2">
                                            <div>
                                                <p className="text-sm font-semibold">{item.name}</p>
                                                <p className="text-xs opacity-80">{item.role}</p>
                                            </div>
                                            <button className="flex items-center space-x-1 text-xs font-bold bg-white text-bpi-red px-2 py-1 rounded-full">
                                                <span>Watch Now</span>
                                                <PlayIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                           </div>
                           <div className="p-4 flex-grow">
                               <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTA: React.FC<HomePageProps> = ({ setCurrentPage }) => (
    <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Ready to <span className="text-bpi-red">empower</span> your innovation teams?
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Our platform enables you to innovate quickly and at low cost by unlocking BPI's proven open banking softwares.
            </p>
            <div className="mt-8">
                <button 
                    onClick={() => setCurrentPage('register')}
                    className="bg-bpi-red text-white font-semibold px-10 py-4 rounded-md hover:bg-opacity-80 transition-transform transform hover:scale-105"
                >
                    Register
                </button>
            </div>
        </div>
    </section>
);


export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    return (
        <main>
            <Hero setCurrentPage={setCurrentPage} />
            <Features setCurrentPage={setCurrentPage} />
            <PartnersHub />
            <PortalBuzz />
            <CTA setCurrentPage={setCurrentPage} />
        </main>
    );
};
