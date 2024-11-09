import Image from "next/image";
import React from "react";
import logo1 from "@/public/logo/logo1.svg";
import logo2 from "@/public/logo/logo2.svg";
import logo3 from "@/public/logo/logo3.svg";
import logo4 from "@/public/logo/logo4.svg";
import logo5 from "@/public/logo/logo5.svg";
import logo6 from "@/public/logo/logo6.svg";
import Marquee from "./ui/Marquee";

export default function Logo() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="mx-auto py-20">
      <h4 className="text-center font-bold mb-10">
        Trusted by Leading Organization
      </h4>
      <div className="display-inline [&>li]:w-[400px]">
        <Marquee logos={logos} />
      </div>
    </div>
  );
}
