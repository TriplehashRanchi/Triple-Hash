// components/SocialProofSection.jsx
'use client';

import React from 'react';
import Image from 'next/image';

// --- DATA ---

// Logo data from your original component
const logos = [
  { name: 'Deda.tech', src: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/re_vodafone_6deed71a6c.svg', width: 150, height: 32 },
  { name: 'Unbabel', src: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/re_mistral_ai_cf1ceddcce.svg', width: 150, height: 32 },
  { name: 'Anfleet', src: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/onfleet_04f3069030_deae93e739.svg', width: 150, height: 32 },
  { name: 'Vodafone', src: 'https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/unbabel_1392f8b8ac_cca31eda86.svg', width: 150, height: 32 },
];


// --- COMPONENT ---

const SocialProofSection = () => {
  return (
    // Main section with the dark background
    <section className="bg-[#0D0816] py-20 sm:py-14">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        
        {/* Main container to stack logos and stats vertically with a large gap */}
        <div className="flex flex-col items-center gap-16">

          {/* Top Part: Title and Logos */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-lg text-[#A3A3A3] font-raleway max-w-3xl">
              The world's most popular workflow automation platform for technical teams including
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-8">
              {logos.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="h-6 sm:h-16 w-auto filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
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