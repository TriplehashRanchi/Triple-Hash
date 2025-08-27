// src/components/Footer.jsx
'use client'; // If you're using Next.js App Router

import React from 'react';
 
const Footer = () => {
    // Data for each section of links
    const companyLinks = [
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Merch', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Security', href: '#' },
    ];

    const resourcesLinks = [
        { name: 'Case Studies', href: '#' },
        { name: 'Zapier vs n8n', href: '#' },
        { name: 'Make vs n8n', href: '#' },
        { name: 'Tools', href: '#' },
        { name: 'AI agent report', href: '#' },
    ];

    const partnersLinks = [
        { name: 'Affiliate program', href: '#' },
        { name: 'Expert partners', href: '#' },
        { name: 'Join user tests, get a gift', href: '#' },
        { name: 'Events', href: '#' },
    ];

    const integrations = [
        { name: 'Google Sheets', href: '#' },
        { name: 'Telegram', href: '#' },
        { name: 'MySQL', href: '#' },
        { name: 'Slack', href: '#' },
        { name: 'Discord', href: '#' },
        { name: 'Postgres', href: '#' },
    ];

    const trendingCombinations = [
        { name: 'HubSpot and Salesforce', href: '#' },
        { name: 'Twilio and WhatsApp', href: '#' },
        { name: 'GitHub and Jira', href: '#' },
        { name: 'Asana and Slack', href: '#' },
        { name: 'Asana and Salesforce', href: '#' },
        { name: 'Jira and Slack', href: '#' },
    ];

    const categories = [
        { name: 'Communication', href: '#' },
        { name: 'Development', href: '#' },
        { name: 'Cybersecurity', href: '#' },
        { name: 'AI', href: '#' },
        { name: 'Data & Storage', href: '#' },
        { name: 'Marketing', href: '#' },
    ];

    const templates = [
        { name: 'Creating an API endpoint', href: '#' },
        { name: 'AI agent chat', href: '#' },
        { name: 'Scrape and summarize webpa...', href: '#' },
        { name: 'Joining different datasets', href: '#' },
        { name: 'Back Up Your n8n Workflows T...', href: '#' },
        { name: 'Very quick quickstart', href: '#' },
    ];

    const guides = [
        { name: 'Telegram bots', href: '#' },
        { name: 'Open-source chatbot', href: '#' },
        { name: 'Open-source LLM', href: '#' },
        { name: 'Open-source low-code platfor...', href: '#' },
        { name: 'Zapier alternatives', href: '#' },
        { name: 'Make vs Zapier', href: '#' },
    ];

    // Social media icons (using inline SVGs for self-containment)
    const socialIcons = [
        {
            icon: "/t.png",
            href: '#',
            label: 'X (Twitter)'
        },
        {
            icon: "/g.png",
            href: '#',
            label: 'GitHub'
        },
        {
            icon: "/d.png",
            href: '#',
            label: 'Discord'
        },
        {
            icon: "/l.png",
            href: '#',
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
        <footer className="bg-[#0D0816] text-gray-400 pb-10 relative overflow-hidden"> {/* REMOVED px-4 sm:px-6 lg:px-8 FROM HERE */}

            <div className="max-w-[1360px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8"> {/* ADDED px-4 sm:px-6 lg:px-8 HERE */}
                {/* Top section: Logo, tagline, social, and main links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {/* Left side: Logo, Tagline, Social Icons */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-start">
                        <div className="flex items-center mb-4">
                            {/* n8n Logo (replace with your actual SVG or image path) */}
                            <img src="/logo.png" alt="n8n Logo" className="h-8 w-auto mr-2" />
                            <span className="text-white text-md font-bold">TripleHash</span>
                        </div>
                        <p className="text-gray-400 text-md mb-6">Automate without limits</p>
                        <div className="flex space-x-4">
                            {socialIcons.map((social, index) => (
                                <a key={index} href={social.href} aria-label={social.label}
                                    className="w-8 h-8 flex items-center justify-center   text-white">
                                    <img src={social.icon} alt="" className='object-contain' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Three columns of links */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4 lg:gap-8 pt-8 md:pt-0">
                        <LinkColumn title="Company" links={companyLinks} />
                        <LinkColumn title="Resources" links={resourcesLinks} />
                        <LinkColumn title="Partners" links={partnersLinks} />
                    </div>
                </div>

               
           
                <hr className="border-t border-gray-700/50 my-12" />

                {/* Copyright and legal links */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm  "> {/* Keep px-0 sm:px-4 here, it's specific to this narrow band */}
                    <div className="flex space-x-4 mb-4 sm:mb-0">
                        <a href="#" className="hover:text-white transition-colors duration-200">Imprint</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors duration-200">Legal</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors duration-200">Report a vulnerability</a>
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