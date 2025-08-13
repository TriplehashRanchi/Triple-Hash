// components/Stack.jsx
'use client'; // Needed for client-side functionality in Next.js

import React from 'react';
import Image from 'next/image'; // For Next.js optimized images
import localStyles from './ScrollStackPureCSS.module.css'; // Import your CSS module
import { MdCheck } from 'react-icons/md'

const Stack = () => {
    // We are now hardcoding the content for each card directly.
    // The numberOfCards will simply be 3, as we're rendering them explicitly.
    const numberOfCards = 3;

    return (
        <div className={localStyles['scroll-stack-wrapper']}>
            <div
                className={localStyles['scroll-stack-container']}
                style={{
                    '--num-cards': numberOfCards,
                    '--sticky-offset': '20vh',
                    '--card-scroll-offset-multiplier': '80vh',
                    '--card-spacing': '10vh'
                }}
            >
                <div className={localStyles['scroll-stack-content']}>
                    {/* card 1 */}
                    <div
                        className={`${localStyles['scroll-stack-card']} 
                                 border border-gray-700 [background:radial-gradient(circle_at_top_left,rgba(0,200,255,0.4),transparent_10%),radial-gradient(circle_at_top_right,rgba(0,200,255,0.4),transparent_10%),radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.4),transparent_2%),radial-gradient(circle_at_bottom_right,rgba(0,200,255,0.4),transparent_10%),#FFF9EF]`}
                    >
                        <div className="flex flex-col lg:flex-row items-center w-full h-full gap-20 p-14">
                            {/* Left Section: Text Content */}
                            <div className="w-1/2 display flex flex-col gap-8 p-8">
                                <div className='flex flex-col gap-4'>
                                    <h2 className="text-black font-medium text-[2.95rem] leading-none">Code when you need it, UI when you don't</h2>
                                    <p className="w-[70%] text-gray-1000 text-md">Other tools limit you to either a visual building experience, or code. With n8n, you get the best of both worlds.</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <p className="flex gap-2"><span className='text-gray-500 text-[1.2rem]'>&lt;/&gt;</span><strong>Write JavaScript or Python</strong> - you can always fall back to code</p>
                                    <p className="flex gap-2"><span className='text-gray-500 text-[1.2rem]'>&lt;/&gt;</span><strong>Add libraries</strong> from npm or Python for even more power</p>
                                    <p className="flex gap-2"><span className='text-gray-500 text-[1.2rem]'>&lt;/&gt;</span><strong>Paste cURL requests</strong> into your workflow</p>
                                    <p className="flex gap-2"><span className='text-gray-500 text-[1.2rem]'>&lt;/&gt;</span><strong>Merge workflow branches</strong>, don’t just split them</p>
                                </div>
                            </div>
                            {/* Right Section: Image */}
                            <div className="w-1/2 pr-8 ">
                                <img src="/code.webp" alt="" className={`${localStyles['tilt-img']} object-contain `} />
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div
                        className={`${localStyles['scroll-stack-card']} 
                                   bg-[#0e0918] border-blue-700`}
                    >
                        <div className="flex flex-col lg:flex-row items-center w-full h-full gap-20  p-14">
                            {/* Left Section: Text Content */}
                            <div className="w-1/2 display flex flex-col gap-8 p-8">
                                {/* Add your text content here */}
                                <div className='flex flex-col gap-0'>
                                    <h2 className="text-[2.9rem] font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7C7C7C] ">Run. Tweak. Repeat</h2>
                                    <p className="text-gray-300">The same short feedback loops that make you smile at your scripts.</p>

                                </div>
                                <div className='text-[#C4BBD3] flex flex-wrap gap-4'>
                                    <div className='flex gap-8'>
                                        <div className='flex gap-2 w-[45%]'>
                                            <MdCheck fontSize={40} /><p ><strong className='text-white'>Re-run single steps</strong> without re-running the whole workflow</p>
                                        </div>
                                        <div className='flex gap-2 w-[45%]'>
                                            <MdCheck fontSize={40} /><p><strong className='text-white'>Replay or mock data</strong> to avoid waiting for external systems</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-8'>
                                        <div className='flex gap-2 w-[45%]'>
                                            <MdCheck fontSize={30} /><p ><strong className='text-white'>Debug fast</strong>, with logs in line with your code </p>

                                        </div>
                                        <div className='flex gap-2 w-[45%]'>
                                            <MdCheck fontSize={30} /><p><strong className='text-white'>Use 1700+ templates</strong> to jump-start your project</p>

                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <button className="bg-gradient-to-r cursor-pointer from-[#077AC7] to-[#6B21EF] text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                                        Browse all integrations
                                    </button>
                                </div>
                            </div>
                            {/* Right Section: Image */}

                            <div className="w-1/2 p-8">
                                <img src="/code2.png" alt="" className='object-contain' />
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Stack;