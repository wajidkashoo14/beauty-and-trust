import React from "react";
import hotels from "./Data/hotelsData";
import Image from "next/image";

export default function Hotels() {
  const data = hotels.slice(0, 3);

  return (
    <div class="h-screen text-center mt-20">
      <h1 class="text-4xl text-bold mb-20">Discover Your Perfect Stay</h1>
      <div class="flex justify-evenly items-center">
        {data.map((hotel) => (
          <article
            key={hotel?.id}
            class=" pb-4 w-80 flex flex-col gap-5 border-solid border-2 border-[#F4F4F4] shadow-lg cursor-pointer ease-linear duration-200 hover:shadow-2xl "
          >
            <Image
              src={hotel.Image}
              width={320}
              height={300}
              alt="hotel-image"
              loading="lazy"
            />
            <div class="flex flex-col gap-5 px-4 text-left">
              <h3 class="font-semibold text-xl">{hotel?.hotelName}</h3>
              <p>{hotel?.description}</p>
              <button class="bg-[#01B3A7] px-6 py-2 text-white text-md hover:bg-[#018078] ease-linear duration-200 w-32">
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>
      <button class="text-[#01B3A7] mt-16 text-xl">Load more...</button>
    </div>
  );
}
