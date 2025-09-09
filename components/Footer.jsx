// src/components/Footer.jsx
'use client';

import React from 'react';

const Footer = () => {
    // Realistic data for TripleHash
    const companyLinks = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Services', href: '/services' },
        { name: 'Team', href: '/team' },

        { name: 'Contact', href: '/contact' },


    ];

    const resourcesLinks = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-conditions' },
        { name: 'Refund', href: '/refund' },
        { name: 'Blog', href: '/case-studies' },
        { name: 'Careers', href: '/career-page' },
    ];

    const partnersLinks = [
        { name: 'Affiliate Program', href: '#' },
        { name: 'Expert Partners', href: '#' },
        { name: 'Join User Tests', href: '#' },
        { name: 'Events', href: '#' },
    ];

    const socialIcons = [
        {
            icon: "/t.png",
            href: 'https://twitter.com/triplehash',
            label: 'Twitter'
        },
        {
            icon: "/g.png",
            href: 'https://github.com/triplehash',
            label: 'GitHub'
        },
        {
            icon: "/d.png",
            href: 'https://discord.gg/triplehash',
            label: 'Discord'
        },
        {
            icon: "/l.png",
            href: 'https://www.linkedin.com/company/triple-hash/',
            label: 'LinkedIn'
        },
    ];

    // Helper component to render a column of links
    const LinkColumn = ({ title, links, showMore = false }) => (
        <div>
            <h3 className="text-white text-md font-semibold mb-4">{title}</h3>
            <ul className="space-y-3">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                            {link.name}
                        </a>
                    </li>
                ))}
                {showMore && (
                    <li className="pt-2">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-base underline">
                            Show more
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );

    return (
        <footer className="bg-[#0D0816] text-gray-400 pb-10 relative overflow-hidden">
            <div className="max-w-[1360px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center mb-4">
                            <img src="/triplelogo.png" alt="TripleHash Logo" className="h-8 w-auto mr-2" />
                            <span className="text-white text-md font-bold">TripleHash</span>
                        </div>
                        <p className="text-gray-400 text-md mb-6">Triple Hash helps business owners, coaches, and consultants elevate their brand with smart digital marketing strategies and flawless execution.</p>
                        <div className="flex space-x-4">
                            {socialIcons.map((social, index) => (
                                <a key={index} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center text-white">
                                    <img src={social.icon} alt={social.label} className="object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4 lg:gap-8 pt-8 md:pt-0">
                        <LinkColumn title="Company" links={companyLinks} />
                        <LinkColumn title="Quick Links" links={resourcesLinks} />
                        <LinkColumn title="Partners" links={partnersLinks} />
                    </div>
                </div>

                <hr className="border-t border-gray-700/50 my-12" />

                <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex space-x-4 mb-4 sm:mb-0">
                        <a href="/" className="hover:text-white transition-colors duration-200">Imprint</a>
                        <span>|</span>
                        <a href="/" className="hover:text-white transition-colors duration-200">Legal</a>
                        <span>|</span>
                        <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy</a>
                        <span>|</span>
                        <a href="/" className="hover:text-white transition-colors duration-200">Report a Vulnerability</a>
                    </div>
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} TripleHash | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
