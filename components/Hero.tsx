import React from "react";
import Button from "@/components/ui/Button";
import Header from "./Header";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <div className="overflow-hidden relative">
      <div className="w-[300px] h-[300px] bg-yellow-clr rounded-full absolute -left-20 -top-20 blur-[100px]"></div>
      <div className="w-[200px] h-[200px] bg-cyan-clr rounded-full absolute right-60 -top-20 blur-[100px]"></div>
      <div className="w-[300px] h-[100px] bg-turquoise-clr rounded-full absolute -right-40 top-60 blur-[70px]"></div>
      <div className="container mx-auto">
        <Header />
        <div className="w-1/2 mx-auto h-[500px] justify-center flex flex-col">
          <div className="flex justify-center">
            <Badge>Get It now</Badge>
          </div>
          <h1 className="text-center font-bold text-6xl">
            Maximize Productivity, Minimise Effort
          </h1>
          <p className="text-center mt-4 w-2/3 mx-auto">
            Hasheight is used by numerous businesses, institutions, and
            recruiters to significantly enhance their screening and recruitment
            procedures.
          </p>
          <div className="flex justify-center mt-6">
            <Button href="/">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
