import React from "react";
import Image from "next/image";
import coverImage from "../../../public/contactcover.jpg";
import { IoLocationOutline, IoLogoInstagram } from "react-icons/io5";
import { CiMobile3, CiMail, CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function page() {
  return (
    <div class="mt-32 max-[600px]:mt-52">
      <h1 className="-mt-20 text-5xl text-black text-center font-medium max-[600px]:mb-5">
        Contact Us
      </h1>
      <div class="w-full min-h-screen flex justify-center items-center max-[600px]:block max-[600px]:p-4 ">
        <div class="flex shadow-xl h-4/5 w-8/12 max-[600px]:block max-[600px]:w-full">
          <div class="flex flex-col bg-slate-100 w-8/12 max-[600px]:w-full max-[600px]:hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6606.722338666987!2d74.8499822941844!3d34.11150239253855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185ebca868b8b%3A0x9a3f16d64da76a40!2sMir%20Behri%2C%20Srinagar%20190001!5e0!3m2!1sen!2suk!4v1705851162094!5m2!1sen!2suk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          style={{width:"100%", height:"100%"}}
          ></iframe>
          </div>
          <div class="flex flex-col justify-start items-start gap-12 bg-[#01B3A7] text-white p-6 m max-[600px]:gap-8">
            <h2 class="text-3xl font-medium">Contact Information</h2>
            <span class="flex justify-center items-center gap-2 text-lg">
              <IoLocationOutline size={25} />
              <text>
                Saida Kadal, Ranger Stop, Srinagar, Jammu and Kashmir 190003
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
            <div class="flex items-start justify-start gap-5 -mt-5 cursor-pointer max-[600px]:-mt-2">
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
            <div className="flex justify-start items-center gap-3 -mt-4 max-[600px]:block max-[600px]:-mt-2">
              <h2 className="text-2xl font-normal max-[600px]:mb-5">For Immediate Queries</h2>
              <Link
                href="https://wa.me/917051695835"
                type="button"
                class="text-white bg-[#25D366]  font-medium text-sm px-6 py-3 text-center flex items-center justify-center gap-1"
              >
                <FaWhatsapp color="#fff" fontSize={20} /> WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
