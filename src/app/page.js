"use client";
import Aboutus from "./components/Aboutus";
import DisplayCards from "./components/DisplayCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import OurServicesCard from "./components/OurServicesCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DisplayCards />
      <Aboutus />
      <OurServices />
    </main>
  );
}
