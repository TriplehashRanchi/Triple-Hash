"use client"; // This page will also use client-side hooks and Framer Motion

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "../projects"; // Adjust path if your `data` folder is elsewhere, e.g., "../../data/projects"

export default function ProjectDetailPage({ params }) {
    const projectId = parseInt(params.id); // Get the ID from the URL parameters
    const project = projects.find((p) => p.id === projectId);

    // Handle case where project is not found
    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0D0816] px-4">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <p className="text-lg text-gray-400 mb-8">
                    The project you are looking for does not exist.
                </p>
                <Link
                    href="/portfolio"
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300"
                >
                    <FaChevronLeft /> Back to Portfolio
                </Link>
            </div>
        );
    }

    // Framer Motion variants for animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="min-h-screen pb-20 pt-40 bg-[#0D0816] text-white overflow-hidden">
            <div className="max-w-[1360px] mx-auto px-4 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="mb-12"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <Link
                            href="/portfolio" // Link back to your main portfolio page or home
                            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300 group"
                        >
                            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
                        </Link>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="headline mb-4"
                        style={{
                            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                            WebkitBackgroundClip: "text",
                            color: "transparent"
                        }}
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="subheadline text-gray-400 mb-8"
                    >
                        {project.category}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="
    relative 
    w-full 
    max-w-[1300px] 
    h-[200px] sm:h-[350px] md:h-[450px] lg:h-[600px] 
    overflow-hidden 
    mb-12
  "
                    >
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="rounded-2xl  "
                            priority
                        />
                    </motion.div>

                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                >
                    <div className="lg:col-span-2">
                        <motion.h2 variants={itemVariants} className="subheadline mb-4 text-white">
                            Project Overview
                        </motion.h2>
                        <motion.p variants={itemVariants} className="description text-[#C4BBD3] mb-8">
                            {project.description}
                        </motion.p>

                        {project.technologies && (
                            <>
                                <motion.h3 variants={itemVariants} className="subheadline mb-3 text-white">
                                    Technologies Used
                                </motion.h3>
                                <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
                                    {project.technologies.map((tech, index) => (
                                        <motion.span
                                            key={index}
                                            className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-gray-300 backdrop-blur-sm border border-white/20"
                                            variants={itemVariants}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </>
                        )}

                        {project.challenge && (
                            <>
                                <motion.h3 variants={itemVariants} className="subheadline mb-3 text-white">
                                    Challenges
                                </motion.h3>
                                <motion.p variants={itemVariants} className="description text-[#C4BBD3] mb-8">
                                    {project.challenge}
                                </motion.p>
                            </>
                        )}

                        {project.solution && (
                            <>
                                <motion.h3 variants={itemVariants} className="subheadline mb-3 text-white">
                                    Solution Implemented
                                </motion.h3>
                                <motion.p variants={itemVariants} className="description text-[#C4BBD3] mb-8">
                                    {project.solution}
                                </motion.p>
                            </>
                        )}

                        {project.link && (
                            <motion.div variants={itemVariants} className="mt-8">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                                >
                                    Visit Project <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                                </a>
                            </motion.div>
                        )}
                    </div>

                    <div className="lg:col-span-1 border-l border-white/10 pl-8 space-y-8">
                        <motion.div variants={itemVariants}>
                            <h3 className="subheadline mb-3 text-white">Client Details</h3>
                            <p className="text-xl font-semibold text-orange-400">{project.clientName}</p>
                            <p className="description text-gray-400">{project.profession}</p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h3 className="subheadline mb-6 text-white">Category</h3>
                            <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium backdrop-blur-sm border border-orange-500/30">
                                {project.category}
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}