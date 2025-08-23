"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollLines = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lines = containerRef.current.querySelectorAll(".line");

    gsap.from(lines, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // start when top of container hits 80% viewport
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50, // comes up from bottom
      stagger: 0.4, // delay between lines
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  // 🔥 gradient text style reused for all lines
  const gradientText = {
    backgroundImage:
      "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <div style={{ backgroundColor: "#0D0816", textAlign: "center" }}>
      <div
        ref={containerRef}
        style={{
          fontSize: "4.2rem",
          fontWeight: "800",
          lineHeight: "1.3",
          padding: "3rem 0 0",
        }}
      >
        <h2
          className="line"
          style={{
            fontFamily: "monospace",
            fontSize: "0.85rem",
            fontWeight: "600",
            letterSpacing: "0.15em",
            color: "#c4bbd3", // keep solid grey for tagline
            textTransform: "uppercase",
            marginBottom: "3.5rem",
          }}
        >
          [ End-to-End MVNO Enablement ]
        </h2>

        {/* gradient text applied per <p> */}
        <p className="line leading-[1.1]" style={gradientText}>
          Global Reach,
        </p>
        <p className="line leading-[1.1]" style={gradientText}>
          Seamless Integrations,
        </p>
        <p className="line leading-[1.1]" style={gradientText}>
          Data-Driven Success, and
        </p>
        <p className="line leading-[1.1]" style={gradientText}>
          Regulatory Confidence.
        </p>
      </div>
    </div>
  );
};

export default ScrollLines;
