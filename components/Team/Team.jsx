'use client';

import React, { useLayoutEffect, useRef } from 'react';
import ProfileCard from '../ReactBit/ProfileCard';

import ScrollReveal from "../Gsap/ScrollReveal";
const Team = () => {
  const teamMembers = [
    {
      name: "Kunal Kumar",
      title: "Founder",
      handle: "ceo",
      contactText: "Contact Me",
      avatarUrl: "/Team/kunal-sir.png",
      miniAvatarUrl: "/Team/kunal-sir-icon.jpeg",
      onContactClick: "https://www.linkedin.com/in/buildwithkunal/",
    },

    {
      name: "Vishal Kumar",
      title: "Video Editor",
      handle: "vishal",
      contactText: "Contact Me",
      avatarUrl: "/Team/Vishalkumar.png",
      miniAvatarUrl: "/Team/Vishalkumar.png",
      onContactClick: "https://www.linkedin.com/in/buildwithkunal/",
    },
    {
      name: "Kunal Kumar",
      title: " Full Stack Developer",
      handle: "kunal",
      contactText: "Contact Me",
      avatarUrl: "/Team/kunal.png",
      miniAvatarUrl: "/Team/kunal.png",
      onContactClick: "https://www.linkedin.com/in/champ18ionx/",
    },

    {
      name: "Dhiraj Giri",
      title: "Senior WordPress Developer",
      handle: "dhiraj",
      contactText: "Connect Me",
      avatarUrl: "/Team/dheeraj-sir.png",
      miniAvatarUrl: "/Team/dheeraj-sir.png",
      onContactClick: "https://www.linkedin.com/in/dhiraj-giri-717a3532b/",
    },
    {
      name: "Aman Kumar",
      title: "WordPress Developer",
      handle: "aman",
      contactText: "Connect Me",
      avatarUrl: "/Team/Aman.png",
      miniAvatarUrl: "/Team/Aman.png",
      onContactClick: "https://www.linkedin.com/in/aman-nayak-31399737b/",
    },
    {
      name: "Gautam Kr. Pandit",
      title: "Full Stack Developer",
      handle: "gautam",
      contactText: "Connect Me",
      avatarUrl: "/Team/gautam.png",
      miniAvatarUrl: "/Team/gautam.png",
      onContactClick: "https://www.linkedin.com/in/gautam-pandit-4b185224b/",
    },
    {
      name: "Sagar Kumar",
      title: "Full Stack Developer",
      handle: "sagar",
      contactText: "Contact Me",
      avatarUrl: "/Team/sagar1.png",
      miniAvatarUrl: "/Team/sagar-icon.jpg",
      onContactClick: "https://www.linkedin.com/in/sagar-kumar-ab452b276/",
    },

  ];


  return (
    <div className="bg-[#0D0816] pb-30" >
      <div className="flex flex-col items-center gap-2 max-w-[1360px] mx-auto px-4 lg:px-8 pt-20 sm:pt-20 md:pt-0">

        {/* Heading */}
        <ScrollReveal>
          <h2

            className="  text-center mb-4"
          >
            <span style={{
              backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
              WebkitBackgroundClip: "text",
            }} className="bg-clip-text text-transparent  headline text-center mb-4">
              Talent. Passion. Innovation.
            </span>
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
                WebkitBackgroundClip: "text",
              }}
              className="reveal-item headline block bg-clip-text text-transparent"
            >
              That’s our team
            </span>
          </h2>
        </ScrollReveal>

        {/* Description */}
        <p className=" text-[#C4BBD3] text-center w-full sm:w-[80%] md:w-[70%] lg:w-[60%] description mb-14">
          We are a diverse team of innovators, creators, and leaders, united by a shared vision of shaping the future.
          Bringing together unique perspectives and expertise, we collaborate to design solutions that inspire progress
          and drive meaningful change. Together, we’re building what comes next.
        </p>

        {/* Team Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <ProfileCard
                name={member.name}
                title={member.title}
                handle={member.handle}
                contactText={member.contactText}
                avatarUrl={member.avatarUrl}
                miniAvatarUrl={member.miniAvatarUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={member.onContactClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
