"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function TransportCard({ image, title, description, numberOfPassengers }) {
  const router = useRouter()
  return (
    <div class="w-80 text-left border-solid border-2 border-[#F4F4F4] cursor-pointer shadow-xl transition-all ease-linear duration-200 hover:-translate-y-3 max-[600px]:w-full max-[600px]:mb-5 lg:mb-5">
      <Image
        src={image}
        sizes="100vw"
        width={320}
        height={230}
        alt="Vechile Image"
        loading="lazy"
        style={{
          width: "320px",
          height: "200px",
        }}
      />
      <div class="p-4">
        <h2 class="text-xl mb-5 font-medium">{title}</h2>
        <span class="text-left text-thin mb-5 leading-7 font-normal">{numberOfPassengers}</span>
        <p class="text-left text-thin mb-5 leading-7 font-light">
          {description}
        </p>
        <button class="bg-[#01B3A7] px-6 py-2 text-white text-md hover:bg-[#018078] ease-linear duration-200" onClick={() => router.push('/contact')}>
          More Info
        </button>
      </div>
    </div>
  );
}
