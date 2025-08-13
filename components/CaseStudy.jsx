import React from 'react';
import Image from 'next/image'; // Assuming Next.js Image component for optimized images
import SpotlightCard from './ReactBit/SpotlightCard';

const CaseStudy = () => {
    return (
        <div className='bg-[#0D0816] py-20'> {/* Added py-20 for vertical spacing */}
            <div className='flex flex-col items-center max-w-[1360px] mx-auto px-6 lg:px-8'> {/* Added max-width and horizontal padding */}

                {/* Top Section: "See The Results" badge and "Case Studies" heading */}
                <div className='flex items-center justify-center gap-1 rounded-3xl text-[0.9rem] border border-[#FFFFFF1A] text-white pt-[3px] pl-[1px] pr-3 mb-4
                    backdrop-filter backdrop-blur-md
                    bg-[radial-gradient(circle_closest-corner_at_50%_160%,#8b5261,transparent_67%),linear-gradient(hsla(0,0%,100%,0.18),transparent)]
                    shadow-[inset_0_0_#c4bbd3,0_4px_4px_#0e091870,0_13px_16px_-8px_#000,inset_0_4px_12px_#ffffff0d]'>
                    <img src="/case.png" alt="" className='object-contain w-8 h-8' /> {/* Adjusted image size */}
                    See The Results
                </div>
                <h2 style={{
                    backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                    WebkitBackgroundClip: 'text',
                }} className="text-3xl sm:text-4xl md:text-[2.8rem] font-bold font-raleway z-2 leading-tight text-transparent bg-clip-text" /* Added mb-20 for space below heading */
                >Case Studies</h2>

                {/* Two Cards Section */}
                <div className='flex flex-col lg:flex-row gap-6 justify-center w-full mt-16'>
                    {/* --- Card 1: Delivery Hero --- */}
                    <SpotlightCard className="custom-spotlight-card w-full max-w-[560px]"
                        spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)">
                        <div
                            className='p-14 rounded-[1.5rem]  h-full  text-white flex flex-col items-start'
                            style={{
                                border: '1px solid hsla(0, 0%, 100%, .16)',
                                boxShadow: 'inset 0 1px #ff8e5d66',
                                backgroundImage: `radial-gradient(circle at 30% 140%, rgba(75, 153, 217, .33), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0a16195e), radial-gradient(circle at 50% -30%, #a85c5c33, #ff131300), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`
                            }}
                        >
                            {/* Company Logo */}
                            <div className='mb-8'>
                                <Image src="/logo1.webp" alt="Delivery Hero Logo" width={100} height={30} objectFit="contain" />
                            </div>

                            {/* Headline */}
                            <h3 className='text-xl md:text-2xl font-normal  leading-normal font-raleway text-[#C4BBD3]'>
                                How Delivery Hero saved <span className='text-[#FFFFFF] font-bold'>200 hours each month</span> with a single IT workflow
                            </h3>

                            {/* Separator Line */}
                            <div className='w-full h-px bg-white/10 my-10'></div>

                            {/* Quote */}
                            <p className='text-[#E4E4E4]/70 text-lg leading-normal  flex-grow font-raleway'>
                                "We have seen drastic efficiency improvements since we
                                started using n8n for user management. It's incredibly
                                powerful, but also simple to use."
                            </p>

                            {/* Author Section */}
                            <div className='flex items-center my-10'>
                                <Image src="/picture1.png" alt="Dennis Zahrt Avatar" width={48} height={48} className='rounded-full mr-4' />
                                <div>
                                    <p className='  text-lg font-raleway'>Dennis Zahrt</p>
                                    <p className='text-gray-400 text-sm font-raleway'>Director of Global IT Service Delivery</p>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="bg-gradient-to-r from-[#077AC7] to-[#6B21EF] text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                                Read Case Study
                            </button>
                        </div>
                    </SpotlightCard>
                    {/* --- Card 2: The StepStone Group --- */}
                    <SpotlightCard className="custom-spotlight-card w-full max-w-[560px]"
                        spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)">
                        <div
                            className='p-14 rounded-[1.5rem]  text-white flex flex-col items-start'
                            style={{
                                border: '1px solid hsla(0, 0%, 100%, .16)',
                                boxShadow: 'inset 0 1px #ff8e5d66',
                                backgroundImage: `radial-gradient(circle at 30% 140%, rgba(75, 153, 217, .33), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0a16195e), radial-gradient(circle at 50% -30%, #a85c5c33, #ff131300), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`
                            }}
                        >
                            {/* Company Logo */}
                            <div className='mb-8'>
                                <Image src="/logo1.webp" alt="The StepStone Group Logo" width={100} height={30} objectFit="contain" />
                            </div>

                            {/* Headline */}
                            <h3 className='text-xl md:text-2xl font-normal leading-normal font-raleway text-[#C4BBD3]'>
                                How StepStone finishes <span className='text-[#FFFFFF] font-bold'>2 weeks' work in
                                only 2 hours</span> with n8n workflows
                            </h3>

                            {/* Separator Line */}
                            <div className='w-full h-px bg-white/10 my-10'></div>

                            {/* Quote */}
                            <p className='text-[#E4E4E4]/70  text-lg leading-normal flex-grow font-raleway'>
                                "We've sped up our integration of marketplace data
                                sources by 25X. It takes me 2 hours max to connect up
                                APIs and transform the data we need. You can't do this
                                that fast in code."
                            </p>
 
                            {/* Author Section */}
                            <div className='flex items-center my-10'>
                                <Image src="/picture2.png" alt="Luka Pilic Avatar" width={48} height={48} className='rounded-full mr-4' />
                                <div>
                                    <p className='  text-lg font-raleway'>Luka Pilic</p>
                                    <p className='text-gray-400 text-sm font-raleway'>Marketplace Tech Lead</p>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="  bg-gradient-to-r from-[#077AC7] to-[#6B21EF] text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                                Read Case Study
                            </button>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;