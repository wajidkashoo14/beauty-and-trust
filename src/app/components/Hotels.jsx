import React from "react";
import hotels from "./Data/hotelsData";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Hotels() {
  const router = useRouter();
  const data = hotels.slice(0, 4);

  return (
    <div id="hotels" class="h-screen text-center mt-32">
      <h1 class="text-4xl text-bold mb-20">Discover Your Perfect Stay</h1>
      <div class="flex items-center justify-center gap-3">
        {data.map((hotel) => (
          <article
            key={hotel?.id}
            class=" overflow-hidden w-80 flex flex-col gap-6 cursor-pointer "
          >
            <Image
              src={hotel.image}
              width={320}
              height={300}
              alt="hotel-image"
              loading="lazy"
              class="shadow-lg rounded-lg ease-linear duration-200 hover:shadow-2xl"
              onClick={() => router.push(`/hotels/${hotel?.location}`)}
            />
            <span class="font-medium">{hotel?.location.toUpperCase()}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
