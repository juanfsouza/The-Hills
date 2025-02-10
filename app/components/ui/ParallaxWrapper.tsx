"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";

export default function ParallaxWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("ParallaxProvider mounted!");
  }, []);

  return <ParallaxProvider>{children}</ParallaxProvider>;
}
