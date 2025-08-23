'use client'
import { useState } from "react";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left, // cursor X relative to card
      y: e.clientY - rect.top,  // cursor Y relative to card
    });
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          <div
            className={styles.mainCard}
            style={{
              backgroundImage:
                "radial-gradient(circle closest-corner at 50% 110%, #0f0a19, #26214900), linear-gradient(#67454599, #26214900 60%)",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className={styles.mainCardContent}>
              <h2 className={styles.heading}>Your vision, our technology.</h2>
              <p className={styles.description}>
                Partner with us to design and deploy solutions that unlock your
                full potential.
              </p>
            </div>

            <button
              onClick={() => alert("Booking a meeting...")}
              className={styles.bookMeetingButton}
            >
              <span className={styles.bookMeetingText}>Book a Meeting</span>
              <span className={styles.arrowIcon}>→</span>
            </button>

            {hovering && (
              <span
                className={styles.hoverText}
                style={{ top: pos.y + 20, left: pos.x + 100 }}
              >
                DON'T BE SHY
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
