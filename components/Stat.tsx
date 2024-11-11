import React from "react";
import statImg from "@/public/stat-img.svg";
import Image from "next/image";

export default function Stat() {
  return (
    <div className="container mx-auto flex lg:flex-row flex-col-reverse items-center xl:py-20 py-10">
      <div className="lg:w-1/2 w-full">
        <h2 className="xl:text-4xl lg:text-3xl md:text-3xl text-2xl mt-4 lg:mt-0 font-semibold mb-6 max-w-[90%]">
          Streamlined their fellowship programs application process by building
          a comprehensive management system in Stacker.
        </h2>
        <p className="max-w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi
          asperiores repellendus natus consectetur, sapiente a. Sequi saepe
          doloribus nostrum quasi dolorem! Earum optio soluta expedita obcaecati
          provident quae fugit!
        </p>
        <div className="flex-col md:flex-row flex mt-10 gap-4">
          <div className="w-[220px] bg-white px-6 py-3 rounded-md md:mb-0 mb-2">
            <h4 className="text-black font-bold text-4xl">77,000 +</h4>
            <h6 className="text-black font-semibold">Managed tasks</h6>
          </div>
          <div className="w-[220px] bg-white px-6 py-3 rounded-md">
            <h4 className="text-black font-bold text-4xl">9hrs/week</h4>
            <h6 className="text-black font-semibold">Save each week</h6>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <Image src={statImg} alt="stat image" />
      </div>
    </div>
  );
}
