"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; 
import { TextAnimate } from "@/app/components/ui/TextAnimate"; 

const Hero = () => {
  const [shootingStars, setShootingStars] = useState<number[]>([]);

  useEffect(() => {
    setShootingStars(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-hero transition-all">
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all text-white">
        {/* Animação no título com o TextAnimate */}
        <h1 className="text-6xl font-semibold transition-all">
          <TextAnimate
            animation="fadeIn" // Escolha o efeito de animação
            duration={0.5} // Duração da animação
            delay={0.2} // Delay antes de começar a animação
            startOnView={true} // Iniciar a animação quando o elemento estiver na tela
          >
            CODE JF
          </TextAnimate>
        </h1>

        {/* Texto adicional */}
        <p className="mt-4 text-2xl font-medium">
        <TextAnimate
            animation="scaleUp" // Escolha o efeito de animação
            duration={2} // Duração da animação
            delay={0.5} // Delay antes de começar a animação
            startOnView={true} // Iniciar a animação quando o elemento estiver na tela
          >
          Desenvolvedor Front-end | React | Next.js | UI/UX
          </TextAnimate>
        </p>
      </div>
    </section>
  );
};

export default Hero;
