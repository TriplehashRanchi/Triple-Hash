'use client';


import React, { useLayoutEffect, useRef } from 'react';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const lines = textRef.current.querySelectorAll('.animateLine');

            gsap.from(lines, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 50,
                stagger: 0.3,
                duration: 0.8,
                ease: "power3.out",
            });

            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.6,
                ease: "power3.out",
            });
        });

        return () => ctx.revert(); // cleanup on unmount
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.paddingSection}>
                <aside className={styles.containerSmall}>
                    {/* Left Side */}
                    <div className={styles.heroSection} ref={textRef}>
                        <div style={{
                            backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
                            WebkitBackgroundClip: "text",
                        }} className={`animateLine subheadline  bg-clip-text text-transparent ${styles.subtitle}`}>
                            [ FROM IDEA TO IMPACT ]
                        </div>
                        <h1
                            style={{
                                backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                                WebkitBackgroundClip: 'text',
                            }}
                            className=" animateLine text-transparent bg-clip-text"
                        >
                            Web, Mobile & AI Solutions That Scale Beyond Launch
                        </h1>
                        <p className="animateLine description w">
                            Empower your vision, ignite your growth. Effortel provides the expertise,
                            technology, and unwavering support to transform your communication services
                            with ours.
                        </p>
                    </div>

                    {/* Right Side Image */}
                    <div className={styles.isImage}>
                        <div className={`${styles.imageWrapper} `} ref={imageRef}>
                            <img
                                src="/service1.webp"
                                alt="Effortel Services"
                            />
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
