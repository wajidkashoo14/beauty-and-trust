import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <nav class=" border-gray-200 bg-[#024F74] w-full poppins">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-6">
        <Link href="/" class="text-white font-semibold text-xl flex justify-center items-center gap-2">
          <Image src='/logo.jpg' alt="logo" loading="lazy" width={60} height={60} class="rounded-full" />
          Beauty and Trust</Link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white bg-[#25D366]  font-medium text-sm px-6 py-3 text-center flex items-center justify-center gap-1"
          >
            <FaWhatsapp color="#fff" fontSize={20} /> Whatsapp
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 poppins"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-[#024F74] border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 poppins">
            <li>
              <Link
                href="/"
                class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 poppins"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#tours"
                class="block py-2 px-3 md:p-0 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Tour
              </Link>
            </li>
            <li>
              <Link
                href="#hotels"
                class="block py-2 px-3 md:p-0 text-white md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                class="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
