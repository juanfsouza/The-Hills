"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/app/components/ui/TextReveal";
import confetti from "canvas-confetti";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasFired, setHasFired] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasFired) return;

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
        triggerConfetti();
        setHasFired(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasFired]);

  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 segundos
    const colors = ["#FACC15", "#fff", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  // 🔥 Scroll suave para a seção "Projects"
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex flex-col items-center mt-32 text-white"
    >
      <div className="relative z-10 flex justify-between max-w-7xl w-full px-8">
        <div className="w-1/2 flex items-center justify-center">
          <TextReveal text="Quem Sou Eu" className="text-8xl font-bold text-white text-center" />
        </div>
        <div className="w-1/2 pl-8">
          <TextReveal
            text="Sou um desenvolvedor apaixonado por criar interfaces interativas e responsivas. Tenho experiência com React, Next.js e design UI/UX."
            className="text-sm text-gray-300"
          />
        </div>
      </div>

      {/* 🔥 Ícone Scroll para Projects */}
      <motion.img
        src="/vector-scroll-down.png"
        alt="Scroll Down"
        className="cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={scrollToProjects}
      />
    </section>
  );
};

export default About;
