// src/components/TestimonialsSection.jsx
'use client'; // If you're using Next.js App Router

import React, { useState, useRef } from 'react';

import './TestimonialsSection.css'; // Import the CSS file for animation

const testimonials = [
    {
        quote: (
            <>
                I just have to say, <strong className="text-white">n8n's integration with third-party services is absolutely mind-blowing.</strong> It's like having a Swiss Army knife for automation. So many tasks become a breeze, and I can quickly validate and implement my ideas without any hassle.
            </>
        ),
        author: 'Nanbing',
        handle: '@1ronben',
        avatarSrc: '/picture1.png',
        bgColor: {
            '--bg-color-1': 'rgba(126,34,206,.3)', // A light blue with 30% opacity
            '--bg-color-2': 'rgba(38, 33, 73, 0)',   // A dark purple that is fully transparent
            backgroundColor: '#190918f0',           // The main dark purple/black background of the card
            // --- Change this line ---
            backgroundImage: 'radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)',
            // -------------------------
            backgroundRepeat: 'no-repeat',
            boxShadow: 'inset -1px -1px #fff3, inset 1px 1px #fff3',
            transitionDuration: '.3s',
            transitionProperty: '--bg-color-1, --bg-color-2',
        }

    },
    {
        quote: (
            <>
                Found the holy grail of automation yesterday... Yesterday I tried n8n and it blew my mind 🤯 What would've taken me 3 days to code from scratch? Done in 2 hours. The best part? If you still want to get your hands dirty with code (because let's be honest, we developers can't help ourselves &#129322;), you can just drop in custom code nodes. Zero restrictions.
            </>
        ),
        author: 'Francois LaBl',
        handle: '@francois-laBl',
        avatarSrc: '/picture2.png',
        bgColor: {
            '--bg-color-1': 'rgba(7, 122, 199, 0.3)', // A light blue with 30% opacity
            '--bg-color-2': 'rgba(38, 33, 73, 0)',   // A dark purple that is fully transparent
            backgroundColor: '#190918f0',           // The main dark purple/black background of the card
            // --- Change this line ---
            backgroundImage: 'radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)',
            // -------------------------
            backgroundRepeat: 'no-repeat',
            boxShadow: 'inset -1px -1px #fff3, inset 1px 1px #fff3',
            transitionDuration: '.3s',
            transitionProperty: '--bg-color-1, --bg-color-2',
        }
    },
    {
        quote: (
            <>
                <strong className="text-white">  Anything is possible with n8n.</strong> These guys are doing amazing work and are very open. The entire project is available to look at on GitHub.
            </>
        ),
        author: 'Jodie M',
        handle: '@jodiem',
        avatarSrc: '/picture1.png',
        bgColor: {
            '--bg-color-1': 'rgba(126,34,206,.3)', // A light blue with 30% opacity
            '--bg-color-2': 'rgba(38, 33, 73, 0)',   // A dark purple that is fully transparent
            backgroundColor: '#190918f0',           // The main dark purple/black background of the card
            // --- Change this line ---
            backgroundImage: 'radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)',
            // -------------------------
            backgroundRepeat: 'no-repeat',
            boxShadow: 'inset -1px -1px #fff3, inset 1px 1px #fff3',
            transitionDuration: '.3s',
            transitionProperty: '--bg-color-1, --bg-color-2',
        }
    },
    {
        quote: (
            <>
                <strong className="text-white">n8n is an incredibly powerful workflow automation tool. </strong> It's flexible, open-source, and constantly evolving with new features and integrations. Highly recommend it!
            </>
        ),
        author: 'Alex P',
        handle: '@alex_p',
        avatarSrc: '/picture2.png',
        bgColor: {
            '--bg-color-1': 'rgba(7, 122, 199, 0.3)', // A light blue with 30% opacity
            '--bg-color-2': 'rgba(38, 33, 73, 0)',   // A dark purple that is fully transparent
            backgroundColor: '#190918f0',           // The main dark purple/black background of the card
            // --- Change this line ---
            backgroundImage: 'radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)',
            // -------------------------
            backgroundRepeat: 'no-repeat',
            boxShadow: 'inset -1px -1px #fff3, inset 1px 1px #fff3',
            transitionDuration: '.3s',
            transitionProperty: '--bg-color-1, --bg-color-2',
        }
    },
    {
        quote: (
            <>
                The community around n8n is fantastic. <strong className="text-white">I've always found quick help and great insights whenever I've needed them.</strong> A true testament to open-source power!
            </>
        ),
        author: 'Maria S',
        handle: '@maria_s',
        avatarSrc: '/picture1.png',
        bgColor: {
            '--bg-color-1': 'rgba(126,34,206,.3)', // A light blue with 30% opacity
            '--bg-color-2': 'rgba(38, 33, 73, 0)',   // A dark purple that is fully transparent
            backgroundColor: '#190918f0',           // The main dark purple/black background of the card
            // --- Change this line ---
            backgroundImage: 'radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)',
            // -------------------------
            backgroundRepeat: 'no-repeat',
            boxShadow: 'inset -1px -1px #fff3, inset 1px 1px #fff3',
            transitionDuration: '.3s',
            transitionProperty: '--bg-color-1, --bg-color-2',
        }
    },
    {
        quote: (
            <>
                Honestly, n8n has saved me countless hours. Before,   <strong className="text-white">I was manually moving data between apps.</strong> Now, it's all automated. Pure magic! ✨
            </>
        ),
        author: 'Ben T',
        handle: '@ben_t',
        avatarSrc: '/picture1.png',
        bgColor: {
            '--bg-color-1': 'rgba(7, 122, 199, 0.3)', // A light blue with 30% opacity
            '--bg-color-2': 'rgba(38, 33, 73, 0)',   // A dark purple that is fully transparent
            backgroundColor: '#190918f0',           // The main dark purple/black background of the card
            // --- Change this line ---
            backgroundImage: 'radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)',
            // -------------------------
            backgroundRepeat: 'no-repeat',
            boxShadow: 'inset -1px -1px #fff3, inset 1px 1px #fff3',
            transitionDuration: '.3s',
            transitionProperty: '--bg-color-1, --bg-color-2',
        }
    },
];

