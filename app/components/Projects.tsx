"use client";

import { Parallax } from "react-scroll-parallax";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import { WordRotate } from "./ui/word-rotate";
import { TypingAnimation } from "./ui/typing-animation";
import { motion } from "framer-motion";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

const projectSections = [
  {
    text: "Sou um desenvolvedor apaixonado por criar interfaces interativas e responsivas.",
    wordRotate: ["Tech Stack", "Skills", "Tools"],
    image: "/image1.jpg",
    icons: [FaReact, SiNextdotjs, SiTailwindcss],
        github: "https://github.com/seu-usuario/projeto4",
    deploy: "https://deploy-url.com/projeto4"
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
  <section id="projects" className="relative flex flex-col items-center mt-32 text-white  overflow-hidden bg-[url('/bg-project-home.png')]  bg-center overscroll-auto ">
      <div className="mt-16 grid grid-cols-1 gap-12 w-full max-w-7xl px-4 sm:px-8">
        {/* 🔥 Imagem animada flutuando lateralmente */}
        <motion.img
          src="/hero-light-vector-1.png"
          alt="Star"
          className="mt-64 hidden md:block w-[50px] h-[50px] object-contain absolute right-36 md:right-48 transition-all"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        {projectSections.map((section, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-8`}>
            <Parallax speed={20} className="h-[500px]">
              <Image src={section.image} alt="About Image" width={600} height={400} className="rounded-lg shadow-lg" />
            </Parallax>
            <div className="w-1/2 flex flex-col items-center">
              <WordRotate className="text-4xl font-bold text-white mb-6" words={section.wordRotate} />
              <TypingAnimation className="text-sm mb-5 text-gray-300">{section.text}</TypingAnimation>
                <div className="flex gap-4 mt-4">
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>😺 Github</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>✨ Deploy</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </div>

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
      {/* 🔥 Imagem animada flutuando lateralmente */}
      <motion.img
          src="/testimonial-test.png"
          alt="Light"
          className="mt-64 hidden md:block w-[1600px] h-[1600px] overflow-hidden object-contain absolute right-96 md:right-96 transition-all"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
       <motion.img
          src="/hero-light-vector-2.png"
          alt="Roll"
          className="mt-96 hidden md:block w-[50px] h-[50px] object-contain absolute left-36 md:left-48 transition-all"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        />
    </section>
  );
};

export default Project;
