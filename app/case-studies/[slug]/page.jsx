// app/case-studies/[slug]/page.jsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SpotlightCard2 from "../../../components/ReactBit/SpotlightCard2";
import { caseStudiesData } from "../data";

const BackButton = ({ href = "/case-studies", children = "Back to Case Studies" }) => (
  <Link href={href} passHref>
    <span className="inline-flex items-center description text-[#C4BBD3] mb-8 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      {children}
    </span>
  </Link>
);

// --- CTA Section ---
const CtaSection = () => (
  <div className="p-8 rounded-2xl border border-[#FFFFFF1A] mt-12">
    <h3 className="text-[#C4BBD3] text-xl font-semibold mb-4">
      Considering n8n Enterprise for your team?
    </h3>
    <button className="bg-[#FF8C00] buttonfont cursor-pointer border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white px-5 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
      Contact Sales
    </button>
  </div>
);

// --- Case Study Detail Page Component ---
const CaseStudyDetailPage = ({ params }) => {
  const { slug } = params;
  const cs = caseStudiesData.find((c) => c.slug === slug); // 👈 dynamic lookup

  if (!cs) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Case Study not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0816] text-white py-16">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 mb-16 mt-32 flex flex-col items-center gap-30">

        {/* Headline */}
        <div className="relative w-full flex justify-center mb-12">
          <h1
            style={{
              backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
              WebkitBackgroundClip: "text",
            }}
            className="max-w-[100%] sm:max-w-[75%] text-center text-transparent bg-clip-text headline relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: cs.headline }}
          />

          <div
            className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[600px] sm:h-[800px] lg:h-[1000px] rounded-full blur-[120px] opacity-60 pointer-events-none z-0 "
            style={{
              background: "radial-gradient(ellipse at center, #611610, #2E0D32 100%)",
            }}
          />
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row justify-center gap-12 w-full z-10 ">
          {/* LEFT COLUMN */}
          <aside className="w-full lg:w-[30%]">
            <BackButton />

            <div className="mb-8 flex lg:block ">
              <Image
                src={cs.companyLogo}
                alt={`${cs.companyName} Logo`}
                width={150}
                height={45}
                className="object-contain"
              />
            </div>

            <div className="space-y-6 text-gray-300">
              <div>
                <p className="uppercase description text-[#C4BBD3] tracking-wider mb-1">
                  Version of n8n used
                </p>
                <p className="description text-[#C4BBD3]">{cs.meta.version}</p>
              </div>
              <div>
                <p className="uppercase description text-[#C4BBD3] tracking-wider mb-1">
                  Time to deployment
                </p>
                <p className="description text-[#C4BBD3]">{cs.meta.deployment}</p>
              </div>
              <div>
                <p className="uppercase description text-[#C4BBD3] tracking-wider mb-1">
                  Hours saved
                </p>
                <p className="description text-[#C4BBD3]">{cs.meta.hoursSaved}</p>
              </div>
            </div>

            <CtaSection />
          </aside>

          {/* RIGHT COLUMN */}
          <main className="w-full lg:w-[70%] space-y-12">
            <section>
              <h2 className="subheadline mb-4">Challenge</h2>
              <div
                className="description text-[#C4BBD3] space-y-4"
                dangerouslySetInnerHTML={{ __html: cs.challenge }}
              />
            </section>

            <section>
              <h2 className="subheadline mb-4">Solution</h2>
              <div
                className="description text-[#C4BBD3] space-y-4"
                dangerouslySetInnerHTML={{ __html: cs.solution }}
              />
            </section>

            <section>
              <h2 className="subheadline mb-4">Results</h2>
              <div
                className="description text-[#C4BBD3] space-y-4"
                dangerouslySetInnerHTML={{ __html: cs.results }}
              />
            </section>

            <SpotlightCard2 spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 105, 97, 0.9), transparent 70%)">
              <div
                className="bg-[#1A1327] p-8 rounded-2xl border border-[#FFFFFF1A]"
                style={{
                  border: "1px solid hsla(0, 0%, 100%, .16)",
                  boxShadow: "inset 0 1px #ff8e5d66",
                  backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                }}
              >
                <p className="description text-[#C4BBD3]">“{cs.quote}”</p>
                <div className="mt-6">
                  <p className="text-white text-md font-[500]">{cs.authorName}</p>
                  <p className="text-[#C4BBD3] description">{cs.authorTitle}</p>
                </div>
              </div>
            </SpotlightCard2>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;
