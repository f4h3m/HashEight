import React from "react";
import featureImage from "@/public/feature-img.svg";
import Image from "next/image";
import AutoplayTab from "./ui/AutoplayTab";

export default function Feature() {
  const items = [
    {
      title: "Invoice Creation",
      content:
        "A simple form with the usual suspects - email, password, maybe a username. Think Gmail, Amazon,",
    },
    {
      title: "Payment Automation",
      content:
        "The sun dipped below the horizon, painting the sky with vibrant hues of orange and purple as the day surrendered to the embrace of twilight.",
    },
    {
      title: "Access Control",
      content:
        "A lone wolf howled at the moon, its mournful cry echoing through the silent, snow-covered forest.",
    },
    {
      title: "3rd Party Integrate",
      content:
        "The aroma of freshly baked bread wafted from the bakery, mingling with the sweet scent of blooming jasmine flowers.",
    },
    {
      title: "Best User Experience",
      content:
        "Laughter erupted from the children playing in the park, their joyous sounds a welcome contrast to the city usual hum.",
    },
  ];
  return (
    <div className="relative overflow-hidden xl:py-20 py-10" id="feature">
      <div className="w-[180px] h-[180px] bg-cyan-clr rounded-full absolute -left-[100px] top-1/2 -translate-y-1/2 blur-[100px]"></div>
      <div className="container flex justify-center mx-auto">
        <div className="xl:w-1/2 lg:w-[70%] w-full">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            The complete automation platform for modern businesses
          </h2>
          <p className="text-center mt-4 max-w-[80%] mx-auto">
            Accounts payable isnot just a single click. Its a comprehensive
            supply chain that requires a secure, streamlined solution.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex md:flex-row flex-col flex-col-reverse gap-5 mt-14 items-center">
        <div className="md:w-1/2">
          <AutoplayTab items={items} interval={3000} />
        </div>
        <div className="md:w-1/2">
          <Image src={featureImage} alt="feature image" />
        </div>
      </div>
    </div>
  );
}
