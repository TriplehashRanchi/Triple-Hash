// components/EnterpriseSection.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';
import SpotlightCard from './ReactBit/SpotlightCard';


const EnterpriseSection = () => {
    return (
        <section className="w-full bg-[#0D0816] pt-20 overflow-hidden">
            <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">

                {/* --- Left Column: Text Content and Features --- */}
                <div className="flex flex-col w-full lg:w-1/2">
                    {/* "Enterprise-ready" Badge */}
                    <div className="w-fit sm:w-[22%] flex items-center gap-1 rounded-3xl text-[0.9rem] sm:text-[0.8rem] border border-[#FFFFFF1A] text-white pt-[3px] pl-[1px] pr-2 sm:pr-1 mb-4
                        backdrop-filter backdrop-blur-md
                        bg-[radial-gradient(circle_closest-corner_at_50%_160%,#8b5261,transparent_67%),linear-gradient(hsla(0,0%,100%,0.18),transparent)]
                        shadow-[inset_0_0_#c4bbd3,0_4px_4px_#0e091870,0_13px_16px_-8px_#000,inset_0_4px_12px_#ffffff0d]">
                        <img src="/case.png" alt="" className="object-contain w-7 h-7" />
                        Enterprise-ready
                    </div>

                    {/* Main Heading */}

                    <h2
                        style={{
                            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                            WebkitBackgroundClip: 'text',
                        }}
                        className="text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[2.8rem] font-bold leading-medium font-raleway mb-6"
                    >
                        Secure. Reliable. Collaborative.
                    </h2>

                    {/* Description Paragraph */}
                    <p className="text-[#C4BBD3] text-base md:text-md leading-medium font-raleway mb-8">
                        Remove inefficiencies across your org by rolling out automation as reliably as
                        you deploy code. Run n8n air-gapped on your servers or on our secure
                        cloud-based solution.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="bg-gradient-to-r from-[#077AC7] to-[#6B21EF] text-white text-sm font-semibold px-8 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300 w-full sm:w-auto">
                            Explore n8n for enterprise
                        </button>
                        <button className="bg-transparent border border-[#FFFFFF63] text-white text-sm font-semibold px-8 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto">
                            Talk to sales
                        </button>
                    </div>

                    {/* Feature List */}
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-6 md:gap-y-8 gap-x-6 text-white font-raleway">
                        <div>
                            <h3 className="text-md font-semibold mb-1">Security</h3>
                        </div>
                        <div>
                            <p className="text-[#C4BBD3] text-base">
                                Fully on-prem option, SSO SAML, and LDAP,
                                encrypted secret stores, version control,
                                advanced RBAC permissions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-md font-semibold mb-1">Performance</h3>
                        </div>
                        <div>
                            <p className="text-[#C4BBD3] text-base">
                                Audit logs & log streaming to 3rd party,
                                workflow history, custom variables, external
                                storage.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-md font-semibold mb-1">Collaboration</h3>
                        </div>
                        <div>
                            <p className="text-[#C4BBD3] text-base">
                                Git Control, isolated environments, multi-user
                                workflows.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/10 mt-8 md:mt-10 mb-4"></div>

                    {/* Compliance Logos */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <Image src="/legal.png" alt="AICPA SOC Logo" width={80} height={80} />
                        <Image src="/legal.png" alt="GDPR Compliant Logo" width={80} height={80} />
                        <Image src="/legal.png" alt="Compliance Shield Star" width={80} height={80} />
                    </div>
                </div>

                {/* --- Right Column: Card --- */}
                <div className="flex items-center justify-center pt-8 sm:pt-16 lg:pt-80 w-full lg:w-auto">
                    <SpotlightCard
                        className="custom-spotlight-card w-full max-w-[560px]"
                        spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)"
                    >
                        <div
                            className="w-full max-w-sm px-6 sm:px-8 py-8 sm:py-10 rounded-[1.5rem] text-white flex flex-col items-start"
                            style={{
                                border: '1px solid hsla(0, 0%, 100%, .16)',
                                boxShadow: 'inset 0 1px #ff8e5d66',
                                backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`
                            }}
                        >
                            {/* Quote */}
                            <p className="text-gray-200 text-base leading-medium font-raleway mb-6 sm:mb-8">
                                "The idea is that everybody in the
                                organization can use n8n to manage data
                                retrieval or data transformation."
                            </p>

                            {/* Author */}
                            <div className="flex items-center mb-8 sm:mb-12">
                                <Image src="/picture1.png" alt="Martino Bonfiglioli Avatar" width={48} height={48} className="rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold text-base sm:text-[1.1rem] font-raleway">Martino Bonfiglioli</p>
                                    <p className="text-[#C4BBD3] text-sm font-raleway">Senior Product Manager</p>
                                </div>
                            </div>

                            {/* Link */}
                            <a href="#" className="inline-flex items-center text-[#C4BBD3] text-sm font-semibold group font-raleway">
                                See the case <HiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSection;
