import Image from "next/image";
import React from "react";
import coverImage from "../../../public/aboutuscover.jpg";

export default function page() {
  return (
    <div className="mb-10">
      <Image
        src={coverImage}
        sizes="100vw"
        alt="cover-image"
        loading="lazy"
        style={{
          width: "100%",
          height: "400px",
          backgroundSize: "cover",
        }}
      />
      <h1 className="-mt-20 text-5xl text-black text-center font-semibold">
        About us
      </h1>
      <div className="px-56 mt-20 text-center font-light text-xl max-[600px]:p-4 max-[600px]:text-lg">
        <h1 className="text-xl font-semibold my-6">Welcome to Beauty and Trust Tour and Travels</h1>
        <p>
          At Beauty and Trust Tour and Travels, we believe that every journey is
          an opportunity to discover beauty and build trust. With a commitment
          to providing exceptional travel experiences, we embark on a mission to
          curate unforgettable adventures that leave a lasting impact on our
          clients.
        </p>
        <h3 className="text-xl font-semibold my-6">Who We Are</h3>
        <p>
          Beauty and Trust Tour and Travels is not just a travel company; it's a
          testament to the fusion of elegance and reliability. Established with
          a passion for exploration and a dedication to customer satisfaction,
          our company has grown into a leading name in the travel industry.
        </p>
        <h3 className="text-xl font-semibold my-6">Our Values</h3>
        <ul>
          <li>
            <h3 className="font-medium text-lg my-2">Customer-Centric Approach:</h3>
            <p>
              Your satisfaction is our priority. We strive to exceed your
              expectations by tailoring our services to meet your unique travel
              preferences.
            </p>
          </li>
          <li>
            <h3 className="font-medium text-lg my-2">Integrity: </h3>
            <p>
              Trust is the foundation of our business. We operate with
              transparency, honesty, and integrity in all our dealings.
            </p>
          </li>
          <li>
            <h3 className="font-medium text-lg my-2">Excellence in Service:</h3>
            <p>
              From the moment you envision your trip to the day you return, our
              team is committed to delivering excellence in every aspect of your
              journey.
            </p>
          </li>
        </ul>
        <h3 className="text-xl font-semibold my-6">Destinations</h3>
        <p>
          Explore the world with Beauty and Trust Tour and Travels. Whether you
          dream of basking in the sun on a tropical beach, trekking through
          majestic mountains, or immersing yourself in vibrant cultures, our
          diverse range of destinations ensures there's something for every
          traveler.
        </p>
        <h3 className="text-xl font-semibold my-6">Tour Packages</h3>
        <p>
          Our thoughtfully crafted tour packages cater to various interests and
          preferences. Each package is designed to provide a seamless blend of
          adventure, relaxation, and cultural exploration. From group tours to
          personalized itineraries, we offer flexibility to match your travel
          style.
        </p>

        <h3 className="text-xl font-semibold my-6">Why Choose Us?</h3>
        <ul>
          <li>
            <h3 className="font-medium text-lg my-2">Experienced Guides:</h3>
            <p>
              Our knowledgeable and friendly guides accompany you on your
              journey, adding depth and insight to your travel experience.
            </p>
          </li>
          <li>
            <h3 className="font-medium text-lg my-2">Customer Support:</h3>
            <p>
              Our dedicated customer support team is available to assist you at
              every stage of your trip, ensuring a stress-free and enjoyable
              vacation.
            </p>
          </li>
          <li>
            <h3 className="font-medium text-lg my-2">Quality Accommodations:</h3>
            <p>
              We partner with top-notch hotels and accommodations to ensure your
              stay is comfortable and memorable.
            </p>
          </li>
        </ul>
        <h3 className="text-xl font-semibold my-6">Get in Touch</h3>
        <p>
          Ready to embark on your next adventure? Contact us today to start
          planning your journey with Beauty and Trust Tour and Travels. Our team
          looks forward to crafting a travel experience that combines beauty,
          trust, and unforgettable moments.
        </p>
      </div>
    </div>
  );
}
