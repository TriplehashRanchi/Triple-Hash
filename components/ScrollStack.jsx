'use client';
import { MdCheck } from 'react-icons/md';
import { motion } from 'framer-motion';
import styles from './ScrollStackPureCSS.module.css';

export default function StackingCards() {
  // simple alternating fade/slide
  const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -120 : 120 },
    visible: { opacity: 1, x: 0 },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cards}>
          {/* card 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants('right')}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-[50px] w-full rounded-2xl shadow-xl border border-gray-700 [background:radial-gradient(circle_at_top_left,rgba(0,200,255,0.4),transparent_10%),radial-gradient(circle_at_top_right,rgba(0,200,255,0.4),transparent_10%),radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.4),transparent_2%),radial-gradient(circle_at_bottom_right,rgba(0,200,255,0.4),transparent_10%),#FFF9EF]"
          >
            <div className="flex flex-col-reverse lg:flex-row items-center w-full h-full gap-5 lg:gap-20 p-4 lg:p-14">
              <div className="w-full lg:w-2/3 flex flex-col gap-6 lg:gap-8 p-4 lg:p-8">
                <div className="flex flex-col gap-4">
                  <h2 className="text-black headline">
                   Apps? Nah. <br /> We Build Business Engines.
                  </h2>
                  <p className="lg:w-[100%] text-gray-800 description">
                    Every feature we design is tied to your business goals — not just technical specs. Our team blends entrepreneurial insight with technical expertise, so what you get isn’t just a product… it’s a system that helps you grow. </p>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="flex gap-2 description"> <strong>We follow a simple, proven framework to bring your vision to life:</strong></p>
                  <p className="flex gap-2 description"><span className="text-gray-500 text-[1.2rem]">&lt;/&gt;</span><strong>Plan: </strong> Understand your goals, market, and users.</p>
                  <p className="flex gap-2 description"><span className="text-gray-500 text-[1.2rem]">&lt;/&gt;</span><strong>Build: </strong> Develop fast, scalable products with AI at the core.</p>
                  <p className="flex gap-2 description"><span className="text-gray-500 text-[1.2rem]">&lt;/&gt;</span><strong>Scale: </strong> Optimize funnels, automate workflows, and grow with you.</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4 lg:pr-8">
                <img src="/code.webp" alt="Code Preview" className="
                  border-[3px] border-black object-contain
                  p-[2px] rounded-[16px] 
                  origin-center 
                  lg:[transform:perspective(1000px)_rotateY(-20deg)]
                  transition-transform duration-300 ease-in-out
                  will-change-transform 
                  [backface-visibility:hidden] 
                  scale-100
                " />
              </div>
            </div>
          </motion.div>

          {/* card 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants('left')}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ border: '1px solid hsla(0, 0%, 100%, .16)' }}
            className="relative w-full rounded-2xl shadow-xl bg-[#0e0918]"
          >
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center w-full h-full gap-10 lg:gap-20 p-4 py-8 lg:p-14 lg:py-20">
              <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 p-0 lg:p-8">
                <div className="flex flex-col gap-0">
                  <h2 className="headline text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7C7C7C]">
                    Ship. Learn. Repeat.
                  </h2>
                  <p className="description text-gray-300 mt-4">
                    <strong>We don’t just code — </strong> We run rapid feedback loops. That means you get results in weeks, not months, with continuous improvements and smarter scaling.
                  </p>
                </div>
                <div className="description text-[#C4BBD3] flex flex-wrap gap-4">
                  <div className="flex gap-8 flex-wrap lg:flex-nowrap">
                    <div className="flex gap-2 w-full lg:w-[45%]">
                      <MdCheck fontSize={40} />
                      <p><strong className="text-white description"> Launch quickly</strong>  on scalable foundations
                        w</p>
                    </div>
                    <div className="flex justify-start gap-2 w-full lg:w-[45%]">
                      <MdCheck fontSize={40} />
                      <p><strong className="text-white description">Test live </strong>  wwith real users & pivot fast
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8 flex-wrap lg:flex-nowrap">
                    <div className="flex gap-2 w-full lg:w-[45%]">
                      <MdCheck fontSize={40} />
                      <p><strong className="text-white description">Improve continuously, </strong> not in one-off cycles </p>
                    </div>
                    <div className="flex gap-2 w-full lg:w-[45%]">
                      <MdCheck fontSize={40} />
                      <p><strong className="text-white description">Scale confidently </strong> with data-driven decisions
                      </p>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="w-[90%] lg:w-1/2 p-0 lg:p-8">
                <img src="/code.webp" alt="Code Preview" className="
                  border-[3px] border-white object-contain
                  p-[2px] rounded-[16px] 
                  origin-center 
                  lg:[transform:perspective(1000px)_rotateY(10deg)]
                  transition-transform duration-300 ease-in-out
                  will-change-transform 
                  [backface-visibility:hidden] 
                  scale-100
                " />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
