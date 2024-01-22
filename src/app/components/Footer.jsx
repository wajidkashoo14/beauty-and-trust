import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaMobile } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer class="bg-[#06283D] dark:bg-gray-900 min-h-80 flex justify-evenly items-center max-[600px]:block max-[600px]:p-4">
          <div>
            <h2 class="text-lg font-medium mb-5 text-white">Who we are?</h2>
            <p class="text-sm text-left text-gray-400 w-56 max-[600px]:w-full max-[600px]:mb-5">
              Beauty and Trust Tour and Travels in Kashmir offers an enchanting
              exploration, embracing the serene landscapes of Sonmarg and
              Pahalgam. Traverse through the captivating meadows of Pahalgam,
              where the Lidder River gracefully flows, and experience the
              ethereal beauty of Betaab Valley.
            </p>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Help center
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Twitter
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61550517676262&mibextid=ZbWKwL"
                  class="hover:underline"
                >
                  Facebook
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  href="https://www.instagram.com/beautyandtrusttours?igsh=MThmM3BtbWQzMXAxbw=="
                  class="hover:underline"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Quick Links
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <Link href="/#tours" class="hover:underline">
                  Tours
                </Link>
              </li>
              <li class="mb-4">
                <Link href="/#hotels" class="hover:underline">
                  Hotels
                </Link>
              </li>
              <li class="mb-4">
                <Link href="/aboutus" class="hover:underline">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Contact
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <Link
                  href="#"
                  class="hover:underline flex justify-start items-center gap-2"
                >
                  <IoMdMail /> beautyandtrusttours@gmail.com
                </Link>
              </li>
              <li class="mb-4">
                <Link
                  href="#"
                  class="hover:underline flex justify-start items-center gap-2"
                >
                  <FaMobile />
                  +91 7889904477
                </Link>
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline flex justify-start items-center gap-2"
                >
                  <FaMobile />
                  +91 7051695835
                </a>
              </li>
            </ul>
          </div>
       
    </footer>
  );
}
