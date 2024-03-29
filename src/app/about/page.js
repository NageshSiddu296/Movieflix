import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className="h-[88vh] grid place-items-center px-6 py-10 sm:px-16">
      <Image src="/theater123.avif" alt="about" fill className="object-cover brightness-75 contrast-100"/>

      <div className="text-gray-200 relative flex flex-col items-center justify-center w-[90%]  lg:flex-row">
        <div className="">
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl ">
            Movieflix is a subscription-based streaming service that allows our
            members to watch TV shows and movies on an internet-connected
            device. Depending on your plan, you can also download TV shows and
            movies to your iOS, Android, or Windows 10 device and watch without
            an internet connection.
          </h1>
        </div>
        <div className="">
          
          <Image
            className="object-contain w-[200px] lg:w-[1200px] contrast-125" 
            src="/mlogo.png"
            alt="about"
            width={400}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default about;
