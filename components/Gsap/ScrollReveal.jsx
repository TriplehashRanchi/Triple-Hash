"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  stagger = 0.3,
  y = 40,
  duration = 0.8,
  ease = "power3.out",
  className = "",
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // ✅ gsap.context for scoping & cleanup
    let ctx = gsap.context(() => {
      const elements = containerRef.current.querySelectorAll(".reveal-item");

      gsap.from(elements, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y,
        stagger,
        duration,
        ease,
      });
    }, containerRef);

    return () => ctx.revert(); // ✅ cleanup on unmount
  }, [stagger, y, duration, ease]);

  return (
    <div ref={containerRef} className={className}>
      {/* ✅ All children get `.reveal-item` */}
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div key={i} className="reveal-item">
              {child}
            </div>
          ))
        : <div className="reveal-item">{children}</div>}
    </div>
  );
}
