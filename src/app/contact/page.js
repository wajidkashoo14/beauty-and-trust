import React from "react";
import Image from "next/image";
import coverImage from "../../../public/contactcover.jpg";
import { IoLocationOutline, IoLogoInstagram  } from "react-icons/io5";
import { CiMobile3, CiMail,CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";








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
         
          <div class="flex flex-col bg-slate-50 p-3 w-8/12">
            <h2 class="mb-6 font-medium text-xl">GET IN TOUCH</h2>
            <form class="flex flex-col gap-4">
              <input
                placeholder="Your Name" required
                class="px-2 py-4 border-solid border-2 border-[#F4F4F4] focus:outline-none"
              />
              <input
                placeholder="Email" required
                class="px-2 py-4 border-solid border-2 border-[#F4F4F4] focus:outline-none"
              />
              <input
                placeholder="Phone" required
                class="px-2 py-4 border-solid border-2 border-[#F4F4F4] focus:outline-none"
              />
              <textarea
                placeholder="Message" required
                class="px-2 py-4 border-solid border-2 h-44 border-[#F4F4F4] focus:outline-none"
              ></textarea>
            </form>
            <button class="bg-[#01B3A7] px-10 py-4 mt-6 text-white text-md hover:bg-[#018078] ease-linear duration-200">
              Send
            </button>
          </div>
          <div class="flex flex-col justify-start items-start gap-12 bg-[#01B3A7] text-white p-6">
            <h2 class="text-3xl font-medium">Contact Information</h2>
            <span class="flex justify-center items-center gap-2 text-lg"><IoLocationOutline size={25}/><text>Mir behri dal srinagar, Srinagar, Jammu and Kashmir 190003</text>  </span>
            <span class="flex justify-center items-center gap-2 text-lg"><CiMobile3 size={25}/><text>+91 7051695835</text></span>
            <span class="flex justify-center items-center gap-2 text-lg"><CiMail size={25} /> <text>beautyandtrusttours@gmail.com</text></span>
            <h2 class="text-2xl font-medium">Follow Us</h2>
            <div class="flex items-start justify-start gap-5 -mt-5 cursor-pointer">
              <SlSocialFacebook size={30} />
              <IoLogoInstagram size={30} />
              <CiTwitter size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
