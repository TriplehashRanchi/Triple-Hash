"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / winHeight) * 100;

      setScrollProgress(scrolled);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 28; // ⬅ bigger than button radius
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Progress Circle OUTSIDE */}
          <svg
            className="absolute top-0 left-0 w-full h-full -rotate-90"
            viewBox="0 0 60 60"
          >
            {/* Track */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              
              strokeWidth="3"
              fill="none"
            />
            {/* Progress */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              stroke="#ffffff30"
              strokeWidth="3"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 0.2s linear" }}
            />
          </svg>

          {/* Button inside */}
          <button
            onClick={scrollToTop}
            className="relative w-12 h-12 flex items-center justify-center rounded-full text-white cursor-pointer 
              bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] shadow-lg "
          >
            <FaArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
