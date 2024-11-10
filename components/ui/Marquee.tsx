import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  count: number;
}

const Marquee: React.FC<MarqueeProps> = ({ children, count }) => {
  return (
    <>
      <div className="relative w-full grid place-items-center overflow-hidden">
        <div className="w-[300px] h-full absolute left-0 top-0 z-50 bg-gradient-to-r from-background"></div>
        <div className="w-[300px] h-full absolute right-0 top-0 z-50 bg-gradient-to-l from-background"></div>
        <div
          className="flex justify-between cursor-pointer items-center hover:[animation-play-state:paused] animate-scroll"
          style={{ width: `${300 * count * 2}px` }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Marquee;
