"use client";

import { useRef } from "react";
import { TextReveal } from "@/app/components/ui/TextReveal";

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <section id="about" className="relative flex flex-col items-center mt-32 text-white">
      {/* 🔥 Canvas para os balões (somente no About) */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />

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
    </section>
  );
};

export default About;
