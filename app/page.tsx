import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
