import React from "react";
import Button from "./ui/Button";

import CtaImg from "@/public/cta-img.svg";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="py-20 lg:pt-32 pt-5">
      <div className="container mx-auto bg-green-clr px-10  py-16 rounded-md flex relative flex-col md:flex-row">
        <div className="xl:w-1/3 w-full">
          <h2 className="color-white font-bold md:text-4xl text-3xl mb-8">
            Get software that fits you perfectly
          </h2>
          <Button href="/">Talk to us</Button>
        </div>
        <div className="xl:w-1/2 w-full">
          <Image
            src={CtaImg}
            alt="Cta Image"
            className="absolute bottom-0 right-0 lg:w-auto md:w-[350px] md:block hidden"
          />
        </div>
      </div>
    </div>
  );
}
