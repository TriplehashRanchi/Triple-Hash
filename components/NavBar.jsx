'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- Data for Navigation Dropdowns ---
// Keeping data separate makes the main component cleaner.
const useCasesItems = [
    { label: 'Building AI agents', href: '#' },
    { label: 'IT operations', href: '#' },
    { label: 'Security operations', href: '#' },
    { label: 'Embedded automation', href: '#' },
    { label: 'Lead automation', href: '#' },
    { label: 'Supercharge your CRM', href: '#' },
    { label: 'Limitless integrations', href: '#' },
    { label: 'Backend prototyping', href: '#' },
];

const productItems = [
    { label: 'Features', href: '#' },
    { label: 'Connectors', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Self-hosting', href: '#' },
];

const docsItems = [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
];

const communityItems = [
    { label: 'Forum', href: '#' },
    { label: 'Events', href: '#' },
    { label: 'Contributors', href: '#' },
];

// --- Helper Components (Internal to this file) ---

const ChevronDownIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none">
                {title}
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 origin-top-right bg-[#1C1C1E] border border-gray-700/50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-2">
                        {items.map((item) => (
                             <Link
                                key={item.label}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800/60 transition-colors"
                             >
                                {item.label}
                             </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Main Navbar Component ---

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50 font-sans">
            <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    
                    {/* Left Side: Logo and Navigation Links */}
                    <div className="flex items-center gap-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 shrink-0">
                            <Image
                                src="/logo.png"
                                alt="n8n logo"
                                className='object-contain invert'
                                width={30}
                                height={30}
                            />
                         </Link>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-6">
                            <Dropdown title="Product" items={productItems} />
                            <Dropdown title="Use cases" items={useCasesItems} />
                            <Dropdown title="Docs" items={docsItems} />
                            <Dropdown title="Community" items={communityItems} />
                            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                Enterprise
                            </Link>
                            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                Pricing
                            </Link>
                        </nav>
                    </div>

                    {/* Right Side: Action Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-2">
                            Sign in
                        </Link>
                        <Link href="#" className="bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white font-semibold text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Hamburger) - Placeholder */}
                    <div className="lg:hidden">
                        <button className="text-gray-300 hover:text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;