import React from "react";
import ToursData from "./Data/tourCardData";
import Image from "next/image";
import styles from '../styles/style.module.css'

export default function Tours() {
  const tour = ToursData.slice(0, 2);
 
  return (
    <div class="flex flex-col justify-around text-center">
      <h1 class="text-4xl text-bold mb-20">Hot tours</h1>
      <div class="flex justify-center items-center flex-col gap-14">
      {tour.map((item) => (
        <div class="w-3/4 flex justify-items-start items-start gap-14 text-left border-solid border-2 border-[#F4F4F4] relative cursor-pointer">
          <Image
            src={item?.image}
            sizes="100vw"
            width={500}
            height={300}
            alt="dallake Image"
            loading="lazy"
            style={{
                width: '600px',
                height: '300px',
              }}
          />
          <div class="p-6">
            <h2 class="text-3xl mb-8">{item?.title}</h2>
            <p class="text-left text-thin mb-8 leading-7">{item.description}</p>
            <button class="bg-[#01B3A7] px-10 py-4 text-white text-md hover:bg-[#018078] ease-linear duration-200">Read More</button>
            <div className={styles.container}><span className={styles.price}>&#8377; {item?.price}</span></div>
          </div>
        </div>
      ))}
      </div>
      <button class="text-[#01B3A7] mt-16 text-xl">Load more...</button>
    </div>
  );
}
