'use client';

import React, { useEffect, useRef } from 'react';
import ProfileCard from '../ReactBit/ProfileCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const teamMembers = [
    {
      name: "Javi A. Torres",
      title: "Software Engineer",
      handle: "javicodes",
      status: "Online",
      contactText: "Contact Me",
      avatarUrl: "/Sagar.png",
    },
    {
      name: "Javi A. Torres",
      title: "Software Engineer",
      handle: "javicodes",
      status: "Online",
      contactText: "Contact Me",
      avatarUrl: "/Sagar.png",
    },
    {
      name: "Aarav Mehta",
      title: "Product Designer",
      handle: "aarav.designs",
      status: "Online",
      contactText: "Connect",
      avatarUrl: "/Sagar.png",
    },
    {
      name: "Sanya Kapoor",
      title: "Frontend Developer",
      handle: "sanyakapoor",
      status: "Busy",
      contactText: "Message",
      avatarUrl: "/Sagar.png",
    },
    {
      name: "Rohan Verma",
      title: "Backend Engineer",
      handle: "rohan.codes",
      status: "Offline",
      contactText: "Ping Me",
      avatarUrl: "/Sagar.png",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.animateLine');

    gsap.from(lines, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 40,
      stagger: 0.3,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-[#0D0816] pb-30" ref={containerRef}>
      <div className="flex flex-col items-center gap-2 max-w-[1360px] mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <h2
          style={{
            backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
            WebkitBackgroundClip: 'text',
          }}
          className="animateLine bg-clip-text text-transparent font-raleway text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-center mb-4"
        >
          The People
          <br />
          <span
            style={{ backgroundImage: 'linear-gradient(to right, #ff9b26, #ee4f27)', WebkitBackgroundClip: 'text' }}
            className="bg-clip-text text-transparent"
          >
            Behind Our Vision
          </span>
        </h2>

        {/* Description */}
        <p className="animateLine text-[#C4BBD3] text-center w-full sm:w-[80%] md:w-[70%] lg:w-[60%] text-base md:text-md leading-medium font-raleway mb-14">
          We are a diverse team of innovators, creators, and leaders, united by a shared vision of shaping the future.
          Bringing together unique perspectives and expertise, we collaborate to design solutions that inspire progress
          and drive meaningful change. Together, we’re building what comes next.
        </p>

        {/* Team Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="animateLine">
              <ProfileCard
                name={member.name}
                title={member.title}
                handle={member.handle}
                status={member.status}
                contactText={member.contactText}
                avatarUrl={member.avatarUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
