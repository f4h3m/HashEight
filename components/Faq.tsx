import React from "react";
import Button from "./ui/Button";
import Accordion from "./ui/Accordian";
export default function Faq() {
  const items = [
    {
      title: "How do I create an account?",
      content:
        "A simple form with the usual suspects - email, password, maybe a username. Think Gmail, Amazon,",
    },
    {
      title: "What are the system requirements for using the web app?",
      content:
        "The sun dipped below the horizon, painting the sky with vibrant hues of orange and purple as the day surrendered to the embrace of twilight.",
    },
    {
      title: "What are the different user roles and permissions?",
      content:
        "A lone wolf howled at the moon, its mournful cry echoing through the silent, snow-covered forest.",
    },
    {
      title: "How do I update my payment information?",
      content:
        "The aroma of freshly baked bread wafted from the bakery, mingling with the sweet scent of blooming jasmine flowers.",
    },
    {
      title: "What payment methods are accepted?",
      content:
        "Laughter erupted from the children playing in the park, their joyous sounds a welcome contrast to the city usual hum.",
    },
  ];

  return (
    <div className="relative">
      <div className="w-[300px] h-[300px] block bg-cyan-clr rounded-full blur-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto py-20 flex gap-4 relative">
        <div className="w-1/2 mx-auto">
          <h1 className="text-4xl font-bold text-center">
            What would you like to <br />
            know about Us?
          </h1>
          <p className="text-center mb-14 mt-4">
            Find answers to commonly asked questions about our products,
            services, and policies. We are here to help you navigate any
            uncertainties and provide clarity on your journey with us.
          </p>
          <Accordion items={items} />
          <p className="text-center mt-10">Got any more question ?</p>
          <div className="text-center mt-4">
            <Button href="/">Talk to us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
