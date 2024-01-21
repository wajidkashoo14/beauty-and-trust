import React from "react";
import Image from "next/image";
import coverImage from "../../../public/contactcover.jpg";
import { IoLocationOutline, IoLogoInstagram } from "react-icons/io5";
import { CiMobile3, CiMail, CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import Link from "next/link";

export default function page() {
  return (
    <div class="mt-32">
      <h1 className="-mt-20 text-5xl text-black text-center font-medium">
        Contact Us
      </h1>
      <div class="w-full h-screen flex justify-center items-center">
        <div class="flex shadow-xl h-4/5 w-8/12">
          <div class="flex flex-col bg-slate-100 p-6 w-8/12">
            <h2 class="mb-6 font-medium text-xl">GET IN TOUCH</h2>
            <form class="flex flex-col gap-4">
              <input
                placeholder="Your Name"
                required
                class="px-2 py-4 border-solid border-2 border-[#F4F4F4] focus:outline-none"
              />
              <input
                placeholder="Email"
                required
                class="px-2 py-4 border-solid border-2 border-[#F4F4F4] focus:outline-none"
              />
              <input
                placeholder="Phone"
                required
                class="px-2 py-4 border-solid border-2 border-[#F4F4F4] focus:outline-none"
              />
              <textarea
                placeholder="Message"
                required
                class="px-2 py-4 border-solid border-2 h-44 border-[#F4F4F4] focus:outline-none"
              ></textarea>
            </form>
            <button class="bg-[#01B3A7] px-10 py-4 mt-4 text-white text-md hover:bg-[#018078] ease-linear duration-200">
              Send
            </button>
          </div>
          <div class="flex flex-col justify-start items-start gap-12 bg-[#01B3A7] text-white p-6">
            <h2 class="text-3xl font-medium">Contact Information</h2>
            <span class="flex justify-center items-center gap-2 text-lg">
              <IoLocationOutline size={25} />
              <text>
                Mir behri dal srinagar, Srinagar, Jammu and Kashmir 190003
              </text>{" "}
            </span>
            <span class="flex justify-center items-center gap-2 text-lg">
              <CiMobile3 size={25} />
              <text>+91 7051695835</text>
            </span>
            <span class="flex justify-center items-center gap-2 text-lg">
              <CiMail size={25} /> <text>beautyandtrusttours@gmail.com</text>
            </span>
            <h2 class="text-2xl font-medium">Follow Us</h2>
            <div class="flex items-start justify-start gap-5 -mt-5 cursor-pointer">
              <Link href="https://www.facebook.com/profile.php?id=61550517676262&mibextid=ZbWKwL">
                <SlSocialFacebook size={30} />
              </Link>
              <Link href="https://www.instagram.com/beautyandtrusttours?igsh=MThmM3BtbWQzMXAxbw==">
                <IoLogoInstagram size={30} />
              </Link>
              <Link href="#">
                <CiTwitter size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
