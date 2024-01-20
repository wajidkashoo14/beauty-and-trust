import React from "react";
import ToursData from "./Data/tourCardData";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Tours() {
  const router = useRouter()
  const tour = ToursData.slice(0, 4);
 
  return (
    <div class="text-center" id="tours">
      <h1 class="text-4xl text-bold mb-20">Hot Tours</h1>
      <div class="flex justify-evenly gap-10">
      {tour.map((item) => (
        <div class="w-80 text-left border-solid border-2 border-[#F4F4F4] cursor-pointer shadow-xl transition-all ease-linear duration-200 hover:-translate-y-3"
        onClick={() => router.push(`/tour/${item?.tourHeading}`)}
        >
          <Image
            src={item?.image}
            sizes="100vw"
            width={320}
            height={230}
            alt="dallake Image"
            loading="lazy"
            style={{
                width: '320px',
                height: '200px',
              }}
          />
          <div class="p-4">
            <h2 class="text-xl mb-5 font-medium">{item?.title}</h2>
            <p class="text-left text-thin mb-5 leading-7 font-light">{item.description}</p>
            <button class="bg-[#01B3A7] px-6 py-2 text-white text-md hover:bg-[#018078] ease-linear duration-200">Read More</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
