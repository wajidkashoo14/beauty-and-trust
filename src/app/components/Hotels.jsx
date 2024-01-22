import React from "react";
import hotels from "./Data/hotelsData";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Hotels() {
  const router = useRouter();
  const data = hotels.slice(0, 4);

  return (
    <div id="hotels" class="h-auto text-center my-32 max-[600px]:my-20">
      <h1 class="text-4xl font-bold mb-20 max-[600px]:text-2xl">Discover Your Perfect Stay</h1>
      <div class="flex items-center justify-center gap-3 max-[600px]:block max-[600px]:p-4 lg:p-4">
        {data.map((hotel) => (
          <article
            key={hotel?.id}
            class=" overflow-hidden w-80 flex flex-col gap-6 cursor-pointer max-[600px]:w-full
            max-[600px]:gap-3 max-[600px]:mb-7"
          >
            <Image
              src={hotel.image}
              width={320}
              height={300}
              alt="hotel-image"
              loading="lazy"
              class="shadow-lg rounded-lg ease-linear duration-200 hover:shadow-2xl max-[600px]:w-full"
              onClick={() => router.push(`/hotels/${hotel?.location}`)}
            />
            <span class="font-medium">{hotel?.location.toUpperCase()}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
