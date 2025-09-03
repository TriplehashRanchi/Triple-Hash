'use client'
import React, { useState, useLayoutEffect, useRef } from 'react';
import styles from './LayoutSection.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionLayout = () => {
    const [activeSection, setActiveSection] = useState('european-cloud');
    const textRef = useRef(null);

    const handleSectionClick = (sectionName) => {
        setActiveSection(sectionName);
    };

    useLayoutEffect(() => {
        // ✅ gsap.context ensures scoped animations & cleanup
        let ctx = gsap.context(() => {
            const lines = textRef.current.querySelectorAll('.animateLine');

            gsap.from(lines, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",   // start when top of container hits 80% of viewport
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 50,
                stagger: 0.3,   // delay between each element
                duration: 0.8,
                ease: "power3.out",
            });
        }, textRef);

        return () => ctx.revert(); // cleanup GSAP on unmount
    }, []);

    return (
        <div className={styles.layoutSection}>
            <div ref={textRef}>
                <h2 className={`animateLine bg-clip-text text-transparent ${styles.title}`}>
                    [ CHOOSE HOW YOU SCALE ]
                </h2>
                <h1
                    style={{
                        backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                        WebkitBackgroundClip: 'text',
                    }}
                    className={`animateLine text-transparent bg-clip-text ${styles.subTitle}`}
                >
                    Flexibility Built In, Because One Size Doesn’t Fit All
                </h1>
                <p className={`animateLine description ${styles.sectionDescription}`}>
                    Every founder and business operates differently — that’s why TripleHash adapts our approach to fit your goals, budget, and speed. Whether you need to validate an MVP quickly or roll out an enterprise-grade platform, we’ll meet you where you are.
                </p>
            </div>

            <div className={styles.container}>
                {/* European Cloud Section */}
                <div
                    className={`${styles.section} ${activeSection === 'european-cloud' ? styles.activeSection : styles.inactiveSection}`}
                    onClick={() => handleSectionClick('european-cloud')}
                >
                    <h2 className={activeSection === 'european-cloud' ? styles.sectionTitleActive : styles.sectionTitle}>
                        Rapid MVP Launch
                    </h2>
                    {activeSection === 'european-cloud' ? (
                        <div className={styles.activeSectionContent}>
                            <p className={styles.description}>
                                Test your idea fast with a lean, scalable prototype that can evolve into a full product.
                            </p>
                            <div className={styles.europeanCloudMapViz}>
                                <img src="/layout2.webp" className='opacity-50 ' alt="" />
                            </div>


                        </div>
                    ) : (
                        <div className={styles.plusIcon}>+</div>
                    )}
                </div>

                {/* On-Premise Section */}
                <div
                    className={`${styles.section} ${styles.onPremiseSection} ${activeSection === 'on-premise' ? styles.activeSection : styles.inactiveSection}`}
                    onClick={() => handleSectionClick('on-premise')}
                >
                    <h2 className={activeSection === 'on-premise' ? styles.sectionTitleActive : styles.sectionTitle}>
                        Custom Product Development
                    </h2>
                    {activeSection === 'on-premise' ? (
                        <div className={styles.activeSectionContent}>
                            <p className={styles.description}>
                                Tailored web, mobile, and AI-powered systems built to match your unique workflows.
                            </p>
                            <div className={styles.europeanCloudMapViz}>
                                <img src="/layout2.webp" className='opacity-50' alt="" />
                            </div>
                        </div>
                    ) : (
                        <div className={styles.plusIcon}>+</div>
                    )}
                </div>

                {/* Hybrid Section */}
                <div
                    className={`${styles.section} ${activeSection === 'hybrid' ? styles.activeSection : styles.inactiveSection}`}
                    onClick={() => handleSectionClick('hybrid')}
                >
                    <h2 className={activeSection === 'hybrid' ? styles.sectionTitleActive : styles.sectionTitle}>
                        Enterprise-Ready Platforms
                    </h2>
                    {activeSection === 'hybrid' ? (
                        <div className={styles.activeSectionContent}>
                            <p className={styles.description}>
                                Secure, compliant, and scalable solutions for teams that can’t afford downtime.
                            </p>
                            <div className={styles.europeanCloudMapViz}>
                                <img src="/layout2.webp" className='opacity-50' alt="" />
                            </div>
                        </div>
                    ) : (
                        <div className={styles.plusIcon}>+</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionLayout;
