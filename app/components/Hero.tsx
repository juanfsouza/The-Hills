"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "@/app/components/ui/TextAnimate";
import Header from "./NavBar";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const Hero = () => {
  const [shootingStars, setShootingStars] = useState<number[]>([]);

  useEffect(() => {
    setShootingStars(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  // 🔥 Função para scroll suave até About
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const text =
  "✦ UI/UX Design ✦ Graphic Design ✦ Motion Graphic ✦ Digital Marketing ✦ SEO ✦ Branding ✦ Website Design ✦ App Design ✦ Development ✦ ";


  return (
    <section id="home" className="relative h-screen overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center">
      <Header />
        {/* 🔥 Imagem animada flutuando lateralmente */}
        <motion.img
          src="/hero-3d-02.png"
          alt="Mask"
          className="mt-64 hidden md:block w-[200px] h-[200px] object-contain absolute right-36 md:right-48 transition-all"
          animate={{
            x: [-20, 20, -20],
            y: [-0, 20, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

      {/* Camada de estrelas cadentes */}
      <div className="absolute inset-0 night">
        {shootingStars.map((star) => (
          <div
            key={star}
            className="shooting_star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Conteúdo do Hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white transition-all">
        <h1 className="text-6xl font-remix font-semibold">
          <TextAnimate animation="fadeIn" duration={0.5} delay={0.2} startOnView={true}>
            Criando Criatividade
          </TextAnimate>
        </h1>

        <p className="mt-4 text-2xl font-medium">
          <TextAnimate animation="scaleUp" duration={2} delay={0.5} startOnView={true}>
            Desenvolvedor Front-end | React | Next.js | UI/UX
          </TextAnimate>
        </p>
        <p className="mt-4 text-sm font-medium">
          <TextAnimate animation="blurInUp" startOnView={true}>
            Sou um desenvolvedor apaixonado por criar interfaces interativas e responsivas.
          </TextAnimate>
        </p>
          <div className="flex mt-3">
            <Image src="/vector-arrow.png" className="hidden md:block rounded-lg shadow-lg md-10 m-3" alt="Arrow" width={200} height={200} />
            <InteractiveHoverButton>Meus Projetos</InteractiveHoverButton>
          </div>           
        {/* 🔥 Imagem animada flutuando lateralmente */}
        <motion.img
          src="/hero-3d-01.png"
          alt="Planet"
          className="mt-14 hidden md:block w-[600px] h-[600px] object-contain absolute left-10 md:left-34 transition-all"
          animate={{
            x: [-20, 20, -20],
            y: [ 20, 20, -20],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      {/* 🔥 Ícone de Scroll */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-white text-3xl"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaChevronDown />
      </motion.div>

        {/* 🔥 Texto Marquee - Linha Amarela para Direita */}
        <div className="absolute bottom-0 w-full">
          <Marquee gradient={false} speed={50} className="bg-yellow-400 text-black font-bold py-2 text-lg">
            {text.repeat(10)}
          </Marquee>

          {/* 🔥 Texto Marquee - Linha Preta para Esquerda */}
          <Marquee gradient={false} speed={50} direction="right" className="bg-black text-yellow-400 font-bold py-2 text-lg">
            {text.repeat(10)}
          </Marquee>
        </div>
      </div>        
    </section>
  );
};

export default Hero;
