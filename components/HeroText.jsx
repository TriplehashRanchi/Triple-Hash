import Image from 'next/image'
import React from 'react'

const HeroText = () => {
    return (
        <div className="flex justify-between mt-60 max-w-[1360px] px-6 z-2 lg:px-8 mx-auto ">
            <div className="flex flex-col items-start justify-center w-1/2">
                <div
                    className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    <h1
                        className="text-4xl sm:text-5xl md:text-4xl font-bold font-raleway z-2 leading-tight text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                            WebkitBackgroundClip: 'text',
                        }}
                    >
                        Have an Idea?
                        <br />
                        <span
                            className="bg-clip-text text-transparent font-semibold"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #ff9b26, #ee4f27)',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            Let’s Engineer It Into Reality !
                        </span>
                    </h1>

                    <p className="mt-6 text-base z-2 md:text-md text-[#C4BBD3] max-w-lg font-raleway">
                        We help founders turn raw ideas into high-performing web & mobile apps — with full-stack development, AI integration, and scalable architecture built for long-term growth.
                    </p>

                    <div className="mt-8 flex z-2 flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="w-full md:text-sm sm:w-auto bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                            Get started for Free
                        </button>
                        <button className="w-full md:text-sm sm:w-auto bg-transparent border border-gray-600 text-gray-200 font-semibold px-5 py-3 rounded-lg hover:bg-white/10 hover:border-gray-400 transition-colors duration-300">
                            Talk to Sales 
                        </button>
                    </div>
                </div></div>
            <div className="flex flex-col items-start justify-center w-1/2">
                <div className="hidden lg:block relative h-full -ms-12 w-full animate-fade-in">
                    <div className="">
                        <Image
                            src="/hash.webp"
                            alt="AI Workflow"
                            fill
                            className="object-contain scale-140"
                            priority
                            style={{ filter: 'drop-shadow(0px 10px 40px rgba(238, 79, 39, 0.25))' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroText
