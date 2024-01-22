"use client";
import React from "react";
import data from "../../components/Data/hotelsData";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import styles from "../../styles/style.module.css";

function page() {
  const {location: stay }= useParams()

  const destination = data.filter((hotel) => hotel.location === stay)[0];
  

  return (
    <div class="min-h-screen mb-24 w-full mt-36 z-10">
      <h1 class="text-3xl mt-32 font-semibold text-center">{`Hotels in ${
        stay.charAt(0).toUpperCase() + stay.slice(1)
      }`}</h1>
      <div class="flex flex-wrap justify-evenly items-center gap-8 mt-24 max-[600px]:block max-[600px]:p-4 max-[600px]:mt-16">
      {destination.hotels && destination.hotels.length ? destination.hotels.map((hotel) => (
        <div class="w-2/5 flex items-starts text-left shadow-xl rounded-md overflow-hidden cursor-pointer ease-linear duration-200 hover:-translate-y-3 max-[600px]:w-full max-[600px]:block max-[600px]:mb-5 lg:block">
          <Image
            src={hotel?.image}
            sizes="100vw"
            width={300}
            height={220}
            alt="dallake Image"
            loading="lazy"
            class="w-80 h-52 max-[600px]:w-full lg:w-full"
          />
          <div class="p-4 flex flex-col gap-4 max-[600px]:gap-2">
            <h2 class="text-3xl ml-4 max-[600px]:text-2xl lg:text-2xl">{hotel?.hotelName}</h2>
            <p class="text-left text-thin leading-7">
              {hotel.description}
            </p>
            <span class="flex items-center gap-2"><FaLocationDot size={25} color="#01B3A7" />{hotel?.location}</span>
            <span className={styles.star}>
              {Array.from({ length: hotel.stars }, (_, i) => (
                <FaStar key={i} />
              ))}
            </span>
          </div>
        </div>
      )) : null }
      </div>
    </div>
  );
}

export default page;
