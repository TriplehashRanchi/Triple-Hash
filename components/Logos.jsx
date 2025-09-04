// components/SocialProofSection.jsx
'use client';

import React from 'react';
import Image from 'next/image';

// --- DATA ---
const logos = [
  { name: 'Deda.tech', src: '/company1.svg', width: 120, height: 25 },
  { name: 'Unbabel', src: '/company2.webp', width: 120, height: 25 },
  { name: 'Anfleet', src: '/company3.svg', width: 120, height: 25 },
  { name: 'Vodafone', src: '/company4.svg', width: 120, height: 25 },
];

const SocialProofSection = () => {
  return (
    <section className="bg-[#0D0816] py-10 sm:py-14">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        {/* stack with responsive gap (desktop unchanged) */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 lg:gap-16">
          {/* Title + Logos */}
          <div className="flex flex-col items-center gap-8">
            {/* smaller text on phones, desktop unchanged */}
            <p className="text-center text-lg sm:text-lg text-[#A3A3A3] font-raleway w-full sm:max-w-3xl ">
              Trusted by startups, founders, and educators worldwide powering products with AI, automation, and scalable workflows.
            </p>

            {/* responsive spacing; desktop unchanged */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-8">
              {logos.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="
                    w-auto
                    h-9 sm:h-10 md:h-12 lg:h-12
                    filter grayscale opacity-60
                    transition-all duration-300
                  "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
