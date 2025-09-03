// components/FeatureTabs.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

// --- Workflow Components ---
const Founders = () => (
  <div className="w-full h-auto">
    <Image
      src="/tab1.png" // Path to the image in your /public folder
      alt="IT Ops on-boarding workflow"
      width={1200}
      height={675}
      priority
      className="w-full h-auto rounded-2xl" // Image scales responsively
    />
  </div>
);
const ProductTeams = () => (
  <div className="w-full h-auto">
    <Image
      src="/tab2.png" // Path to the image in your /public folder
      alt="IT Ops on-boarding workflow"
      width={1200}
      height={675}
      priority
      className="w-full h-auto rounded-2xl" // Image scales responsively
    />
  </div>
);
const Sales = () => (
  <div className="w-full h-auto">
    <Image
      src="/tab3.png" // Path to the image in your /public folder
      alt="IT Ops on-boarding workflow"
      width={1200}
      height={675}
      priority
      className="w-full h-auto rounded-2xl" // Image scales responsively
    />
  </div>
);
const Educators = () => (
  <div className="w-full h-auto">
    <Image
      src="/tab4.png" // Path to the image in your /public folder
      alt="IT Ops on-boarding workflow"
      width={1200}
      height={675}
      priority
      className="w-full h-auto rounded-2xl" // Image scales responsively
    />
  </div>
);
const We = () => (
  <div className="w-full h-auto">
    <Image
      src="/tab5.png" // Path to the image in your /public folder
      alt="IT Ops on-boarding workflow"
      width={1200}
      height={675}
      priority
      className="w-full h-auto rounded-2xl" // Image scales responsively
    />
  </div>
);
// --- Main Data Array ---
const tabsData = [
  {
    id: 'founders',
    title: 'For Founders',
    description: 'Build MVPs that Think',
    icon: BsFillLightningChargeFill,
    iconColor: 'text-orange-400',
    content: <Founders />,
  },
  {
    id: 'product-teams',
    title: 'For Product Teams',
    description: 'Ship Features Smarter',
    icon: BsFillLightningChargeFill,
    iconColor: 'text-orange-400',
    content: <ProductTeams />,
  },
  {
    id: 'sales', // Renamed from dev-ops to sales, as per previous example description
    title: 'For Sales',
    description: 'Automate and Convert',
    icon: BsFillLightningChargeFill,
    iconColor: 'text-orange-400',
    content: <Sales />,
  },
  {
    id: 'educators', // Renamed from sales to educators
    title: 'For Educators',
    description: 'Smarter Teaching Tools',
    icon: BsFillLightningChargeFill,
    iconColor: 'text-orange-400',
    content: <Educators />,
  },
  {
    id: 'we', // Renamed from you to we
    title: 'We',
    description: 'Watch and Book a Call',
    icon: FaPlay,
    iconColor: 'text-blue-500',
    content: <We />,
  },
];


// --- Main Component ---
const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id); // State still needed for desktop view
  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <div className="w-full flex justify-center px-4 mt-12 bg-transparent relative z-40">
      <div className="w-full max-w-[1360px] px-4 lg:px-8 ">

        <div className="hidden lg:block bg-[linear-gradient(116.91deg,_#e3a5724f,_#5780e661)] bg-no-repeat p-2.5 rounded-2xl">
          <div className="bg-[#1A1429] rounded-[10px]">
            {/* Grid for tab buttons - this remains unchanged for desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 p-2.5 gap-2">
              {tabsData.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      rounded-lg p-4 bg-gradient-to-r from-[#251E32] to-[#17121F]
                      ${isActive
                        ? `
                          backdrop-blur-[22px] bg-[linear-gradient(0deg,#6b21ef26,#6b21ef26),radial-gradient(79.29%_94.78%_at_59.78%_129.81%,#7f5eb6_0%,#26214900_100%),linear-gradient(180deg,#3c3149_0%,#26214900_100%)] border border-[rgba(187,154,247,0.3)]
                          `
                        : `
                          bg-[radial-gradient(circle_closest-corner_at_55%_185%,rgba(0,0,0,0),rgba(38,33,73,0)),
                          linear-gradient(180deg,#251E32,#17121F)
                          ] hover:bg-[#55456733] hover:border-[#4f4070] border border-gray-50/10 shadow-[inset_0_0_#fff3,0_0_8px_#000]
                          `
                      }
                    `}
                  >
                    <div className="flex flex-col items-start justify-center px-4 cursor-pointer h-full min-h-[70px]">
                      <div>
                        <p className="text-white text-start">
                          <span className="font-[600]">⚡{" "}{tab.title}</span>
                        </p>
                        <div className="flex-grow flex items-start mt-2">
                          <div className="flex items-start">
                            <span className="text-gray-300 text-start text-sm">
                              {tab.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Content area to display the workflow diagram for desktop */}
            <div className="rounded-lg bg-dotted-pattern [background-size:1rem_1rem]">
              <div key={activeTab}>
                {activeTabData && activeTabData.content}
              </div>
            </div>
          </div>
        </div>


        <div className="block lg:hidden">
          {tabsData.map((tab) => (
            <div key={tab.id} className="mb-4"> {/* Margin-bottom for spacing between cards */}
              {/* This div applies the outer border styling for each mobile card */}
              <div className="bg-[linear-gradient(116.91deg,_#e3a5724f,_#5780e661)] bg-no-repeat p-1.5 rounded-2xl">
                {/* This div applies the inner background color for each mobile card */}
                <div className="bg-[#1A1429] rounded-[10px]">
                  {/* Title and Description for the mobile card */}
                  <div className="p-4 text-center"> {/* Centered text for mobile cards */}
                    <p className="text-white text-xl sm:text-2xl font-bold mb-2">
                      ⚡{" "}{tab.title}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {tab.description}
                    </p>
                  </div>
                  <div className="mt-4 ">
                    {tab.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeatureTabs;