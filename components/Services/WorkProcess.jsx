// components/ProcessSteps.js
import Image from 'next/image';
import ScrollReveal from "../Gsap/ScrollReveal";

export default function ProcessSteps() {
  const stepsData = [
    {
      id: 1,
      title: 'Discover & Define',
      description:
        'We begin with clarity—your vision, users, and business goals—so we build the right thing, not just build fast.',
      team: ['Founder', 'Business Analyst', 'Product Strategist'],
      arrow: '/arrow1.svg',
      arrowAlt: 'Arrow pointing down right',
      arrowClass: 'right-arrow-style-1',
    },
    {
      id: 2,
      title: 'Plan & Blueprint',
      description:
        'A crisp roadmap with milestones, timelines, and tech choices. You’ll always know what’s next and why.',
      team: ['Project Manager', 'Tech Lead', 'UI/UX Designer'],
      arrow: '/arrow2.svg',
      arrowAlt: 'Arrow pointing up left',
      arrowClass: 'left-arrow-style-1',
    },
    {
      id: 3,
      title: 'Design with Users in Mind',
      description:
        'From wireframes to polished UI, we craft intuitive experiences that make adoption effortless.',
      team: ['UI/UX Designer', 'Front-End Developer'],
      arrow: '/arrow1.svg',
      arrowAlt: 'Arrow pointing down right',
      arrowClass: 'right-arrow-style-2',
    },
    {
      id: 4,
      title: 'Build & Integrate',
      description:
        'Scalable web, mobile, and AI features—integrated with the tools you already use.',
      team: ['Full-Stack Developers', 'AI Engineers'],
      arrow: '/arrow2.svg',
      arrowAlt: 'Arrow pointing up left',
      arrowClass: 'left-arrow-style-2',
    },
    {
      id: 5,
      title: 'Test & Refine',
      description:
        'Tight feedback loops, real-user testing, and QA to catch issues early and ship confidently.',
      team: ['QA Engineers', 'Beta Users', 'Project Manager'],
      arrow: '/arrow1.svg',
      arrowAlt: 'Arrow pointing down right',
      arrowClass: 'right-arrow-style-3',
    },
    {
      id: 6,
      title: 'Launch & Scale',
      description:
        'Go live, then keep growing—optimize funnels, automate workflows, and scale with data.',
      team: ['Founder', 'Growth Strategist', 'DevOps'],
    },
  ];

  return (
    <section className="bg-[#0D0816] pb-32 overflow-hidden">
      <div className="mx-auto px-4 max-w-[1160px] p-4 lg:p-8">
        <ScrollReveal>
          <p
            style={{ fontFamily: 'monospace' }}
            className="text-center text-[0.85rem] font-[600] tracking-[0.15em] text-[#c4bbd3] uppercase mb-[3rem]"
          >
            [ HOW WE BUILD AT TRIPLEHASH ]
          </p>

          <h1
            className="text-[2.2rem] sm:text-[3rem] lg:text-[4rem] text-center font-extrabold leading-[1.2] lg:leading-[1.1] text-[#e0e5ed] mb-[30px] mx-auto"
            style={{
              backgroundImage:
                'linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Build Process
          </h1>

          <p className="description text-center text-[#c4bbd3] w-full sm:w-[80%] lg:w-[60%] mb-16 sm:mb-24 mx-auto px-2">
            A clear, outcome-driven path from idea to impact. Short iterations, real feedback, and
            scalable engineering—so you see progress in weeks, not months.
          </p>
        </ScrollReveal>

        {stepsData.map((step) => {
          const isEven = step.id % 2 === 0;
          return (
            <ScrollReveal key={step.id}>
              <div
                className={`flex flex-col sm:flex-row items-center gap-8 ${
                  isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'
                } my-12 md:my-24 lg:my-32 last:mb-0`}
              >
                {/* Number + Content */}
                <div className="flex flex-row sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
                  {/* Step Number */}
                  <div
                    className={`text-9xl sm:text-9xl md:text-8xl lg:text-[12rem] font-extrabold text-gray-300 opacity-80 ${
                      isEven ? 'sm:order-2' : 'sm:order-1'
                    }`}
                    style={{ lineHeight: 0.5 }}
                  >
                    {step.id}
                  </div>

                  {/* Step Content */}
                  <div
                    className={`w-full max-w-lg text-[#f8f8f8f2] text-left sm:text-left mt-4 sm:mt-0 md:mt-10 ${
                      isEven ? 'sm:order-1 sm:text-right' : 'sm:order-2 sm:text-left'
                    }`}
                  >
                    <h3 className="subheadline text-2xl sm:text-4xl mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    <p className="description text-[#E4E4E4]/70 mb-4 sm:mb-6">
                      {step.description}
                    </p>

                    {/* Team (optional): show roles if you want) */}
                    {step.team?.length ? (
                      <ul
                        className={`flex flex-wrap gap-2 text-xs tracking-wide text-[#CFC7DE] ${
                          isEven ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {step.team.map((role) => (
                          <li
                            key={role}
                            className="rounded-full px-3 py-1 bg-white/5 border border-white/10"
                          >
                            {role}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>

                {/* Arrow */}
                {step.arrow && (
                  <div
                    className={`
                      w-[200px] h-[60px]
                      sm:w-[200px] sm:h-[140px]
                      md:w-[300px] md:h-[180px]
                      lg:w-[300px] lg:h-[200px]
                      mx-auto sm:mx-0
                      my-10 sm:mt-0
                      ${isEven ? '-rotate-90 sm:rotate-0' : 'rotate-90 sm:rotate-0'}
                    `}
                    style={{
                      backgroundImage: 'linear-gradient(to right, #ff9b26, #ee4f27)',
                      WebkitMask: `url(${step.arrow}) no-repeat center`,
                      WebkitMaskSize: 'contain',
                      mask: `url(${step.arrow}) no-repeat center`,
                      maskSize: 'contain',
                    }}
                    aria-label={step.arrowAlt}
                  />
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
