"use client";

import { TextReveal } from "@/app/components/ui/TextReveal";

const About = () => {
  return (
    <section className="flex mt-32 items-center justify-center h-screen text-white">
      <div className="flex justify-between max-w-7xl w-full px-8">
        {/* Bloco esquerdo - Quem sou eu */}
        <div className="w-1/2 flex items-center justify-center">
          <TextReveal text="Quem Sou Eu" className="text-8xl font-bold text-white text-center" />
        </div>
        {/* Bloco direito - História */}
        
        <div className="w-1/2 pl-8">
          <TextReveal
            text="Sou um desenvolvedor apaixonado por criar interfaces interativas e responsivas. Tenho experiência com React, Next.js e design UI/UX. Minha jornada começou há alguns anos quando decidi mudar minha carreira para o mundo da tecnologia. Desde então, estou focado em aprender e compartilhar conhecimento, sempre buscando melhorar a experiência do usuário."
            className="text-sm text-gray-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