const TestimonialCard = ({ quote, author, handle, avatarSrc, bgColor }) => {
    return (
        <div style={bgColor} className="flex-none w-[350px] md:w-[400px] lg:w-[600px] h-[330px] flex flex-col justify-between p-6 sm:p-10 m-4 rounded-xl border border-white/[0.1] ">
            <p className="text-gray-300 text-[1.05rem] leading-relaxed mb-6 flex-grow overflow-hidden">
                {quote}
            </p>
            <div className="flex items-center mt-auto">
                <img
                    src={avatarSrc}
                    alt={author}
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                />
                <div>
                    <p className="text-white  text-base">{author}</p>
                    <p className="text-gray-400 text-sm">{handle}</p>
                </div>
            </div>
        </div>
    );
};



const TestimonialsSection = () => {
    const [isPaused, setIsPaused] = useState(false);
    const scrollContainerRef = useRef(null);

    // Duplicate testimonials multiple times to create a seamless infinite loop effect.
    // We'll duplicate it 3 times to ensure enough content for smooth animation.
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="bg-[#0D0816] pb-20 overflow-hidden relative">
            {/* Background glow/particles (as seen in your original image) */}
            <div className='max-w-[1360px] mx-auto px-4 lg:px-8'>


                {/* Scrolling Testimonials Container */}
                <div
                    className="overflow-hidden relative  " // pb-10 gives space for potential shadow on cards
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="absolute inset-0 z-0"
                    >
                        <div className="absolute inset-0 bg-transparent stars-background" />
                    </div>

                    <div
                        ref={scrollContainerRef}
                        // Apply 'paused' class if isPaused is true, else 'scrolling'
                        className={`flex w-max will-change-transform ${isPaused ? 'paused' : 'scrolling'}`}
                    >
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index} // Use index as key here because data is duplicated
                                quote={testimonial.quote}
                                author={testimonial.author}
                                handle={testimonial.handle}
                                avatarSrc={testimonial.avatarSrc}
                                bgColor={testimonial.bgColor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;