"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Projects";

export default function Home() {
  return (
    <ParallaxProvider>
      <Hero />
      <About />
      <Project />
      <Footer />
    </ParallaxProvider>
  );
}
