import React from "react";
import ToursData from "./Data/tourCardData";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Tours() {
  const router = useRouter()
  const tour = ToursData.slice(0, 4);
 
  return (
    <div class="text-center">
      <h1 class="text-4xl text-bold mb-20">Hot Tours</h1>
      <div class="flex justify-center gap-10">
      {tour.map((item) => (
        <div class="w-72 text-left border-solid border-2 border-[#F4F4F4] cursor-pointer shadow-xl transition-all ease-linear duration-200 hover:-translate-y-3"
        onClick={() => router.push('/tour/gulmarg')}
        >
          <Image
            src={item?.image}
            sizes="100vw"
            width={300}
            height={230}
            alt="dallake Image"
            loading="lazy"
            style={{
                width: '300px',
                height: '200px',
              }}
          />
          <div class="p-4">
            <h2 class="text-xl mb-5">{item?.title}</h2>
            <p class="text-left text-thin mb-5 leading-7">{item.description}</p>
            <button class="bg-[#01B3A7] px-6 py-2 text-white text-md hover:bg-[#018078] ease-linear duration-200">Read More</button>
          </div>
        </div>
      ))}
      </div>
      <button class="text-[#01B3A7] mt-16 text-xl">Load more...</button>
    </div>
  );
}
