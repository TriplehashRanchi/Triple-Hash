"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollLines = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const lines = containerRef.current.querySelectorAll(".line");

      gsap.from(lines, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        stagger: 0.4,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const gradientText = {
    backgroundImage:
      "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="bg-[#0D0816] text-center">
      <div
        ref={containerRef}
        className="
          font-[700] 
          leading-[1.1]
          pt-12
          text-[2.2rem] sm:text-[3rem] md:text-[4rem]   /* ✅ responsive font sizes */
          px-4
        "
      >
        <h2
          className="
            line 
            font-mono 
            text-[0.75rem] sm:text-[0.85rem] 
            font-semibold 
            tracking-[0.15em] 
            uppercase 
            text-[#c4bbd3] 
            mb-6 sm:mb-10
          "
        >
          [ End-to-End MVNO Enablement ]
        </h2>

        {/* gradient lines */}
        <p className="line" style={gradientText}>
          Global Reach,
        </p>
        <p className="line" style={gradientText}>
          Seamless Integrations,
        </p>
        <p className="line" style={gradientText}>
          Data-Driven Success, and
        </p>
        <p className="line" style={gradientText}>
          Regulatory Confidence.
        </p>
      </div>
    </div>
  );
};

export default ScrollLines;
