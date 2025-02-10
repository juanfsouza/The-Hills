"use client";

import { useEffect, useState } from "react";
import { TextAnimate } from "@/app/components/ui/TextAnimate";
import Header from "./NavBar";

const Hero = () => {
  const [shootingStars, setShootingStars] = useState<number[]>([]);

  useEffect(() => {
    setShootingStars(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <section
      className="relative h-screen overflow-hidden bg-[url('/hero.png')] bg-cover bg-center"
    >
      < Header />
      {/* Overlay para melhorar o contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-6xl font-semibold">
          <TextAnimate
            animation="fadeIn"
            duration={0.5}
            delay={0.2}
            startOnView={true}
          >
            CODE JF
          </TextAnimate>
        </h1>

        <p className="mt-4 text-2xl font-medium">
          <TextAnimate
            animation="scaleUp"
            duration={2}
            delay={0.5}
            startOnView={true}
          >
            Desenvolvedor Front-end | React | Next.js | UI/UX
          </TextAnimate>
        </p>
      </div>
    </section>
  );
};

export default Hero;
