import React from "react";
import TransportCard from "../components/TransportCard";

export default function page() {
  return (
    <div class="min-h-full mb-16 z-10 max-[600px]:mt-22">
      <h1 class="text-3xl mt-32 text-center font-medium max-[600px]:mt-36">Our Vehicles</h1>
      <div class="flex justify-evenly items-center flex-wrap mt-10 max-[600px]:block max-[600px]:p-4">
        <TransportCard
          image="/etios.jpg"
          title="Etios"
          numberOfPassengers ="2 Passengers Max"
          description="Your ideal travel companion for tourists. Combining comfort and reliability, it ensures a memorable journey for every traveler."
        />
        <TransportCard
          image="/dzire.webp"
          title="Swift Dzire"
          numberOfPassengers ="2 Passengers Max"
          description="Elevate your travel experience for tourists. Stylish, fuel-efficient, and compact, it offers seamless journeys with comfort and convenience."
        />
        <TransportCard
          image="/innova.jpg"
          title="Innova"
          numberOfPassengers ="4 Passengers Max"
          description="The ultimate travel choice for tourists. Spacious, versatile, and reliable, it promises a memorable journey with comfort and unmatched convenience."
        />
        <TransportCard
          image="/tempo.jpg"
          title="Tempo Traveller"
          numberOfPassengers ="10 Passengers Max"
          description="Tailored for tourists, providing group adventures with spacious comfort. Versatile and reliable, it's ideal for memorable journeys."
        />
      </div>
    </div>
  );
}
