import React from "react";
import ToursData from "./Data/tourCardData";
import Image from "next/image";
import styles from '../styles/style.module.css'

export default function Tours() {
  const tour = ToursData.slice(0, 4);
 
  return (
    <div class="text-center">
      <h1 class="text-4xl text-bold mb-20">Hot tours</h1>
      <div class="flex justify-center gap-10">
      {tour.map((item) => (
        <div class="w-72 text-left border-solid border-2 border-[#F4F4F4] cursor-pointer">
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
          <div class="p-6">
            <h2 class="text-3xl mb-8">{item?.title}</h2>
            <p class="text-left text-thin mb-8 leading-7">{item.description}</p>
            <button class="bg-[#01B3A7] px-10 py-4 text-white text-md hover:bg-[#018078] ease-linear duration-200">Read More</button>
          </div>
        </div>
      ))}
      </div>
      <button class="text-[#01B3A7] mt-16 text-xl">Load more...</button>
    </div>
  );
}
