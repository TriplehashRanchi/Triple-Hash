// components/IntegrationsSection.jsx
'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import AIFeaturesSection from './AIFeaturesSection';
import { FaArrowRight } from 'react-icons/fa'; // For the arrow icon
import { MdCheck } from 'react-icons/md'

// --- DATA (No changes here) ---
const integrationsRow1 = [
    { name: 'Google Calendar', src: '/icon1 (1).png' },
    { name: 'Outlook', src: '/icon1 (2).png' },
    { name: 'OpenAI', src: '/icon1 (3).png' },
    { name: 'Dolphin', src: '/icon1 (4).png' },
    { name: 'Snowflake', src: '/icon1 (5).png' },
    { name: 'Segment', src: '/icon1 (6).png' },
    { name: 'Mailchimp', src: '/icon1 (7).png' },
    { name: 'Airtable', src: '/icon1 (8).png' },
    { name: 'Google Cloud', src: '/icon1 (9).png' },
    { name: 'Power BI', src: '/icon1 (10).png' },
    { name: 'Notion', src: '/icon1 (11).png' },
    { name: 'SendGrid', src: '/icon1 (12).png' },
    { name: 'Google Calendar', src: '/icon1 (1).png' },
    { name: 'Outlook', src: '/icon1 (2).png' },
    { name: 'OpenAI', src: '/icon1 (3).png' },
    { name: 'Dolphin', src: '/icon1 (4).png' },
    { name: 'Snowflake', src: '/icon1 (5).png' },
    { name: 'Segment', src: '/icon1 (6).png' },
    { name: 'Mailchimp', src: '/icon1 (7).png' },
    { name: 'Airtable', src: '/icon1 (8).png' },
    { name: 'Google Cloud', src: '/icon1 (9).png' },
    { name: 'Power BI', src: '/icon1 (10).png' },
    { name: 'Notion', src: '/icon1 (11).png' },
    { name: 'SendGrid', src: '/icon1 (12).png' },
];

const integrationsRow2 = [
    { name: 'Google Calendar', src: '/icon1 (1).png' },
    { name: 'Outlook', src: '/icon1 (2).png' },
    { name: 'OpenAI', src: '/icon1 (3).png' },
    { name: 'Dolphin', src: '/icon1 (4).png' },
    { name: 'Snowflake', src: '/icon1 (5).png' },
    { name: 'Segment', src: '/icon1 (6).png' },
    { name: 'Mailchimp', src: '/icon1 (7).png' },
    { name: 'Airtable', src: '/icon1 (8).png' },
    { name: 'Google Cloud', src: '/icon1 (9).png' },
    { name: 'Power BI', src: '/icon1 (10).png' },
    { name: 'Notion', src: '/icon1 (11).png' },
    { name: 'SendGrid', src: '/icon1 (12).png' },
    { name: 'Google Calendar', src: '/icon1 (1).png' },
    { name: 'Outlook', src: '/icon1 (2).png' },
    { name: 'OpenAI', src: '/icon1 (3).png' },
    { name: 'Dolphin', src: '/icon1 (4).png' },
    { name: 'Snowflake', src: '/icon1 (5).png' },
    { name: 'Segment', src: '/icon1 (6).png' },
    { name: 'Mailchimp', src: '/icon1 (7).png' },
    { name: 'Airtable', src: '/icon1 (8).png' },
    { name: 'Google Cloud', src: '/icon1 (9).png' },
    { name: 'Power BI', src: '/icon1 (10).png' },
    { name: 'Notion', src: '/icon1 (11).png' },
    { name: 'SendGrid', src: '/icon1 (12).png' },
];

const stats = [
    {
        id: 'github',
        icon: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/VS_Code_Dark_b6aa3d887d.svg',
        title: 'Top 50 Github.',
        description: 'Our 126.7k stars place us among the most popular projects.',
        gradient: `bg-[radial-gradient(circle_farthest-side_at_100%_-80%,rgba(175,106,140,0.46),rgba(98,65,83,0.38)_39%,transparent_55%),radial-gradient(circle_at_50%_100%,#7a396d4a,#2a192963)]`
    },
    {
        id: 'g2',
        icon: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/VS_Code_Dark_1_ab4a2bad7b.svg',
        title: '4.9/5 stars on G2.',
        description: 'To quote "A solid automation tool that just works".',
        gradient: `bg-[radial-gradient(circle_at_0_100%,#ff4f311f,#fff0),radial-gradient(circle_at_50%_100%,hsla(0,0%,100%,.06),transparent),radial-gradient(circle_at_50%_100%,#4b397a6e,#2a192963)]`,
    },
    {
        id: 'community',
        icon: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/social_proof_2_14745833f3.svg',
        title: '200k+ community members.',
        description: "This wouldn't be possible without you.",
        gradient: `bg-[radial-gradient(circle_farthest-side_at_0_100%,#b200ff26,#fff0_56%),radial-gradient(circle_farthest-side_at_20%_100%,hsla(0,0%,100%,.1),transparent_43%),radial-gradient(circle_at_50%_100%,#a3643a87,#2a192963)]`,
    },
];

