'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {
    const textRef = useRef(null);

    useEffect(() => {
        const lines = textRef.current.querySelectorAll('.animateLine');

        gsap.from(lines, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",  // when top of block reaches 80% viewport
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            stagger: 0.3,   // each element comes one after the other
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.paddingSection}>
                <aside className={styles.containerSmall}>
                    {/* Left Side */}
                    <div className={styles.heroSection} ref={textRef}>
                        <div 
                             className={` animateLine ${styles.subtitle}`}>
                            [ Launch with confidence ]
                        </div>
                        <h1 style={{
                            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                            WebkitBackgroundClip: 'text',
                        }} className="animateLine text-transparent bg-clip-text">Effortel: Services for growth</h1>
                        <p className="animateLine">
                            Empower your vision, ignite your growth. Effortel provides the expertise,
                            technology, and unwavering support to transform your communication services
                            with ours.
                        </p>
                    </div>

                    {/* Right Side Image */}
                    <div className={styles.isImage}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/service1.avif"
                                alt="Effortel Services"

                            />
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
