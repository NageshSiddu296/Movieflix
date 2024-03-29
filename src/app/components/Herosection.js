import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <main className="h-[88vh]">
      <div className="flex flex-col md:flex-row justify-center items-center relative h-full">
        <Image
          src="/hero.jpeg"
          alt="bg image"
          fill
          className="object-cover brightness-50 contrast-125"
        />
        <div className="text-white relative text-center md:text-left mx-4 md:mx-8 mt-4 md:mt-0">
          <h1 className="text-2xl md:text-5xl 2xl:text-6xl font-extrabold mb-3 md:mb-5">
            Let's Watch Movie Together
          </h1>
          <p className="text-lg md:text-2xl 2xl:text-3xl leading-8">
            Unlimited movies, TV shows and more
          </p>
          <p className="mt-2 text-lg md:text-2xl leading-8">Watch anywhere. Cancel anytime.</p>
          <Link href='/movies'>
            <button className="bg-red-700 rounded-md w-32 md:w-36 2xl:w-48 2xl:text-xl font-extrabold py-4 m-3 md:m-5 hover:bg-red-800 hover:scale-105">
              Get Started →
            </button>
          </Link>
        </div>
        <div className="relative mx-4 md:mx-8 mb-4 md:mb-0">
          <Image src="/star.png" alt="image" width={400} height={145} className="object-contain" />
        </div>
      </div>
    </main>
  );
};

export default Herosection;