// --- COMPONENT ---

const IntegrationsSection = () => {
    const marqueeRef = useRef(null);

    // --- NEW useEffect for 3D rotation on scroll ---
    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        // You can tweak these values to change the intensity of the effect
        const MAX_ROTATION_X = 25; // Max tilt up/down
        const MAX_ROTATION_Y = 10;  // Max tilt left/right

        const handleScroll = () => {
            const rect = marquee.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate the vertical center of the element relative to the viewport
            const elementCenterY = rect.top + rect.height / 2;

            // Calculate the progress of the element's center through the viewport
            // 0 when centered, -1 at the top, 1 at the bottom
            const progress = (elementCenterY - viewportHeight / 2) / (viewportHeight / 2);

            // Clamp progress between -1 and 1 to avoid extreme values
            const clampedProgress = Math.max(-1, Math.min(1, progress));

            // Calculate rotation values based on scroll progress
            const rotateX = clampedProgress * MAX_ROTATION_X * -1; // Invert for natural feel
            const rotateY = clampedProgress * MAX_ROTATION_Y;

            // Apply the transform directly for performance
            // This avoids React re-renders on every scroll event
            marquee.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        // Initial call to set the position on load
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        // The main container needs `overflow-hidden` to contain the glows properly
        <section className="relative w-full bg-[#0D0816] py-20 sm:py-0 overflow-hidden">
            <div className="absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-11/12 rotate-[24deg] aspect-[1/2.2] w-[80%] max-w-[400px] bg-[linear-gradient(#a13355,#5159d9)] rounded-[800%] opacity-45 blur-[128px] z-[0]" />
            <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 lg:px-8 text-center">
                {/* Stats Cards (No changes here) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-32">
                    {stats.map((stat) => (
                        <div key={stat.id} className={`p-px border border-[#ffffff1a] rounded-xl ${stat.gradient}`}>
                            <div className="rounded-[15px] p-3 h-full flex items-center">
                                <div className="flex items-center ">
                                    <div className="flex-shrink-0">
                                        <div className="bg-black/30 w-13 h-13 rounded-xl flex items-center justify-center">
                                            <Image src={stat.icon} alt={`${stat.title} icon`} width={40} height={40} className="rounded-full" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-neutral-300 font-raleway text-[1.08rem] leading-snug">
                                            <strong className="text-white font-semibold">{stat.title}</strong>{' '}
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Headline (No changes here) */}
                <h2 style={{ backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`, WebkitBackgroundClip: 'text' }} className="font-raleway bg-clip-text text-transparent text-3xl sm:text-4xl md:text-[2.8rem] font-bold">
                    Plug AI into your own data &
                    <br />
                    <span style={{ backgroundImage: 'linear-gradient(to right, #ff9b26, #ee4f27)', WebkitBackgroundClip: 'text' }} className='bg-clip-text text-transparent'>over 500 integrations</span>
                </h2>

                {/* --- MODIFIED Marquee Container --- */}
                <div
                    ref={marqueeRef}
                    // A transition is added for smoothness when the scroll stops or starts
                    className="relative mt-20 flex flex-col gap-5 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] transition-transform duration-300 ease-out"
                >
                    {/* Row 1 (No changes here) */}
                    <div className="flex w-max animate-[scroll-left_60s_linear_infinite]">
                        {[...integrationsRow1, ...integrationsRow1].map((item, index) => (
                            <div key={`r1-${index}`} className="flex-shrink-0 w-22 h-18 flex items-center justify-center">
                                <div className="w-18 h-18 bg-white hover:bg-white/40 rounded-2xl flex items-center justify-center p-3">
                                    <Image src={item.src} alt={item.name} width={32} height={32} className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 (No changes here) */}
                    <div className="flex w-max animate-[scroll-right_70s_linear_infinite]">
                        {[...integrationsRow2, ...integrationsRow2].map((item, index) => (
                            <div key={`r2-${index}`} className="flex-shrink-0 w-22 h-18 flex items-center justify-center">
                                <div className="w-18 h-18 bg-white hover:bg-white/40 rounded-2xl flex items-center justify-center p-3">
                                    <Image src={item.src} alt={item.name} width={32} height={32} className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button (No changes here) */}
                <div className="mt-16">
                    <button className="bg-gradient-to-r cursor-pointer from-[#077AC7] to-[#6B21EF] text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                        Browse all integrations
                    </button>
                </div>
                <div className="py-20 sm:py-34  flex flex-col items-center gap-20">
                    <h2
                        style={{ backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`, WebkitBackgroundClip: 'text' }}
                        className="bg-clip-text text-transparent font-raleway text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-center ">
                        The fast way to actually
                        <br />
                        <span style={{ backgroundImage: 'linear-gradient(to right, #ff9b26, #ee4f27)', WebkitBackgroundClip: 'text' }} className="bg-clip-text text-transparent"
                        >
                            get AI working in your business
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:grid-rows-2 gap-2 w-full">

                         <div
                            className="p-px rounded-3xl w-full" /* No explicit col/row spans needed as it's the first item */
                            style={{
                                backdropFilter: 'blur(22px)',
                                background: 'linear-gradient(0deg,rgba(107,33,239,0.15),rgba(107,33,239,0.15)),radial-gradient(79.29% 94.78% at 59.78% 129.81%,#7f5eb6 0%,rgba(38,33,73,0) 100%),linear-gradient(180deg,#3c3149 0%,rgba(38,33,73,0) 100%)',
                                border: '1px solid rgba(187,154,247,0.3)',
                                boxShadow: 'inset 0 0 #fff3, 0 0 8px #000'
                            }}
                        >
                            <div className="bg-[#1a1429] rounded-3xl  p-8 flex flex-col h-full">
                                {/* Text Content */}
                                <div>
                                    <h3 className="text-white font-semibold text-2xl font-raleway">
                                        Build multi-step agents
                                        <br />
                                        calling custom tools
                                    </h3>
                                    <p className="mt-4 text-gray-300 text-sm leading-relaxed font-raleway">
                                        Create agentic systems on a single screen.
                                        Integrate any LLM into your workflows as fast
                                        as you can drag-n-drop.
                                    </p>
                                </div>
                                {/* Image and Button */}
                                <div className="mt-8 flex flex-col items-center justify-between flex-grow">
                                    
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Chat with your own data (Right side, spanning both rows) */}
                        <div
                            className="p-px rounded-3xl w-full lg:col-start-2 lg:row-span-2" /* Explicitly start in col 2, span 2 rows */
                            style={{
                                backdropFilter: 'blur(22px)',
                                background: 'linear-gradient(0deg,rgba(107,33,239,0.15),rgba(107,33,239,0.15)),radial-gradient(79.29% 94.78% at 59.78% 129.81%,#7f5eb6 0%,rgba(38,33,73,0) 100%),linear-gradient(180deg,#3c3149 0%,rgba(38,33,73,0) 100%)',
                                border: '1px solid rgba(187,154,247,0.3)',
                                boxShadow: 'inset 0 0 #fff3, 0 0 8px #000'
                            }}
                        >
                            <div className="bg-[#1a1429] rounded-3xl p-8 flex flex-col h-full">
                                <h3 className="text-white font-semibold text-2xl font-raleway">
                                    Chat with your own data
                                </h3>
                                <p className="mt-4 text-gray-300 text-sm leading-relaxed font-raleway flex-grow">
                                    Use Slack, Teams, SMS, voice, or our
                                    embedded chat interface to get
                                    accurate answers from your data,
                                    create
                                    tasks, and complete workflows.
                                </p>
                                {/* Chat Bubbles */}
                                <div className="mt-8 flex flex-col gap-4 text-sm font-raleway">
                                    <div className="bg-white/10 p-3 rounded-lg text-gray-200">
                                        Who held meetings with
                                        SpaceX last week?
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-lg text-gray-200 self-end text-right">
                                        On Wednesday, Joe
                                        updated the status to
                                        "won" in Salesforce after a
                                        Zoom call.
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-lg text-gray-200">
                                        On Thursday, Sue
                                        provided on-site setup and
                                        closed the ServiceNow
                                        ticket.
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-lg text-gray-200 self-start text-left">
                                        Create a task in Asana...
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Self-host everything (Bottom Left - will implicitly be in row 2, col 1) */}
                        <div
                            className="p-px rounded-3xl w-full lg:row-start-2" /* Explicitly start in row 2 */
                            style={{
                                backdropFilter: 'blur(22px)',
                                background: 'linear-gradient(0deg,rgba(107,33,239,0.15),rgba(107,33,239,0.15)),radial-gradient(79.29% 94.78% at 59.78% 129.81%,#7f5eb6 0%,rgba(38,33,73,0) 100%),linear-gradient(180deg,#3c3149 0%,rgba(38,33,73,0) 100%)',
                                border: '1px solid rgba(187,154,247,0.3)',
                                boxShadow: 'inset 0 0 #fff3, 0 0 8px #000'
                            }}
                        >
                            <div className="bg-[#1a1429] rounded-3xl p-8 flex flex-col h-full">
                                {/* "SELF HOSTED" Tag */}
                                <div className="mb-6 self-start bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300 font-semibold uppercase tracking-wide">
                                    Self Hosted
                                </div>
                                {/* Image and Text */}
                                <div className="flex flex-col md:flex-row items-center gap-6 flex-grow">
                                    
                                    <div className="text-left">
                                        <h3 className="text-white font-semibold text-2xl font-raleway mb-4">
                                            Self-host everything –
                                            <br />
                                            including AI models
                                        </h3>
                                        <ul className="text-gray-300 text-sm space-y-2 font-raleway">
                                            <li className="flex items-center gap-2">
                                                <MdCheck className="text-green-400" /> Protect your data by deploying on-prem.
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <MdCheck className="text-green-400" /> Deploy with Docker
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <MdCheck className="text-green-400" /> Access the entire source code on Github
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <MdCheck className="text-green-400" /> Hosted version also available
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default IntegrationsSection;