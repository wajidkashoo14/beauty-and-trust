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
    <div class="min-h-screen flex flex-wrap justify-center items-center gap-10 mb-24">
      <h1 class="text-3xl my-12 font-semibold">{`Hotels in ${
        stay.charAt(0).toUpperCase() + stay.slice(1)
      }`}</h1>
      {destination?.hotels && destination.hotels.length ? destination?.hotels.map((hotel) => (
        <div class="w-1/3 flex justify-items-start items-start gap-6 text-left border-solid border-2 border-[#F4F4F4] relative cursor-pointer shadow-xl">
          <Image
            src={hotel?.image}
            sizes="100vw"
            width={300}
            height={200}
            alt="dallake Image"
            loading="lazy"
            style={{
              width: "300px",
              height: "200px",
            }}
          />
          <div class="p-4 flex flex-col gap-10">
            <h2 class="text-3xl">{hotel?.hotelName}</h2>
            <p class="text-left text-thin leading-7">
              {hotel.description}
            </p>
            <span class="flex items-center gap-5"><FaLocationDot />{hotel?.location}</span>
            <span className={styles.star}>
              {Array.from({ length: hotel.stars }, (_, i) => (
                <FaStar key={i} />
              ))}
            </span>
          </div>
        </div>
      )) : null }
    </div>
  );
}

export default page;
