'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import SpotlightCard from '../../components/ReactBit/SpotlightCard';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CallToAction from '../../components/CallToAction';
import { caseStudiesData } from './data'; // Adjust path as necessary
import TestimonialsSection from '../../components/TestimonialsSection'
import ScrollReveal from "../../components/Gsap/ScrollReveal";


const CaseStudy = () => {

    const ITEMS_PER_PAGE = 12;
    const [currentPage, setCurrentPage] = useState(1);

    // pagination math
    const totalPages = Math.ceil(caseStudiesData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = caseStudiesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <>
            <div className="bg-[#0D0816] pt-40 pb-30">
                <div className="flex flex-col items-center max-w-[1360px] mx-auto px-4 lg:px-8">
                    {/* Heading */}
                    <div className="relative w-full flex flex-col justify-center mb-12">
                        <ScrollReveal className='z-20'>
                            <h2
                                style={{
                                    backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                                    WebkitBackgroundClip: 'text',
                                }}
                                className="headline z-10 text-transparent bg-clip-text pt-20 text-center"
                            >
                                Case Studies
                            </h2>

                            <p className="mt-6 text-[#C4BBD3] z-10 text-center">
                                Discover how TripleHash is being used to create robust and scalable automation
                            </p>
                        </ScrollReveal>
                        <div
                            className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[600px] sm:h-[800px] lg:h-[1000px] rounded-full blur-[120px] opacity-60 Fpointer-events-none z-0"
                            style={{
                                background: "radial-gradient(ellipse at center, #611610, #2E0D32 100%)",
                            }}
                        />

                    </div>
                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-16 z-10">
                        {currentItems.map((study, i) => (
                            <SpotlightCard
                                key={i}
                                className="custom-spotlight-card w-full"
                                spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)"
                            >
                                <div
                                    className="p-6 sm:p-6 rounded-[1.5rem] text-white flex flex-col items-start h-full"
                                    style={{
                                        border: '1px solid hsla(0, 0%, 100%, .16)',
                                        boxShadow: 'inset 0 1px #ff8e5d66',
                                        backgroundImage: `radial-gradient(circle at 30% 140%, rgba(75, 153, 217, .33), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0a16195e), radial-gradient(circle at 50% -30%, #a85c5c33, #ff131300), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                                    }}
                                >
                                    {/* Logo */}
                                    <div className="mb-4">
                                        <Image
                                            src={study.companyLogo}
                                            alt={`${study.companyName} Logo`}
                                            width={160}
                                            height={50}
                                            className="filter grayscale opacity-60"
                                        />
                                    </div>

                                    {/* Headline */}
                                    <h3
                                        className="text-xl md:text-2xl font-normal leading-medium   text-[#C4BBD3]"
                                        dangerouslySetInnerHTML={{ __html: study.headline }}
                                    />

                                    {/* Separator */}
                                    <div className="w-full h-px bg-white/10 my-8"></div>

                                    {/* Quote */}
                                    <p className="text-[#E4E4E4]/70 text-lg leading-normal flex-grow ">
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
                                        <button className="cursor-pointer bg-gradient-to-r from-[#077AC7] to-[#6B21EF] text-white buttonfont px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                                            Read Case Study
                                        </button>
                                    </Link>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-20 gap-2">
                            {/* Prev Button */}
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                                className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border border-[#FFFFFF63] transition-all duration-300 transform
        ${currentPage === 1
                                        ? "text-gray-500 cursor-not-allowed"
                                        : "text-white border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] hover:scale-110   "
                                    }`}
                            >
                                <FaChevronLeft className="w-4 h-4" />
                            </button>

                            {/* Page Numbers */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter((page) => {
                                    if (totalPages <= 7) return true;
                                    if (page === 1 || page === totalPages) return true;
                                    if (page >= currentPage - 2 && page <= currentPage + 2) return true;
                                    return false;
                                })
                                .map((page, idx, arr) => (
                                    <React.Fragment key={page}>
                                        {/* Ellipsis */}
                                        {idx > 0 && arr[idx] - arr[idx - 1] > 1 && (
                                            <span className="px-2 text-gray-400">…</span>
                                        )}

                                        <button
                                            onClick={() => setCurrentPage(page)}
                                            className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 transform
              ${currentPage === page
                                                    ? "border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white scale-110  "
                                                    : "bg-transparent text-gray-300 border-[#FFFFFF63] hover:text-white hover:scale-110 hover:border-[#FF8C00]"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    </React.Fragment>
                                ))}

                            {/* Next Button */}
                            <button
                                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border border-[#FFFFFF63] transition-all duration-300 transform
        ${currentPage === totalPages
                                        ? "text-gray-500 cursor-not-allowed"
                                        : "text-white border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] hover:scale-110 "
                                    }`}
                            >
                                <FaChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    )}

                </div>
            </div>
            <CallToAction />
            <TestimonialsSection />
        </>
    );
};

export default CaseStudy;