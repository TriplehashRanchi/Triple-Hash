// components/PlatformShowcase.js
'use client'
import styles from './PlatformShowcase.module.css';
import Image from 'next/image'; // Recommended for Next.js image optimization
import SpotlightCard from "../ReactBit/SpotlightCard";
import ScrollReveal from "../Gsap/ScrollReveal";

export default function PlatformShowcase() {
const features = [
  {
    icon: '/icon1.svg',
    title: 'Scalable Architecture',
    description:
      'We design products that grow with you. From early MVPs to platforms serving millions, our builds are engineered for performance and reliability — so you never need to start over.',
  },
  {
    icon: '/icon2.svg',
    title: 'Seamless Integrations',
    description:
      'Your tools should work together, not in silos. We connect with 500+ APIs and platforms to create smooth, automated workflows across your entire business stack.',
  },
  {
    icon: '/icon3.svg',
    title: 'AI at the Core',
    description:
      'Every product we build comes with AI built in. From automation to analytics and personalization, your platform learns, adapts, and delivers smarter results every day.',
  },
  {
    icon: '/icon4.svg',
    title: 'User-Centric Design',
    description:
      'Design isn’t just about looks — it’s about flow. We craft interfaces that feel natural from the first click, keeping users engaged and coming back.',
  },
  {
    icon: '/icon2.svg',
    title: 'Data-Driven Decisions',
    description:
      'We turn raw data into clarity. With dashboards and insights tailored to your goals, you’ll always know where to optimize and how to grow with confidence.',
  },
  {
    icon: '/icon4.svg',
    title: 'Enterprise-Grade Security',
    description:
      'Your business deserves trust at scale. We deliver bank-level protection, compliance support, and secure infrastructure that keeps your growth safe.',
  },
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
                    <p className={styles.tagline}>[ BUILT FOR IMPACT ]</p>
                    <h1 className={styles.heading} style={gradientText}>Features That Power Every TripleHash Build</h1>
                    <p className={`${styles.description} description`}>
                        Every product we ship comes with the essentials already built in — scalability, automation, integrations, and security. No extra fluff, just the features you actually need to grow.
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