'use client';

import styles from './StackingCards.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function StackingCards() {
const cardsData = [
  {
    id: 1,
    img: "/card1.svg",
    heading: "Web & Mobile Apps",
    description: "From MVPs to full-scale platforms — fast, scalable, and designed for growth.",
    reverse: false,
  },
  {
    id: 2,
    img: "/card6.svg",
    heading: "AI-Powered Tools",
    description: "Chatbots, recommendations, analytics & automations — AI baked into your product.",
    reverse: true,
  },
  {
    id: 3,
    img: "/card3.svg",
    heading: "Custom CRM & SaaS",
    description: "Streamline sales, leads, and operations with CRMs and SaaS products tailored to your workflows.",
    reverse: false,
  },
  {
    id: 4,
    img: "/card5.svg",
    heading: "E-Learning & LMS",
    description: "Smart, interactive learning platforms with AI-driven assessments and personalized dashboards.",
    reverse: true,
  },
  {
    id: 5,
    img: "/card3.svg",
    heading: "Automation & Integrations",
    description: "Connect with 500+ tools and APIs to eliminate busywork and scale workflows seamlessly.",
    reverse: false,
  },
  {
    id: 6,
    img: "/card4.svg",
    heading: "Internal Management Systems",
    description: "Dashboards, reporting, and automation to manage operations and scale efficiently.",
    reverse: true,
  },
];


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cards}>
          {cardsData.map((card, index) => {
            const isEven = index % 2 === 0;

            // controls & intersection observer
            const controls = useAnimation();
            const [ref, inView] = useInView({
              threshold: 0.3, // trigger when 30% visible
              triggerOnce: false, // 👈 allow re-trigger up & down
            });

            useEffect(() => {
              if (inView) {
                controls.start({
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.15,
                  },
                });
              } else {
                controls.start({
                  x: isEven ? 150 : -150,
                  opacity: 0,
                });
              }
            }, [inView, controls, isEven, index]);

            return (
              <motion.div
                key={card.id}
                ref={ref}
                className={styles.card}
                style={{
                  border: '1px solid hsla(0, 0%, 100%, .16)',
                  boxShadow: 'inset 0 1px #ff8e5d66',
                }}
                initial={{ x: isEven ? 150 : -150, opacity: 0 }}
                animate={controls}
              >
                <div
                  className={styles.cardContent}
                  style={{ flexDirection: card.reverse ? "row-reverse" : "row" }}
                >
                  <div
                    className={styles.cardLeft}
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 140%, rgba(75,153,217,.33), transparent 37%), 
                                        radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), 
                                        linear-gradient(transparent, #0a16195e), 
                                        radial-gradient(circle at 50% -30%, #a85c5c33, #ff131300), 
                                        radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                    }}
                  >
                    <img src={card.img} alt="Left visual" className={styles.cardImage} />
                  </div>
                  <div className={styles.cardRight}>
                    <h3
                      style={{
                        backgroundImage: 'linear-gradient(to right, #ff9b26, #ee4f27)',
                        WebkitBackgroundClip: 'text',
                      }}
                      className={`bg-clip-text text-transparent subheadline ${styles.cardHeading}`}
                    >
                      {card.heading}
                    </h3>
                    <p className={`description ${styles.cardDescription}`}>{card.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
