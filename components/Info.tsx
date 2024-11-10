import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

import InfoImg from "@/public/info-img.svg";

export default function Info() {
  return (
    <div className="overflow-hidden relative" id="info">
      <div className="container mx-auto flex py-20 gap-5 items-center">
        <div className="w-[180px] h-[100px] bg-yellow-clr rounded-full absolute -right-[100px] top-1/2 -translate-y-1/2 blur-[100px]"></div>
        <div className="w-1/2">
          <Image src={InfoImg} alt="info image" />
        </div>
        <div className="w-1/2">
          <h4 className="text-sm uppercase text-turquoise-clr font-semibold">
            Team Collaborations
          </h4>
          <h2 className="text-4xl font-semibold mb-4 pt-1">
            Empowering Team <br />
            Collaboration with Us
          </h2>
          <p className="mb-6 max-w-[480px]">
            With dummy, all your teams data is autmatically imported, organized
            and updated. Easily custom the task for team as well. Consume the
            brief from many client and work together with team.
          </p>
          <Button href="/">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
