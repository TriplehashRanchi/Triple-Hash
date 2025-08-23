// components/ProcessSteps.js
import Image from 'next/image';
import ScrollReveal from "../Gsap/ScrollReveal";
export default function ProcessSteps() {
    const stepsData = [
        {
            id: 1,
            title: 'Requirements gathering',
            description: 'This stage focuses on understanding the business context and collecting requirements from the client.',
            team: ['Business Analyst', 'Project Manager'],
            arrow: '/arrow1.svg', // Path to the bottom-right arrow SVG
            arrowAlt: 'Arrow pointing down right',
            arrowClass: 'right-arrow-style-1', // Custom class for this arrow's position/rotation
        },
        {
            id: 2,
            title: 'Planning',
            description: 'Involves creating a comprehensive business analysis plan, defining goals, timelines, and budget.',
            team: ['Business Analyst', 'Project Manager'],
            arrow: '/arrow2.svg', // Path to the top-left arrow SVG
            arrowAlt: 'Arrow pointing up left',
            arrowClass: 'left-arrow-style-1', // Custom class for this arrow's position/rotation
        },
        {
            id: 3,
            title: 'User personas and empathy map',
            description: 'We create user personas and describe their characteristics and the problems they face.',
            team: ['Business Analyst', 'Project Manager'],
            arrow: '/arrow1.svg', // Path to the bottom-right arrow SVG
            arrowAlt: 'Arrow pointing down right',
            arrowClass: 'right-arrow-style-2', // Custom class for this arrow's position/rotation
        },
        {
            id: 4,
            title: 'Competitor analysis',
            description: 'We conduct an analysis of competitors, identifying their strengths and weaknesses.',
            team: ['Business Analyst', 'Project Manager'],
            arrow: '/arrow2.svg', // Path to the top-left arrow SVG
            arrowAlt: 'Arrow pointing up left',
            arrowClass: 'left-arrow-style-2', // Custom class for this arrow's position/rotation
        },
        {
            id: 5,
            title: 'Business analysis',
            description: 'Involves researching and assessing information about the project\'s current status and exploring potential solutions, including a SWOT analysis.',
            team: ['Business Analyst', 'Project Manager'],
            arrow: '/arrow1.svg', // Path to the bottom-right arrow SVG
            arrowAlt: 'Arrow pointing down right',
            arrowClass: 'right-arrow-style-3', // Custom class for this arrow's position/rotation
        },
        {
            id: 6,
            title: 'Modeling and structuring the findings',
            description: 'The final stage is to create detailed documentation, diagrams, and models based on the research findings.',
            team: ['Business Analyst', 'Project Manager'],
            // No arrow after the last step
        },
    ];

    return (
        <section className="bg-[#0D0816]  pb-32 overflow-hidden">
            <div className=" mx-auto px-4 max-w-[1360px] p-4 lg:p-8">
                <ScrollReveal>
                    <p style={{ fontFamily: 'monospace' }} className=" text-center text-[0.85rem] font-[600] tracking-[0.15em] text-[#c4bbd3] uppercase mb-[3rem]">
                        [ STREAMLINED MVNO OPERATIONS ]
                    </p>

                    <h1
                        className="text-[4.2rem] text-center font-extrabold leading-[1.1] text-[#e0e5ed]   mb-[30px] mx-auto"
                        style={{
                            backgroundImage: "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        Our  Work Process
                    </h1>

                    <p className="text-[1.15rem] text-center leading-[1.6] text-[#c4bbd3] w-[60%]   mb-24 mx-auto">
                        The business analysis process encompasses various stages, each requiring a specific team composition. It’s important to note that the workflow may vary according to the unique requirements of each project.
                    </p>

                </ScrollReveal>{/* max-w-7xl is approx 1280px, adjust if 1360px needed for specific content */}
                {stepsData.map((step, index) => {
                    const isEven = step.id % 2 === 0;
                    return (
                        <div
                            key={step.id}
                            className={` flex items-center    ${isEven ? 'flex-row-reverse' : 'flex-row'
                                } my-16 md:my-24 lg:my-32 last:mb-0`}
                        >

                            <div className='flex gap-10'>
                                <div
                                    className={`text-8xl md:text-9xl lg:text-[10rem] font-extrabold text-gray-300 opacity-80 ${isEven ? 'order-2' : 'order-1'
                                        }`}
                                    style={{ lineHeight: 0.5, }}
                                >
                                    {step.id}
                                </div>


                                <div
                                    className={`w-full max-w-lg text-[#f8f8f8f2] ${isEven ? 'order-1 text-right' : 'order-2 text-left'
                                        }`}
                                >
                                    <h3 className="text-3xl md:text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-base text-[#E4E4E4]/70 md:text-lg leading-relaxed mb-6">{step.description}</p>

                                    {/* Team Section */}
                                    <div
                                        className={`inline-block border border-dashed border-gray-300 p-4 bg-opacity-70 ${isEven ? 'ml-auto' : 'mr-auto'
                                            }`}
                                    >
                                        <p className={`font-[500] text-2xl mb-2 ${isEven ? 'text-left' : 'text-left'}`}>Team:</p>
                                        <ul className="list-disc pl-10  font-[500] text-md ">
                                            {step.team.map((member, i) => (
                                                <li key={i}>{member}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {step.arrow && (
                                <div
                                    className="w-[250px] md:w-[350px] lg:w-[400px] h-[200px]"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(to right, #ff9b26, #ee4f27)",
                                        WebkitMask: `url(${step.arrow}) no-repeat center`,
                                        WebkitMaskSize: "contain",
                                        mask: `url(${step.arrow}) no-repeat center`,
                                        maskSize: "contain",
                                    }}
                                ></div>
                            )}

                        </div>
                    );
                })}
            </div>
        </section>
    );
}