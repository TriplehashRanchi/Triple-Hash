import React from 'react';
import Image from 'next/image';
import SpotlightCard from './ReactBit/SpotlightCard';
import Link from 'next/link';
// 👈 adjust path
import { caseStudiesData } from '../app/case-studies/data'; // Adjust path as necessary


const CaseStudy = () => {
  return (
    <div className="bg-[#0D0816] pt-20 pb-10">
      <div className="flex flex-col items-center max-w-[1360px] mx-auto px-4 lg:px-8">

        {/* Badge */}
        <div className="flex items-center justify-center gap-1 rounded-3xl text-[0.85rem] border border-[#FFFFFF1A] text-white pt-[3px] pl-[1px] pr-3 mb-4
          backdrop-filter backdrop-blur-md
          bg-[radial-gradient(circle_closest-corner_at_50%_160%,#8b5261,transparent_67%),linear-gradient(hsla(0,0%,100%,0.18),transparent)]
          shadow-[inset_0_0_#c4bbd3,0_4px_4px_#0e091870,0_13px_16px_-8px_#000,inset_0_4px_12px_#ffffff0d]">
          <img src="/case.png" alt="" className="object-contain w-8 h-8" />
          See The Results
        </div>

        {/* Heading */}
        <h2
          style={{
            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
            WebkitBackgroundClip: 'text',
          }}
          className="headline z-2 text-transparent bg-clip-text"
        >
          Case Studies
        </h2>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center w-full mt-16 flex-wrap">
          {caseStudiesData.slice(0, 2).map((study, i) => (
            <SpotlightCard
              key={i}
              className="custom-spotlight-card w-full max-w-[560px]"
              spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)"
            >
              <div
                className="p-6 sm:p-14 rounded-[1.5rem] text-white flex flex-col items-start h-full"
                style={{
                  border: '1px solid hsla(0, 0%, 100%, .16)',
                  boxShadow: 'inset 0 1px #ff8e5d66',
                  backgroundImage: `radial-gradient(circle at 30% 140%, rgba(75, 153, 217, .33), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0a16195e), radial-gradient(circle at 50% -30%, #a85c5c33, #ff131300), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                }}
              >
                {/* Logo */}
                <div className="mb-8">
                  <Image
                    src={study.companyLogo}
                    alt={`${study.companyName} Logo`}
                    width={100}
                    height={30}
                  />
                </div>

                {/* Headline */}
                <h3
                  className="text-xl md:text-2xl font-normal leading-normal font-raleway text-[#C4BBD3]"
                  dangerouslySetInnerHTML={{ __html: study.headline }}
                />

                {/* Separator */}
                <div className="w-full h-px bg-white/10 my-10"></div>

                {/* Quote */}
                <p className="text-[#E4E4E4]/70 text-lg leading-normal flex-grow font-raleway">
                  "{study.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center my-10">
                  <Image
                    src={study.authorProfile}
                    alt={study.authorName}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="text-lg font-raleway">{study.authorName}</p>
                    <p className="text-gray-400 text-sm font-raleway">
                      {study.authorTitle}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link href={`/case-studies/${study.slug}`} passHref>
                  <button className="cursor-pointer bg-gradient-to-r from-[#077AC7] to-[#6B21EF] text-white buttonfont px-6 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                    Read Case Study
                  </button>
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
        <div className="mt-16">
          <Link href="/case-studies" passHref>
            <button className="cursor-pointer buttonfont w-full sm:w-auto border border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white   px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
              View All Case Studies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;