"use client";

import { useState } from "react";
import { FiCalendar, FiMapPin, FiX } from "react-icons/fi";
import ScrollReveal from "../../components/Gsap/ScrollReveal";

const jobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    posted: "Today",
    description:
      "We are looking for a passionate Full Stack Developer to join our engineering team in Ranchi. You will be responsible for building and maintaining scalable web applications, working across both frontend and backend. You’ll collaborate with product managers, designers, and engineers to deliver impactful solutions.",
    requirements: [
      "3+ years of experience as a Full Stack Developer",
      "Proficiency in JavaScript/TypeScript",
      "Strong experience with React.js and Node.js/Express.js",
      "Hands-on experience with relational or NoSQL databases (PostgreSQL, MySQL, MongoDB)",
      "Knowledge of RESTful APIs & GraphQL",
      "Experience with cloud platforms (AWS/GCP/Azure)",
      "Familiarity with Git, CI/CD pipelines, and Agile practices",
    ],
    salary: "03–04 LPA",
    team: "Product Engineering",
    image: "/careers/fullStack-Developer.webp",
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "We are seeking a skilled Backend Developer to design, build, and maintain APIs and backend services. You will be responsible for writing scalable, secure, and maintainable code while collaborating with frontend developers, product managers, and DevOps engineers.",
    requirements: [
      "2+ years of experience as a Backend Developer",
      "Strong proficiency in Node.js/Express.js or similar frameworks",
      "Experience with databases (PostgreSQL/MySQL/MongoDB)",
      "Knowledge of RESTful API design and GraphQL",
      "Understanding of authentication, authorization, and security best practices",
      "Familiarity with Docker, CI/CD, and cloud platforms (AWS/GCP/Azure)",
      "Problem-solving skills and ability to work in a team",
    ],
    salary: "02–03 LPA",
    team: "Core Engineering",
    image: "/careers/backEnd-Developer.webp",
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    posted: "5 days ago",
    description:
      "We are looking for a creative and detail-oriented Frontend Developer to join our engineering team. You will be responsible for building intuitive and responsive user interfaces, optimizing performance, and collaborating with designers and backend engineers to deliver seamless user experiences.",
    requirements: [
      "2+ years of experience as a Frontend Developer",
      "Strong proficiency in JavaScript, TypeScript, HTML5, and CSS3",
      "Hands-on experience with React.js (Next.js is a plus)",
      "Knowledge of responsive design and cross-browser compatibility",
      "Familiarity with state management (Redux, Context API, or similar)",
      "Experience with RESTful APIs and integration with backend services",
      "Basic understanding of Git, CI/CD pipelines, and Agile workflows",
    ],
    salary: "02–03 LPA",
    team: "UI/UX Engineering",
    image: "/careers/frontEnd-Developer.webp",
  },
  {
    id: 4,
    title: "WordPress Developer",
    department: "Engineering",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    posted: "1 week ago",
    description:
      "We are seeking a talented WordPress Developer to design, develop, and maintain WordPress-based websites. You will be responsible for building custom themes, plugins, and ensuring website performance, security, and responsiveness.",
    requirements: [
      "2+ years of experience in WordPress development",
      "Proficiency in PHP, MySQL, HTML5, CSS3, and JavaScript",
      "Experience with custom theme and plugin development",
      "Strong knowledge of Elementor, WooCommerce, and other popular plugins",
      "Understanding of SEO best practices and website optimization",
      "Ability to troubleshoot, debug, and improve site performance",
      "Familiarity with Git, version control, and deployment workflows",
    ],
    salary: "03–04 LPA",
    team: "Web Development",
    image: "/careers/wordpress-Developer.webp",
  },
  {
    id: 5,
    title: "Graphics Designer",
    department: "Design",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    posted: "2 weeks ago",
    description:
      "We are looking for a creative Graphics Designer to join our design team. You will be responsible for creating visually appealing designs for digital platforms, branding, marketing campaigns, and product assets. Your designs will help communicate our brand story and engage users effectively.",
    requirements: [
      "2+ years of experience as a Graphics Designer",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects)",
      "Experience with digital and print media design",
      "Understanding of typography, color theory, and visual hierarchy",
      "Ability to create social media creatives, banners, and marketing assets",
      "Knowledge of UI/UX fundamentals is a plus",
      "Strong creativity, attention to detail, and ability to meet deadlines",
    ],
    salary: "04–05 LPA",
    team: "Creative Design",
    image: "/careers/graphics-Designer.webp",
  },
  {
    id: 6,
    title: "Video Editor",
    department: "Creative",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    posted: "3 weeks ago",
    description:
      "We are looking for a talented Video Editor to join our creative team. You will be responsible for editing and producing engaging video content for social media, marketing campaigns, and product showcases. You should have a strong sense of storytelling, pacing, and visual style.",
    requirements: [
      "2+ years of experience as a Video Editor",
      "Proficiency in Adobe Premiere Pro, After Effects, or Final Cut Pro",
      "Experience with color correction, motion graphics, and sound design",
      "Ability to edit videos for YouTube, Instagram, and other platforms",
      "Understanding of different video formats, resolutions, and aspect ratios",
      "Creative storytelling skills and attention to detail",
      "Basic knowledge of camera operations and shooting is a plus",
    ],
    salary: "03–05 LPA",
    team: "Content Production",
    image: "/careers/video-Editor.webp",
  },
  {
    id: 7,
    title: "UI/UX Designer",
    department: "Design",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    posted: "4 days ago",
    description:
      "We are looking for a skilled UI/UX Designer to craft intuitive and visually appealing user experiences. You will work closely with product managers, developers, and stakeholders to design interfaces that are both user-friendly and aligned with our brand identity.",
    requirements: [
      "2+ years of experience as a UI/UX Designer",
      "Proficiency in Figma, Sketch, Adobe XD, or similar tools",
      "Strong understanding of user-centered design principles",
      "Experience creating wireframes, prototypes, and design systems",
      "Knowledge of responsive and mobile-first design",
      "Ability to collaborate with developers and provide design handoffs",
      "Understanding of usability testing and user research methods",
    ],
    salary: "03–06 LPA",
    team: "Product Design",
    image: "/careers/uiux-Designer.webp",
  },
  {
    id: 8,
    title: "Social Media Manager",
    department: "Marketing",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    posted: "1 week ago",
    description:
      "We are seeking a dynamic Social Media Manager to lead our online presence across multiple platforms. You will be responsible for planning, creating, and executing social media strategies that drive engagement, brand awareness, and lead generation.",
    requirements: [
      "2+ years of experience in social media management or digital marketing",
      "Strong knowledge of platforms like Instagram, LinkedIn, Twitter, and YouTube",
      "Ability to create engaging content (posts, reels, videos, stories)",
      "Experience with social media analytics and tools (Buffer, Hootsuite, Meta Business Suite)",
      "Understanding of paid ads, influencer collaborations, and campaign optimization",
      "Creative storytelling and copywriting skills",
      "Strong communication and team collaboration abilities",
    ],
    salary: "02–04 LPA",
    team: "Marketing & Growth",
    image: "/careers/socialmedia-manager.webp",
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
    setTimeout(() => setSelectedJob(null), 300);
  };

  return (
    <div className="min-h-screen bg-[#0D0816] flex flex-col relative">
      <div className="max-w-[1360px] mx-auto w-full flex-1 flex flex-col rounded-xl overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 lg:px-8">
      
        <div className="relative w-full flex flex-col justify-center mb-12 sm:mb-16 lg:mb-20">
          <ScrollReveal className="z-20">
            <h2
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
                WebkitBackgroundClip: "text",
              }}
              className="headline z-10 text-transparent bg-clip-text pt-10 sm:pt-14 lg:pt-20 text-center"
            >
              We’ve saved a seat for you — bring your brilliance.
            </h2>

            <p className="mt-3 sm:mt-4 text-[#C4BBD3] z-10 text-center px-2">
              Because average just isn’t our thing — and neither is&nbsp;boring&nbsp;work.
            </p>
          </ScrollReveal>

          <div
            className="absolute -bottom-60 sm:-bottom-72 lg:-bottom-80 left-1/2 -translate-x-1/2 w-[420px] sm:w-[800px] lg:w-[1000px] h-[420px] sm:h-[800px] lg:h-[1000px] rounded-full blur-[90px] sm:blur-[110px] lg:blur-[120px] opacity-60 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(ellipse at center, #611610, #2E0D32 100%)",
            }}
          />
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-full flex flex-col transition-all duration-300">
            {/* Job Listings */}
            <div className="flex-1 overflow-y-auto custom-scrollbar z-20">
              <div className="mt-2 sm:mt-4  sm:p-2 lg:p-10 space-y-4 sm:space-y-6">
                <div>
                  {jobs.map((job) => (
                    <ScrollReveal  key={job.id} className="z-20">
                      <JobCard job={job} onSelect={handleJobSelect} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Drawer */}
          <div
            className={`fixed top-0 right-0 h-full w-full sm:w-[80%] lg:w-[40%] bg-[#1A1625] border-l border-[#2A243A] transform transition-transform duration-300 ease-in-out z-50 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {/* Drawer Header with Close Button */}
            <div className="absolute top-1.5 sm:top-2 right-0 z-50">
              <button
                onClick={closeDrawer}
                className="p-2 sm:p-2.5 text-[#9CA3AF] cursor-pointer"
                aria-label="Close"
              >
                <FiX className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="h-full overflow-y-auto custom-scrollbar">
              {selectedJob && (
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img
                      src={selectedJob.image || "/placeholder.svg"}
                      alt={selectedJob.title}
                      className="w-full h-40 sm:h-56 lg:h-60 object-cover"
                    />
                  </div>

                  <h2
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
                      WebkitBackgroundClip: "text",
                    }}
                    className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent"
                  >
                    {selectedJob.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
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
                      <h3 className="font-semibold text-white subheadline mb-2">
                        Job Description
                      </h3>
                      <p className="text-[#C4BBD3] leading-relaxed description">
                        {selectedJob.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-white subheadline mb-1">
                        Requirements
                      </h3>
                      <div className="grid grid-cols-1 gap-1">
                        {selectedJob.requirements.map((req, index) => (
                          <div
                            key={index}
                            className="p-2 rounded-lg flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] rounded-full" />
                            <span className="text-[#C4BBD3] description">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-md">
                      <div className="border border-[#FFFFFF63] p-4 rounded-lg">
                        <span className="font-medium text-white block mb-1">Salary</span>
                        <p className="text-[#C4BBD3]">{selectedJob.salary}</p>
                      </div>
                      <div className="border border-[#FFFFFF63] p-4 rounded-lg">
                        <span className="font-medium text-white block mb-1">Team</span>
                        <p className="text-[#C4BBD3]">{selectedJob.team}</p>
                      </div>
                    </div>

                    <button className="w-full h-12 border cursor-pointer border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white py-3 px-4 rounded-lg font-[600]">
                      Apply Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {isDrawerOpen && (
            <div
              className="fixed inset-0 bg-[#0D0816] opacity-80 z-40"
              onClick={closeDrawer}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function JobCard({ job, onSelect }) {
  return (
    <div
      style={{
        border: "1px solid hsla(0, 0%, 100%, .16)",
        boxShadow: "inset 0 1px #ff8e5d66",
        backgroundImage:
          "radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)",
      }}
      className="mb-4 sm:mb-5 lg:mb-6 cursor-pointer rounded-lg shadow-md overflow-hidden transform hover:scale-[1.01] duration-200"
      onClick={() => onSelect(job)}
    >
      <div className="p-5 sm:p-6 lg:py-8 lg:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-grow w-full">
          <div className="flex justify-between items-center mb-1.5 sm:mb-2">
            <h3
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
                WebkitBackgroundClip: "text",
              }}
              className="font-semibold text-transparent bg-clip-text text-lg sm:text-xl lg:subheadline"
            >
              {job.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 description text-[#C4BBD3] mb-1">
            {job.description.substring(0, 100)}...
          </div>

          <div className="flex items-center gap-2 description text-[#C4BBD3]">
            <FiMapPin className="w-3 h-3" />
            <span>{job.location}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-block mt-3 px-3 py-1 description bg-[#2A243A] text-[#C4BBD3] rounded-md border border-[#3C354B]">
              {job.type.toLowerCase()}
            </span>
            <span className="inline-block mt-3 px-3 py-1 description bg-[#2A243A] text-[#C4BBD3] rounded-md border border-[#3C354B]">
              {job.salary}
            </span>
          </div>
        </div>

        <img
          src={job.image || "/placeholder.svg"}
          alt={job.title}
          className="w-full sm:w-48 lg:w-50 h-40 sm:h-32 lg:h-30 object-cover rounded-md flex-shrink-0 shadow-sm"
        />
      </div>
    </div>
  );
}
