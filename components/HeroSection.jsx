'use client';
import React from 'react';
import Image from 'next/image';
import Lightning from './Lightning'
import SecondSection from './SecondSection';
import HeroText from './HeroText';

const HomeSection = () => {
    return (
        <section className="relative bg-[#0D0816] h-screen  max-h-auto w-full overflow-hidden">

            {/* ⚡ Lightning Background Effect */}
            <div
                className="absolute inset-0 z-[0]"
                style={{ width: '100%', height: '100%', position: 'absolute' }}
            >
                <Lightning
                    hue={220}
                    xOffset={-1.5}
                    speed={1}
                    intensity={1}
                    size={1}
                />
            </div>

            {/* 🔮 Background Glows */}


            {/* 🌟 Main Content */}
            {/* <div className="relative z-10 h-full w-full max-w-[1360px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 items-center lg:-mt-16"> */}

                {/* Left: Text Section */}
                {/* <div
                    className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    <h1
                        className="text-4xl sm:text-5xl md:text-4xl font-bold font-raleway leading-tight text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                            WebkitBackgroundClip: 'text',
                        }}
                    >
                        Flexible AI workflow automation
                        <br />
                        <span
                            className="bg-clip-text text-transparent font-semibold"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #ff9b26, #ee4f27)',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            for technical teams
                        </span>
                    </h1>

                    <p className="mt-6 text-base md:text-md text-[#C4BBD3] max-w-lg font-raleway">
                        Build with the precision of code or the speed of drag-n-drop. Host with on-prem control or in-the-cloud convenience. n8n gives you the freedom to create multi-step AI agents and integrate any app.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="w-full md:text-sm sm:w-auto bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                            Get started for Free
                        </button>
                        <button className="w-full md:text-sm sm:w-auto bg-transparent border border-gray-600 text-gray-200 font-semibold px-5 py-3 rounded-lg hover:bg-white/10 hover:border-gray-400 transition-colors duration-300">
                            Talk to Sales
                        </button>
                    </div>
                </div> */}

                {/* Right: Hero Image */}
                {/* <div className="hidden lg:block relative h-full w-full animate-fade-in">
                    <div className="absolute top-1/2 -translate-y-1/2 w-[700px] h-[700px]">
                        <Image
                            src="/hash.webp"
                            alt="AI Workflow"
                            fill
                            className="object-contain scale-175"
                            priority
                            style={{ filter: 'drop-shadow(0px 10px 40px rgba(238, 79, 39, 0.25))' }}
                        />
                    </div>
                </div> */}
            {/* </div> */}
            <HeroText/>
            
            <SecondSection/>
          
        </section>
    );
};

export default HomeSection;
