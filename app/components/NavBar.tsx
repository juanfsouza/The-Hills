"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true); // Estado para verificar se está no topo

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Rolando para baixo, esconder navbar
        setShowNavbar(false);
      } else {
        // Rolando para cima, mostrar navbar
        setShowNavbar(true);
      }

      // Se está no topo da página, define como verdadeiro
      setIsAtTop(currentScrollY === 0);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "bg-transparent" : "bg-zinc-950/20"}`}
    >
      <div className="container mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-white">JuanFS</h1>
        <nav>
          <ul className="flex space-x-10">
            <li className="group relative">
              <Link href="/" className="text-slate-300 hover:text-white">
                Inicio
              </Link>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link href="/about" className="text-slate-300 hover:text-white">
                Sobre
              </Link>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link href="/services" className="text-slate-300 hover:text-white">
                Serviços
              </Link>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link href="/contact" className="text-slate-300 hover:text-white">
                Contato
              </Link>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>
        <button className="btn-68">Fale Conosco</button>
      </div>
    </header>
  );
}
