"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import Link
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ScrollReveal from "../Gsap/ScrollReveal"; // Ensure this path is correct

// Import projects from the new data file
import { projects } from "../../app/portfolio/projects"; // Adjust path if your `data` folder is elsewhere, e.g., "../data/projects"


export default function PortfolioProjects() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollContainerRef = useRef(null)
    const currentProject = projects[currentIndex]

    const scrollToProject = (index) => {
        setCurrentIndex(index)
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            // Calculate project width based on container width and number of visible items
            // Assuming w-[calc(100%/1.5)] for small screens and w-[calc(100%/1.8)] for md+
            // A more robust solution might involve ref.current.children[0].offsetWidth
            const projectWidth = container.scrollWidth / projects.length; // Approximate width

            const scrollPosition = projectWidth * index

            container.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            })
        }
    }

    const nextProject = () => {
        const newIndex = (currentIndex + 1) % projects.length
        scrollToProject(newIndex)
    }

    const prevProject = () => {
        const newIndex = (currentIndex - 1 + projects.length) % projects.length
        scrollToProject(newIndex)
    }

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const projectWidth = container.scrollWidth / projects.length
            const scrollLeft = container.scrollLeft
            const newIndex = Math.round(scrollLeft / projectWidth)
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < projects.length) {
                setCurrentIndex(newIndex)
            }
        }
    }

    return (
        <section className="relative min-h-screen py-20 pb-30 overflow-hidden" style={{ backgroundColor: "#0D0816" }}>
            {/* Content container */}
            <div className="relative max-w-[1360px] mx-auto px-4 lg:px-8">
                <div className="py-20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                        <ScrollReveal>
                            <h1
                                style={{
                                    backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                                    WebkitBackgroundClip: "text",
                                }}
                                className="bg-clip-text text-transparent text-5xl sm:text-8xl font-black leading-none"
                            >
                                WORK
                            </h1>
                            <p
                                style={{
                                    backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
                                    WebkitBackgroundClip: "text",
                                }}
                                className="text-lg sm:text-2xl bg-clip-text text-transparent font-light tracking-[0.2em] mt-2"
                            >
                                PORTFOLIO MAGAZINE
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="text-left sm:text-right text-gray-400 mt-4 sm:mt-0">
                                <p className="text-sm">ISSUE #01</p>
                                <p className="text-sm">2024 EDITION</p>
                            </div>
                        </ScrollReveal>
                    </div>


                    <div className="h-px bg-gradient-to-r from-orange-500 via-white/20 to-transparent" />
                </div>

                <div className="space-y-12">
                    <div className="relative">
                        <div
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
                            style={{
                                scrollSnapType: "x mandatory",
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="flex-none w-[calc(100%)]  sm:w-[calc(100%)] md:w-[calc(100%/1.8)] group" // Added group for hover effects
                                    style={{ scrollSnapAlign: "center" }}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {/* Wrap the entire clickable area with Link */}
                                    <Link href={`/portfolio/${project.id}`}>
                                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-4 transition-all duration-300 hover:shadow-lg">
                                            <div className="relative aspect-[16/8] rounded-xl overflow-hidden">
                                                <Image
                                                    src={project.image || "/placeholder.svg"}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105" // Image zoom on hover
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                                {/* Overlay for "View Details" on hover */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="text-white text-lg font-semibold">View Details</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>

                            ))}
                        </div>


                    </div>

                    {/* Project info section */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`info-${currentProject.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="flex flex-col lg:flex-row items-center justify-between gap-8"
                        >
                            {/* Left side - Project info */}
                            <div className="flex-1 text-center lg:text-left">
                                <div className="mb-4">
                                    <span
                                        style={{
                                            backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
                                            WebkitBackgroundClip: "text",
                                        }}
                                        className="bg-clip-text text-transparent text-sm font-bold tracking-wider uppercase"
                                    >
                                        {currentProject.category}
                                    </span>
                                </div>
                                <h3 className=" heading text-white mb-2">{currentProject.clientName}</h3>
                                <p className="text-gray-400 subheadline mb-6">{currentProject.profession}</p>
                                <p className="text-[#C4BBD3] description max-w-2xl">{currentProject.description}</p>
                            </div>

                            {/* Right side - CTA and navigation */}
                            <div className="flex flex-col items-center gap-6">
                                {/* CTA Button - Changed to link to project detail */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] cursor-pointer text-white px-8 py-3 rounded-full font-semibold text-md transition-colors duration-300 flex items-center gap-2"
                                >
                                    <Link href={`/portfolio/${currentProject.id}`} className="flex items-center gap-2">
                                        VIEW PROJECT
                                        <FaChevronRight className="w-5 h-5" />
                                    </Link>
                                </motion.button>


                                {/* Navigation */}
                                <div className="flex items-center gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={prevProject}
                                        className="w-12 h-12 cursor-pointer bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:from-white/20 hover:to-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20"
                                    >
                                        <FaChevronLeft className="w-5 h-5" />
                                    </motion.button>

                                    <span className="text-white font-medium">
                                        {currentIndex + 1} / {projects.length}
                                    </span>

                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={nextProject}
                                        className="w-12 h-12 cursor-pointer bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:from-white/20 hover:to-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20"
                                    >
                                        <FaChevronRight className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    )
}