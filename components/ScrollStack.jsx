'use client';
import { MdCheck } from 'react-icons/md';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollStackPureCSS.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function StackingCards() {
//   useEffect(() => {
//     // Clear all triggers on refresh
//     ScrollTrigger.getAll().forEach(t => t.kill());

//     ScrollTrigger.matchMedia({
//       // ✅ Only enable scroll stack on screens >= 768px
//       "(min-width: 768px)": function () {
//         const cards = gsap.utils.toArray(`.${styles.card}`);

//         cards.forEach((card, index) => {
//           // subtle scale effect
//           gsap.to(card, {
//             scrollTrigger: {
//               trigger: card,
//               start: () => `top bottom-=100`,
//               end: () => `top top+=40`,
//               scrub: true,
//               invalidateOnRefresh: true,
//             },
//             ease: 'none',
//           });

//           // Scroll stack effect
//           ScrollTrigger.create({
//             trigger: card,
//             start: "top top+=100", // pin ~100px below top
//             endTrigger: cards[index + 1],
//             end: "top top+=100",
//             pin: true,
//             pinSpacing: false,
//             id: `pin-${index}`,
//             invalidateOnRefresh: true,
//           });
//         });
//       },

//       // ❌ Disable pinning for mobile
//       "(max-width: 767px)": function () {
//         // Nothing → no pinning in phone view
//       },
//     });
//   }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.cards}>

                    {/* card 1 */}
                    <div className={` mb-[50px] w-full rounded-2xl shadow-xl border border-gray-700 bg-[#FFF9EF]`}>
                        <div className="flex flex-col-reverse lg:flex-row items-center w-full h-full gap-5 lg:gap-20 p-4 lg:p-14">
                            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 p-4 lg:p-8">
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-black font-medium text-[2.5rem] sm:text-[2.95rem] leading-none">
                                        Code when you need it, UI when you don't
                                    </h2>
                                    <p className="lg:w-[70%] text-gray-800 text-md">
                                        Other tools limit you to either a visual building experience, or code.
                                        With n8n, you get the best of both worlds.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <p className="flex gap-2"><span className="text-gray-500 text-[1.2rem]">&lt;/&gt;</span><strong>Write JavaScript or Python</strong> - you can always fall back to</p>
                                    <p className="flex gap-2"><span className="text-gray-500 text-[1.2rem]">&lt;/&gt;</span><strong>Add libraries</strong> from npm or Python for even more power</p>
                                    <p className="flex gap-2"><span className="text-gray-500 text-[1.2rem]">&lt;/&gt;</span><strong>Paste cURL requests</strong> into your workflow</p>
                                    <p className="flex gap-2"><span className="text-gray-500 text-[1.2rem]">&lt;/&gt;</span><strong>Merge workflow branches</strong>, don’t just split them</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 p-4 lg:pr-8">
                                <img src="/code.webp" alt="Code Preview" className="
                  border-[3px] border-black object-contain
                  p-[2px] rounded-[16px] 
                  origin-center 
                  lg:[transform:perspective(1000px)_rotateY(-20deg)]  /* ✅ only rotate on lg+ */
                  transition-transform duration-300 ease-in-out
                  will-change-transform 
                  [backface-visibility:hidden] 
                  scale-100
                " />
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div style={{ border: '1px solid hsla(0, 0%, 100%, .16)', }} className={`relative w-full rounded-2xl shadow-xl bg-[#0e0918]`}>
                        <div className="flex flex-col-reverse lg:flex-row-reverse items-center w-full h-full gap-10 lg:gap-20 p-4 py-8 lg:p-14 lg:py-20">
                            <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 p-0 lg:p-8">
                                <div className="flex flex-col gap-0">
                                    <h2 className="text-[2.5rem] leading-tight sm:text-[2.9rem] font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7C7C7C]">
                                        Run. Tweak. Repeat
                                    </h2>
                                    <p className="text-gray-300">
                                        The same short feedback loops that make you smile at your scripts.
                                    </p>
                                </div>
                                <div className="text-[#C4BBD3] flex flex-wrap gap-4">
                                    <div className="flex gap-8 flex-wrap lg:flex-nowrap">
                                        <div className="flex gap-2 w-full lg:w-[45%]">
                                            <MdCheck fontSize={40} />
                                            <p><strong className="text-white">Re-run single steps</strong> without re-running the whole workflow</p>
                                        </div>
                                        <div className="flex gap-2 w-full lg:w-[45%]">
                                            <MdCheck fontSize={40} />
                                            <p><strong className="text-white">Replay or mock data</strong> to avoid waiting for external systems</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-8 flex-wrap lg:flex-nowrap">
                                        <div className="flex gap-2 w-full lg:w-[45%]">
                                            <MdCheck fontSize={30} />
                                            <p><strong className="text-white">Debug fast</strong>, with logs in line with your code</p>
                                        </div>
                                        <div className="flex gap-2 w-full lg:w-[45%]">
                                            <MdCheck fontSize={30} />
                                            <p><strong className="text-white">Use 1700+ templates</strong> to jump-start your project</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button className="bg-gradient-to-r from-[#077AC7] to-[#6B21EF] text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                                        Browse all integrations
                                    </button>
                                </div>
                            </div>
                            <div className="w-[90%] lg:w-1/2 p-0 lg:p-8">
                                <img src="/code.webp" alt="Code Preview" className="
                  border-[3px] border-white object-contain
                  p-[2px] rounded-[16px] 
                  origin-center 
                   lg:[transform:perspective(1000px)_rotateY(10deg)]  /* ✅ only rotate on lg+ */
                  transition-transform duration-300 ease-in-out
                  will-change-transform 
                  [backface-visibility:hidden] 
                  scale-100
                " />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         </div>
    );
}
