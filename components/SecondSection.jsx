// components/FeatureTabs.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // <-- Import the next/image component
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

// --- Workflow Components ---
// We define the content for each tab as a separate component.

// This is the detailed workflow for the "IT Ops" tab, using the image you provided.
const ItOpsWorkflow = () => (
  <div className="w-full h-auto">
    <Image
      src="/agent.webp" // Path to the image in your /public folder
      alt="IT Ops on-boarding workflow"
      width={1200}
      height={675}
      priority // Load this image first since it's the default view
      className="w-full h-auto"
    />
  </div>
);



// --- Main Data Array ---
// The `content` property now points to our new workflow components.
const tabsData = [
  {
    id: 'it-ops',
    title: 'For Founders',
    description: 'Build MVPs that Think',
    icon: BsFillLightningChargeFill,
    iconColor: 'text-orange-400',
    content: <ItOpsWorkflow />,
  },
  {
    id: 'sec-ops',
    title: 'For Product Teams',
    description: 'Ship Features Smarter',
    icon: BsFillLightningChargeFill,
    iconColor: 'text-orange-400',
    content: <ItOpsWorkflow />,
  },
  {
    id: 'dev-ops',
    title: 'For Sales',
    description: 'Automate and Convert',
    icon: BsFillLightningChargeFill,
    iconColor: 'text-orange-400',
    content: <ItOpsWorkflow />,
  },
  {
    id: 'sales',
    title: 'For Educators',
    description: 'Smarter Teaching Tools',
    icon: BsFillLightningChargeFill,
    iconColor: 'text-orange-400',
    content: <ItOpsWorkflow />,
  },
  {
    id: 'you',
    title: 'We',
    description: 'Watch and Book a Call',
    icon: FaPlay,
    iconColor: 'text-blue-500',
    content: <ItOpsWorkflow />,
  },
];


// --- Main Component ---
const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    // The wrapper now overlaps the hero section, as you requested.
    <div className="w-full flex justify-center px-4 mt-12  bg-transparent relative z-60">
      <div className="w-full max-w-[1360px] ">
        {/* The main card with layered border effect */}
        <div className="bg-[linear-gradient(116.91deg,_#e3a5724f,_#5780e661)] bg-no-repeat p-2.5 rounded-2xl">
          <div className="bg-[#1A1429] rounded-[10px]">
            {/* Grid for the tab buttons - no changes here */}
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
                        : ` bg-[radial-gradient(circle_closest-corner_at_55%_185%,rgba(0,0,0,0),rgba(38,33,73,0)),
                    linear-gradient(180deg,#251E32,#17121F)
                ]  hover:bg-[#55456733] hover:border-[#4f4070] border border-gray-50/10  shadow-[inset_0_0_#fff3,0_0_8px_#000] `
                      }
  `}
                  >
                    <div className="flex flex-col items-start justify-center px-4 cursor-pointer h-full min-h-[70px]">
                      <div>
                        <p className="text-white text-start">

                          <span className="font-bold">⚡{" "}{tab.title}</span>
                          {/* <span className="text-gray-400"> can</span> */}
                        </p>
                        <div className="flex-grow flex items-start mt-2">
                          <div className="flex items-start">

                            {" "}
                            <span className="text-gray-300 text-start text-sm  ">
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

            {/* UPDATED Content area to display the workflow diagram */}
            <div className="  rounded-lg bg-dotted-pattern [background-size:1rem_1rem]">
              {/* 
                  We render the component directly from our data array.
                  The key is added to help React efficiently swap between components.
                */}
              <div key={activeTab}>
                {activeTabData && activeTabData.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTabs;