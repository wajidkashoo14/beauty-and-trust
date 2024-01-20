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
    <div class="min-h-screen mb-24 w-full mt-22 z-10">
      <h1 class="text-3xl mt-32 font-semibold text-center">{`Hotels in ${
        stay.charAt(0).toUpperCase() + stay.slice(1)
      }`}</h1>
      <div class="flex flex-wrap justify-evenly items-center gap-8 mt-24">
      {destination.hotels && destination.hotels.length ? destination.hotels.map((hotel) => (
        <div class="w-2/5 flex items-starts text-left shadow-xl rounded-md overflow-hidden cursor-pointer ease-linear duration-200 hover:-translate-y-3">
          <Image
            src={hotel?.image}
            sizes="100vw"
            width={300}
            height={220}
            alt="dallake Image"
            loading="lazy"
            style={{
              width: "300px",
              height: "220px",
            }}
          />
          <div class="p-4 flex flex-col gap-4">
            <h2 class="text-3xl">{hotel?.hotelName}</h2>
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
