"use client";

import { Parallax } from "react-scroll-parallax";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import { WordRotate } from "./ui/word-rotate";
import { TypingAnimation } from "./ui/typing-animation";

const aboutSections = [
  {
    text: "Sou um desenvolvedor apaixonado por criar interfaces interativas e responsivas.",
    wordRotate: ["Tech Stack", "Skills", "Tools"],
    image: "/image1.jpg",
    icons: [FaReact, SiNextdotjs, SiTailwindcss],
  },
  {
    text: "Tenho experiência com React, Next.js e design UI/UX.",
    wordRotate: ["UI/UX", "Frontend", "Performance"],
    image: "/image2.jpg",
    icons: [FaReact, SiNextdotjs],
  },
  {
    text: "Sempre busco melhorar a experiência do usuário através de animações e interatividade.",
    wordRotate: ["Animations", "Microinteractions", "Smooth UI"],
    image: "/image3.jpg",
    icons: [FaReact, SiTailwindcss],
  },
  {
    text: "Além do frontend, também possuo conhecimento em backend e banco de dados.",
    wordRotate: ["Node.js", "APIs", "Databases"],
    image: "/image4.jpg",
    icons: [FaNodeJs, SiNextdotjs],
  },
];


const Project = () => {

  return (
  <section id="projects" className="relative flex flex-col items-center mt-32 text-white bg-cover bg-center">
      <div className="mt-16 grid grid-cols-1 gap-12 w-full max-w-7xl">
        {aboutSections.map((section, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-8`}>
            <Parallax speed={20} className="h-[500px]">
              <Image src={section.image} alt="About Image" width={600} height={400} className="rounded-lg shadow-lg" />
            </Parallax>
            <div className="w-1/2 flex flex-col items-center">
              <WordRotate className="text-4xl font-bold text-white mb-6" words={section.wordRotate} />
              <TypingAnimation className="text-sm mb-5 text-gray-300">{section.text}</TypingAnimation>
              
              {/* 🔥 Ícones abaixo do texto */}
              <div className="flex space-x-6 mt-4">
                {section.icons.map((Icon, idx) => (
                  <Icon key={idx} className="text-4xl text-white transition-transform transform hover:scale-110" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
