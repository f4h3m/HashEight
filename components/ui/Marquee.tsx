import React from "react";
import Image from "next/image";

interface MarqueeProps {
  logos: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ logos }) => {
  return (
    <>
      <div className="relative w-full grid place-items-center overflow-hidden">
        <div className="w-[300px] h-full absolute left-0 top-0 z-50 bg-gradient-to-r from-background"></div>
        <div className="w-[300px] h-full absolute right-0 top-0 z-50 bg-gradient-to-l from-background"></div>
        <div
          className={`flex justify-between cursor-pointer items-center hover:[animation-play-state:paused] slide-track w-[calc(300px*${
            logos.length * 2
          })]`}
        >
          {logos.map((logo, index) => (
            <div key={index} className="mr-8">
              <Image src={logo} alt={`Logo ${index + 1}`} width={200} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="mr-8">
              <Image src={logo} alt={`Logo ${index + 1}`} width={200} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marquee;
