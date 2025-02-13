"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import "./globals.css";


export default function Home() {  
  return (
    <ParallaxProvider>
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </ParallaxProvider>
  );
}
