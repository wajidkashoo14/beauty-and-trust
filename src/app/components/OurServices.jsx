import React from "react";
import OurServicesCard from "./OurServicesCard";
import { GiSettingsKnobs, GiTripleScratches  } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { LiaHotelSolid } from "react-icons/lia";
import { IoWallet } from "react-icons/io5";

export default function OurServices() {
  return (
    <div class="px-20 min-h-screen text-center max-[600px]:px-4 max-[600px]:mt-44">
      <h1 class="text-4xl font-bold mt-12 mb-20">Our Services</h1>
      <div class="flex justify-around items-center flex-wrap gap-4 max-[600px]:block">
        <OurServicesCard
          icon={<GiSettingsKnobs />}
          heading="Personalized Matching"
          description="We offer a wide variety of personally picked tours with destinations all over the globe."
        />
        <OurServicesCard
          icon={<GiTripleScratches />}
          heading="Wide Variety of Tours"
          description="Our unique matching system lets you find just the tour you want for your next holiday."
        />
        <OurServicesCard
          icon={<FaRegStar />}
          heading="
          Highly Qualified Service"
          description="Our tour managers are qualified, skilled, and friendly to bring you the best service."
        />
        <OurServicesCard
          icon={<BiSupport />}
          heading="24/7 Support"
          description="You can always get professional support from our staff 24/7 and ask any question you have."
        />
        <OurServicesCard
          icon={<LiaHotelSolid/>}
          heading="Handpicked Hotels"
          description="Our team offers only the best selection of affordable and luxury hotels to our clients."
        />
        <OurServicesCard
          icon={<IoWallet />}
          heading="Best Price Guarantee"
          description="If you find tours that are cheaper than ours, we will compensate the difference."
        />
      </div>
    </div>
  );
}
