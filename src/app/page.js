"use client";
import Aboutus from "./components/Aboutus";
import DisplayCards from "./components/DisplayCards";
import Hero from "./components/Hero";
import Hotels from "./components/Hotels";
import OurServices from "./components/OurServices";
import Tours from "./components/Tours";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <DisplayCards /> */}
      <Aboutus />
      <OurServices />
      <Tours />
      <Hotels />
    </main>
  );
}
