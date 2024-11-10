import Image from "next/image";
import React from "react";

import userImg from "@/public/user-img.jpg";
import userImg2 from "@/public/user-img2.jpg";
import userImg3 from "@/public/user-img3.jpg";

export default function Testimonial() {
  return (
    <div className="py-20">
      <div className="container mx-auto flex justify-center">
        <div className="w-1/2">
          <h4 className="text-center uppercase text-turquoise-clr font-semibold">
            Testimonial
          </h4>
          <h2 className="text-center text-4xl font-bold mb-2">
            What Do Our Customers says?
          </h2>
          <p className="text-center max-w-[80%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            nisi asperiores repellendus natus consectetur, sapiente a.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-14">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-md p-5 relative min-h-48 hover:scale-105  duration-300">
            <p className="text-black font-bold text-md">
              Focusing on organization has elevated my work quality and
              efficiency—its incredible how much more I accomplish now with
              clear priorities in place!
            </p>
            <div className="flex items-center mt-2 absolute bottom-4 left-4">
              <Image
                className="rounded-full w-12"
                src={userImg}
                alt="User Image"
              />
              <div className="text-black ml-2">
                <h4 className="font-bold text-lg">Albert Flores</h4>
                <p className="text-sm font-semibold">Web Designer</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-5 relative min-h-48 hover:scale-105  duration-300">
            <p className="text-black font-bold text-md">
              Im amazed by how much more efficient and driven I feel. Keeping my
              work structured has allowed me to stay on top of my goals and
              deliver consistently.
            </p>
            <div className="flex items-center mt-2 absolute bottom-4 left-4">
              <Image
                className="rounded-full w-12"
                src={userImg2}
                alt="User Image"
              />
              <div className="text-black ml-2">
                <h4 className="font-bold text-lg">Sarah Mitchell</h4>
                <p className="text-sm font-semibold">Senior Engineer</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-5 relative min-h-48 hover:scale-105  duration-300">
            <p className="text-black font-bold text-md">
              The level of clarity and productivity I have reached has
              transformed the way I approach my projects. Staying organized and
              focused has made all the difference!
            </p>
            <div className="flex items-center mt-2 absolute bottom-4 left-4">
              <Image
                className="rounded-full w-12"
                src={userImg3}
                alt="User Image"
              />
              <div className="text-black ml-2">
                <h4 className="font-bold text-lg">James Anderson</h4>
                <p className="text-sm font-semibold">Digital Marketer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
