// components/PlatformShowcase.js
'use client'
import styles from './PlatformShowcase.module.css';
import Image from 'next/image'; // Recommended for Next.js image optimization
import SpotlightCard from "../ReactBit/SpotlightCard";
import ScrollReveal from "../Gsap/ScrollReveal";

export default function PlatformShowcase() {
    const features = [
        {
            icon: '/icon1.svg', // Placeholder, replace with actual SVG paths
            title: 'Online Charging and Billing',
            description: 'Efficiently manage billing and charging processes.',
        },
        {
            icon: '/icon2.svg', // Placeholder
            title: 'Point of Sales',
            description: 'Simplify customer acquisition and service activation.',
        },
        {
            icon: '/icon4.svg', // Placeholder
            title: 'Resource and Order Management',
            description: 'Optimize resource allocation and order fulfillment.',
        },
        {
            icon: '/icon4.svg', // Placeholder
            title: 'Customer Relationship Management',
            description: 'Build strong customer relationships and deliver personalized experiences.',
        },
        {
            icon: '/icon1.svg', // Placeholder
            title: 'End-User Interactions',
            description: 'Enable seamless communication and support for your subscribers.',
        },
        {
            icon: '/icon2.svg', // Placeholder
            title: 'Product Catalogue',
            description: 'Create and manage a diverse range of attractive product offerings.',
        },
        // Add more features if needed based on the full image
    ];
    const gradientText = {
        backgroundImage:
            "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
    };

    return (
        <div className={styles.platformSection}>
            <div className={styles.container}>
                <ScrollReveal>
                    <p className={styles.tagline}>[ STREAMLINED MVNO OPERATIONS ]</p>
                    <h1 className={styles.heading} style={gradientText}>Award-Winning OSS/BSS Platform</h1>
                    <p className={`${styles.description} description`}>
                        Streamline your MVNO operations with our comprehensive, cloud-based EMS platform. Access all the essential components for success, including:
                    </p>
                </ScrollReveal>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <SpotlightCard spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)"
                        >
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.iconWrapper}>
                                    {/* Using Next.js Image component for optimization */}
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title + " icon"}
                                        width={38} // Adjust based on your icon's intrinsic size
                                        height={38} // Adjust based on your icon's intrinsic size
                                        className={styles.featureIcon}
                                    />
                                </div>
                                <div className={styles.featureContent}>
                                    <h3 className={`subheadline ${styles.featureTitle}`}>{feature.title}</h3>
                                    <p className={`description ${styles.featureDescription}`}>{feature.description}</p>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </div>
    );
}