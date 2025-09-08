"use client";

import { useState } from "react";
import {
    FiCalendar,
    FiMapPin,
    FiX
} from "react-icons/fi";
import ScrollReveal from "../../components/Gsap/ScrollReveal";



const jobs = [
    {
        id: 1,
        title: "Senior Software Engineer",
        department: "Engineering",
        location: "San Francisco, CA",
        type: "Full-time",
        posted: "2 days ago",
        description:
            "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
        requirements: ["5+ years experience", "React/Node.js", "Cloud platforms", "System design"],
        salary: "$150k - $200k",
        team: "Platform Team",
        manager: "Sarah Chen",
        image: "/careers/job1.webp",
    },
    {
        id: 2,
        title: "Product Designer",
        department: "Design",
        location: "New York, NY",
        type: "Full-time",
        posted: "today",
        description:
            "Design intuitive user experiences for our flagship products, working closely with engineering and product teams.",
        requirements: ["3+ years UX/UI design", "Figma proficiency", "Design systems", "User research"],
        salary: "$120k - $160k",
        team: "Design System Team",
        manager: "Alex Rodriguez",
        image: "/careers/job2.jpg",
    },
    {
        id: 3,
        title: "DevOps Engineer",
        department: "Engineering",
        location: "Austin, TX",
        type: "Full-time",
        posted: "3 days ago",
        description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
        requirements: ["AWS/GCP experience", "Kubernetes", "Terraform", "Monitoring tools"],
        salary: "$140k - $180k",
        team: "Infrastructure Team",
        manager: "Mike Johnson",
        image: "/careers/job3.jpeg",
    },
    {
        id: 4,
        title: "Marketing Manager",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        posted: "5 days ago",
        description:
            "Lead our marketing campaigns, manage social media, and drive brand awareness.",
        requirements: ["5+ years marketing", "SEO/SEM", "Content strategy", "Analytics"],
        salary: "$90k - $130k",
        team: "Growth Team",
        manager: "Emily Davis",
        image: "/careers/job4.jpg",
    },
    {
        id: 5,
        title: "Sales Executive",
        department: "Sales",
        location: "Chicago, IL",
        type: "Full-time",
        posted: "1 week ago",
        description:
            "Drive sales growth, manage client relationships, and close deals in the B2B space.",
        requirements: ["3+ years sales", "CRM proficiency", "Negotiation skills", "B2B experience"],
        salary: "$80k - $120k + commission",
        team: "Sales Team",
        manager: "David Wilson",
        image: "/careers/job5.jpeg",
    },
    {
        id: 6,
        title: "Product Manager",
        department: "Product",
        location: "Seattle, WA",
        type: "Full-time",
        posted: "2 days ago",
        description:
            "Define product vision, prioritize features, and work with cross-functional teams to deliver value.",
        requirements: ["5+ years product management", "Agile/Scrum", "Roadmapping", "Stakeholder management"],
        salary: "$130k - $170k",
        team: "Product Team",
        manager: "Laura Martinez",
        image: "/careers/job6.jpg",
    },


];

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState(null);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleJobSelect = (job) => {
        setSelectedJob(job);
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
        setTimeout(() => setSelectedJob(null), 300); // Wait for animation to complete
    };

    return (
        <div className="min-h-screen bg-[#0D0816] flex flex-col relative">
            <div className="max-w-[1360px] mx-auto w-full flex-1 flex flex-col rounded-xl overflow-hidden  pt-40 pb-20 px-4 lg:px-8">
                {/* Header */}
                <div className="relative w-full flex flex-col justify-center mb-20">
                    <ScrollReveal className='z-20'>
                        <h2
                            style={{
                                backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                                WebkitBackgroundClip: 'text',
                            }}
                            className="headline z-10 text-transparent bg-clip-text pt-20 text-center  "
                        >
                            We’ve saved a seat for you — bring your brilliance.
                        </h2>

                        <p className="mt-4 text-[#C4BBD3] z-10 text-center">
                            Because average just isn’t our thing — and neither is boring work.                            </p>
                    </ScrollReveal>
                    <div
                        className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[600px] sm:h-[800px] lg:h-[1000px] rounded-full blur-[120px] opacity-60 Fpointer-events-none z-0"
                        style={{
                            background: "radial-gradient(ellipse at center, #611610, #2E0D32 100%)",
                        }}
                    />
                </div>

                <div className="flex flex-1 overflow-hidden  ">
                    <div
                        className={`
                             w-full   flex flex-col transition-all duration-300`}
                    >
                        {/* Job Listings */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar z-50">
                            <div className=" mt-4 p-10 space-y-6">
                                {/* Today Section */}
                                <div>
                                    {jobs.map((job) => (
                                        <JobCard key={job.id} job={job} onSelect={handleJobSelect} />
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Drawer */}
                    <div
                        className={`fixed top-0 right-0 h-full w-[40%] bg-[#1A1625] border-l border-[#2A243A] transform transition-transform duration-300 ease-in-out z-50 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        {/* Drawer Header with Close Button */}
                        <div className="absolute top-2 right-0 z-50">
                            <button
                                onClick={closeDrawer}
                                className="p-2 text-[#9CA3AF] cursor-pointer"
                            >
                                <FiX className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Drawer Content */}
                        <div className="h-full overflow-y-auto custom-scrollbar">
                            {selectedJob && (
                                <div className="p-10">
                                    <div className="mb-6 rounded-lg overflow-hidden">
                                        <img
                                            src={selectedJob.image || "/placeholder.svg"}
                                            alt={selectedJob.title}
                                            className="w-full h-60 "
                                        />
                                    </div>

                                    <h2 style={{
                                        backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                                        WebkitBackgroundClip: "text",
                                    }} className="text-3xl font-bold mb-4  bg-clip-text text-transparent">{selectedJob.title}</h2>

                                    <div className="flex items-center gap-4 text-sm mb-6">
                                        <div className="flex items-center gap-2 text-[#C4BBD3]">
                                            <div className="w-8 h-8  bg-[#2A243A] rounded-full flex items-center justify-center description text-white font-semibold">
                                                <span className="text-sm  ">TC</span>
                                            </div>
                                            <span className="description">Hosted by {selectedJob.manager}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-[#C4BBD3]">
                                            <FiCalendar className="w-4 h-4" />
                                            <span className="description">Posted {selectedJob.posted}</span>
                                        </div>
                                        <span className="px-3 py-1 text-sm bg-[#2A243A] text-[#C4BBD3] rounded-full">
                                            {selectedJob.type}
                                        </span>
                                    </div>
                                    <hr className="my-6 border-[#FFFFFF63]" />
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-white subheadline mb-2">Job Description</h3>
                                            <p className="text-[#C4BBD3] leading-relaxed description">{selectedJob.description}</p>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-white subheadline mb-4">Requirements</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {selectedJob.requirements.map((req, index) => (
                                                    <div
                                                        key={index}
                                                        className="border border-[#FFFFFF63] p-3 rounded-lg flex items-center gap-2"
                                                    >
                                                        <div className="w-2 h-2 bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] rounded-full"></div>
                                                        <span className="text-[#C4BBD3] text-sm">{req}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 text-md">
                                            <div className="border border-[#FFFFFF63] p-4 rounded-lg">
                                                <span className="font-medium text-white block mb-1">Salary</span>
                                                <p className="text-[#C4BBD3]">{selectedJob.salary}</p>
                                            </div>
                                            <div className="border border-[#FFFFFF63] p-4 rounded-lg">
                                                <span className="font-medium text-white block mb-1">Team</span>
                                                <p className="text-[#C4BBD3]">{selectedJob.team}</p>
                                            </div>
                                        </div>

                                        <button className="w-full h-12 border  border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white py-3 px-4 rounded-lg font-[600]  ">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {isDrawerOpen && (
                        <div className="fixed inset-0 bg-[#0D0816] opacity-80 z-40" onClick={closeDrawer} />
                    )}
                </div>
            </div>
        </div>
    );
}

function JobCard({ job, onSelect }) {
    return (
        <div

            className="mb-6  cursor-pointer hover:bg-[#2A243A] transition-colors bg-[#1A1625] border border-[#2A243A] rounded-lg shadow-md overflow-hidden transform hover:scale-[1.01] duration-200"
            onClick={() => onSelect(job)}
        >
            <div className="p-6 py-10 flex items-center justify-between gap-4">
                <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                        <h3 style={{
                            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                            WebkitBackgroundClip: "text",
                        }} className="font-semibold  text-transparent bg-clip-text subheadline">{job.title}</h3>

                    </div>
                    <div className="flex items-center gap-2 description text-[#C4BBD3] ">
                        <div className="w-5 h-5 bg-[#2A243A] rounded-full flex items-center justify-center text-xs text-white font-semibold">
                            TC
                        </div>
                        <span>By {job.manager}</span>
                    </div>
                    <div className="flex items-center gap-2 description text-[#C4BBD3]">
                        <FiMapPin className="w-3 h-3" />
                        <span>{job.location}</span>
                    </div>
                    <span className="inline-block mt-3 px-3 py-1 description bg-[#2A243A] text-[#C4BBD3] rounded-full border border-[#3C354B]">
                        {job.department.toLowerCase()}
                    </span>
                </div>
                <img
                    src={job.image || "/placeholder.svg"}
                    alt={job.title}
                    className="w-50 h-30 rounded-md   flex-shrink-0 shadow-sm"
                />
            </div>
        </div>
    );
}