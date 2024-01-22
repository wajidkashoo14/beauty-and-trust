import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/about.jpg";
import { useRouter } from "next/navigation";

export default function Aboutus() {
  const router = useRouter()
  return (
    <div class="flex justify-around items-center h-screen max-[600px]:block max-[600px]: max-[600px]:text-left max-[600px]:p-1">
      <Image
        src={AboutImage}
        alt="kashmir-pic"
        width={500}
        height={400}
        loading="lazy"
        className="max-[600px]:w-full"
      />
      <div class="w-1/2 flex flex-col gap-10 max-[600px]:w-full max-[600px]:block max-[600px]:p-4 lg:gap-2 lg:p-2">
        <h1 class="text-3xl font-bold max-[600px]:text-2xl max-[600px]:my-4">About Us</h1>
        <p class="text-lg leading-7 font-light max-[600px]:text-sm max-[600px]:leading-6 lg:leading-6 ">
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
        <div class="flex justify-start gap-10 max-[600px]:mt-5">
          <button class="bg-[#01B3A7] px-10 py-4 text-white text-md hover:bg-[#018078] ease-linear duration-200 max-[600px]:px-3 max-[600px]:py-2 max-[600px]:text-sm" onClick={() => router.push('/contact')}>Get in Touch</button>
          <button class="px-10 py-4 bg-transparent text-black border-solid border-2 border-black text-md ease-linear duration-200 hover:shadow-2xl scale-115 max-[600px]:px-3 max-[600px]:py-2 max-[600px]:text-sm  "onClick={() => router.push('/aboutus')}>Read More</button>
        </div>
      </div>
    </div>
  );
}
