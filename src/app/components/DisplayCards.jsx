import Image from "next/image";

export default function DisplayCards() {
  return (
    <div class="w-screen flex justify-evenly items-center -mt-16 overflow-hidden">
      <div class="shadow-2xl relative">
        <Image
          src="/display3.jpg"
          height={600}
          width={400}
          alt="tour-img"
          loading="lazy"
        />
        <h3 class="absolute m-auto top-5 left-0 bottom-0 right-0 text-white text-3xl text-semibold text-center">
          River Rafting
        </h3>
      </div>
      <div class="shadow-2xl relative">
        <Image
          src="/display2.jpg"
          height={600}
          width={400}
          alt="tour-img"
          loading="lazy"
        />{" "}
        <h3 class="absolute m-auto top-5 left-0 bottom-0 right-0 text-white text-3xl text-semibold text-center">
          Shikara Ride
        </h3>
      </div>
      <div class="shadow-2xl relative">
        <Image
          src="/display1.jpg"
          height={600}
          width={400}
          alt="tour-img"
          loading="lazy"
        />
        <h3 class="absolute m-auto top-5 left-0 bottom-0 right-0 text-white text-3xl text-semibold text-center">
          Paragliding
        </h3>
      </div>
    </div>
  );
}
