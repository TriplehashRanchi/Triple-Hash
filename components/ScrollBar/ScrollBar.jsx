'use client';

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[4px] w-full   bg-[linear-gradient(180deg,#ffffff1a,#0003_58%),linear-gradient(140deg,#fff,#7c65a1)] z-[9999]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%", // grows left → right
      }}
    />
  );
}
