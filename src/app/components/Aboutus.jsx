import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/about.jpg";
import { useRouter } from "next/navigation";

export default function Aboutus() {
  const router = useRouter()
  return (
    <div class="flex justify-around items-center h-screen">
      <Image
        src={AboutImage}
        alt="kashmir-pic"
        width={500}
        height={400}
        loading="lazy"
      />
      <div class="w-1/2 flex flex-col gap-10">
        <h1 class="text-3xl">About Us</h1>
        <p class="text-lg leading-7 font-light">
          Beauty and Trust Tour and Travels in Kashmir offers an enchanting
          exploration, embracing the serene landscapes of Sonmarg and Pahalgam.
          Traverse through the captivating meadows of Pahalgam, where the Lidder
          River gracefully flows, and experience the ethereal beauty of Betaab
          Valley. Discover the pristine allure of Sonmarg, adorned with
          meandering rivers and snow-draped peaks. Our trusted services ensure a
          seamless journey, highlighting the iconic Dal Lake, historic Mughal
          Gardens, and the mesmerizing landscapes of Gulmarg. Immerse yourself
          in the rich cultural tapestry of Kashmir with our carefully curated
          tours, where every moment is a blend of natural splendor and genuine
          hospitality.
        </p>
        <div class="flex justify-start gap-10">
          <button class="bg-[#01B3A7] px-10 py-4 text-white text-md hover:bg-[#018078] ease-linear duration-200" onClick={() => router.push('/contact')}>Get in Touch</button>
          <button class="px-10 py-4 bg-transparent text-black border-solid border-2 border-black text-md ease-linear duration-200 hover:shadow-2xl scale-115"onClick={() => router.push('/aboutus')}>Read More</button>
        </div>
      </div>
    </div>
  );
}
