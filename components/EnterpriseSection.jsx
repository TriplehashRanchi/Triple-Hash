// components/EnterpriseSection.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import { FaBolt } from 'react-icons/fa'; // For the lightning bolt icon
import { HiArrowRight } from 'react-icons/hi'; // For the arrow icon

  
 
const martinoAvatarPath = '/images/enterprise/martino-avatar.png';
 

const EnterpriseSection = () => {
    return (
        <section className="w-full bg-[#0D0816] py-20 lg:py-32 overflow-hidden">

            <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-8 flex justify-between">

                {/* --- Left Column: Text Content and Features --- */}
                <div className="flex flex-col w-1/2">
                    {/* "Enterprise-ready" Badge */}
                    <div className='w-[26%] flex items-center   gap-1 rounded-3xl text-[0.9rem] border border-[#FFFFFF1A] text-white pt-[3px] pl-[1px] pr-1 mb-4
                    backdrop-filter backdrop-blur-md
                    bg-[radial-gradient(circle_closest-corner_at_50%_160%,#8b5261,transparent_67%),linear-gradient(hsla(0,0%,100%,0.18),transparent)]
                    shadow-[inset_0_0_#c4bbd3,0_4px_4px_#0e091870,0_13px_16px_-8px_#000,inset_0_4px_12px_#ffffff0d]'>
                        <img src="/case.png" alt="" className='object-contain w-8 h-8' /> {/* Adjusted image size */}
                        Enterprise-ready
                    </div>

                    {/* Main Heading */}
                    <h2  style={{
                            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                            WebkitBackgroundClip: 'text',
                        }} className="text-transparent bg-clip-text text-4xl sm:text-5xl lg:text-[2.8rem] font-bold leading-medium font-raleway mb-6">
                        Secure. Reliable. Collaborative.
                    </h2>

                    {/* Description Paragraph */}
                    <p className="text-[#C4BBD3] text-md leading-medium font-raleway mb-8  ">
                        Remove inefficiencies across your org by rolling out automation as reliably as
                        you deploy code. Run n8n air-gapped on your servers or on our secure
                        cloud-based solution.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <button className="bg-gradient-to-r from-[#077AC7] to-[#6B21EF] text-white text-sm font-semibold px-8 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                            Explore n8n for enterprise
                        </button>
                        <button className="bg-transparent border border-white/20 text-white text-sm font-semibold px-8 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                            Talk to sales
                        </button>
                    </div>

                    {/* Feature List */}
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-8 gap-x-6 text-white font-raleway">
                        {/* Security Feature */}
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

                        {/* Performance Feature */}
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

                        {/* Collaboration Feature */}
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
                            <div className='w-full h-px bg-white/10 mt-10 mb-4'></div>
                    {/* Compliance Logos */}
                    <div className="flex items-center gap-6 ">
                        <Image src="/legal.png" alt="AICPA SOC Logo" width={80} height={80} objectFit="contain" />
                        <Image src="/legal.png" alt="GDPR Compliant Logo" width={80} height={80} objectFit="contain" />
                        <Image src="/legal.png"  alt="Compliance Shield Star" width={80} height={80} objectFit="contain" />
                    </div>
                </div>

                {/* --- Right Column: Server Rack Image and Quote Card --- */}
                <div className=" flex items-center justify-center pt-50   ">

                    <div
                        className='w-full max-w-sm p-8 rounded-[1.5rem]  text-white flex flex-col items-start'
                         style={{
                                    border: '1px solid hsla(0, 0%, 100%, .16)',
                                    boxShadow: 'inset 0 1px #ff8e5d66',
                                    backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`
                                }} 

                    >
                        {/* Quote Text */}
                        <p className='text-gray-300 text-md leading-relaxed font-raleway'>
                            "The idea is that everybody in the
                            organization can use n8n to manage data
                            retrieval or data transformation."
                        </p>

                        {/* Author Section */}
                        <div className='flex items-center my-12'>
                            <Image src="/picture1.png" alt="Martino Bonfiglioli Avatar" width={48} height={48} className='rounded-full mr-4' />
                            <div>
                                <p className='font-semibold text-lg font-raleway'>Martino Bonfiglioli</p>
                                <p className='text-gray-400 text-sm font-raleway'>Senior Product Manager</p>
                            </div>
                        </div>

                        {/* "See the case" Link */}
                        <a href="#" className="inline-flex items-center text-white text-base font-semibold group font-raleway">
                            See the case <HiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EnterpriseSection;