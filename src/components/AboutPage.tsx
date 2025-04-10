"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";

// Skills Data
interface SkillCategory {
  title: string;
  items: string[];
}

const skills: SkillCategory[] = [

  {
    title: "Languages",
    items: ["Html5", "CSS3", "Javascript", "Php", "Typescript", "Python", "SQL", "C",],
  },
  {
    title: "Frameworks & Libraries",
    items: ["ReactJS", "NextJS", "TailwindCSS", "NodeJS", "MongoDB", "MariaDB", "Django", "Bootstrap"],
  },
  {
    title: "UIUX & Graphic Design",
    items: ["Photoshop", "Illustration", "After Effect", "Premiere pro", "Figma", "Coreldraw", "Figma",],
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-12 -mt-16">
      {/* ABOUT SECTION */}
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center gap-6 -mt-1">
        <div
          className="lg:text-[80px] text-center tracking-tighter text-foreground mt-4 !text-[#dad7cd]"
          style={{ fontFamily: "Degular, sans-serif", fontWeight: 600 }}
        >
          About
        </div>
        <div className="sm:w-[80%] md:w-[75%] xl:w-[80%] text-2xl text-[#7d8597] z-9" style={{ fontFamily: "Degular, sans-serif", fontWeight: 300 }}>
          Hello folks! I'm <strong>Pavan Sathish Acharya</strong> — an engineering student with the heart of a designer, a passion for code, and a flair for creativity. I specialize in <strong>graphic design, UI/UX, web development, and video editing</strong>. Whether it's pixels or code, I love blending tech with art. Always curious, always creating — and always open to exciting collaborations! ✨
        </div>

        {/* Education Section */}
        <div className="sm:w-[80%] md:w-[75%] xl:w-[80%] mt-8 text-xl text-[#7d8597] z-9" style={{ fontFamily: "Degular, sans-serif", fontWeight: 300 }}>
          <h2 className="text-3xl text-[#dad7cd] font-semibold mb-2">🎓 Education</h2>
          <p><strong>NMAM Institute of Technology, Nitte</strong> — B.Tech in Robotics and Artificial Intelligence (2022-2025)</p>
          <p><strong>NRAM polytechnic, Nitte</strong> — Diploma in Computer Science and Engineering  (2019-2022)</p>
        </div>

        {/* Experience Section */}
        <div className="sm:w-[80%] md:w-[75%] xl:w-[80%] mt-6 text-xl text-[#7d8597] z-9" style={{ fontFamily: "Degular, sans-serif", fontWeight: 300 }}>
          <h2 className="text-3xl text-[#dad7cd] font-semibold mb-2">💼 Experience</h2>
          <p><strong>Manipal Technologies Limited Manipal</strong> — artificial intelligence Intern (Jan 2025- May 2025)</p>
          <p><strong>Vitvara Technologies Mangalore</strong> — Web development Intern (March 2022-April 2022)</p>
        </div>

      </div>
      <div className="min-h-screen to-indigo-900 flex flex-col items-center gap-7 -mt-20 " style={{ fontFamily: "Degular, sans-serif", fontWeight: 400 }}>
        {skills.map((category, index) => (
          <div key={index} className="p-6 rounded-2xl w-full max-w-4xl shadow-lg border border-[#588157] ">
            <h2 className="text-[#dad7cd] text-xl font-semibold border-b border-[#588157] pb-2 mb-4">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-transparent border border-[#588157] text-[#dad7cd] rounded-full text-sm  transition">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;