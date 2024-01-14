import React from "react";
import Image from "next/image";
import coverImage from "../../../public/contactcover.jpg";
import formImage from "../../../public/aboutus.jpg";

export default function page() {
  return (
    <div>
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
        Contact Us
      </h1>
      <div class="w-full h-screen bg-slate-300 flex justify-center items-center">
        <div class="flex shadow-xl h-4/5 w-8/12">
          <Image
            src={formImage}
            sizes="100vw"
            alt="cover-image"
            loading="lazy"
            style={{
              width: "350px",
              height: "100%",
              backgroundSize: "cover",
            }}
          />
          <div class="flex flex-col bg-slate-50 p-3 w-full">
            <h2 class="mb-6 font-medium text-xl">GET IN TOUCH</h2>
            <form class="flex flex-col gap-4">
              <input
                placeholder="Your Name"
                class="px-2 py-4 border-solid border-2 border-[#F4F4F4] focus:outline-none"
              />
              <input
                placeholder="Email"
                class="px-2 py-4 border-solid border-2 border-[#F4F4F4] focus:outline-none"
              />
              <input
                placeholder="Phone"
                class="px-2 py-4 border-solid border-2 border-[#F4F4F4] focus:outline-none"
              />
              <textarea
                placeholder="Message"
                class="px-2 py-4 border-solid border-2 h-44 border-[#F4F4F4] focus:outline-none"
              ></textarea>
            </form>
            <button class="bg-[#01B3A7] px-10 py-4 mt-6 text-white text-md hover:bg-[#018078] ease-linear duration-200">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
