"use client";
import React, { useState, useEffect } from "react";

interface AutoplayTabItem {
  title: string;
  content: string;
}

interface AutoplayTabProps {
  items: AutoplayTabItem[];
  interval?: number; // Add interval prop
}

const AutoplayTab: React.FC<AutoplayTabProps> = ({
  items,
  interval = 3000,
}) => {
  // Set default interval to 3000ms
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [items.length, interval]); // Add interval to dependency array

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AutoplayTabItem
          key={index}
          item={item}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
};

const AutoplayTabItem: React.FC<{
  item: AutoplayTabItem;
  isActive: boolean;
}> = ({ item, isActive }) => {
  return (
    <div
      className={`border-l-2 pl-4 mb-5 ${
        isActive ? "border-turquoise-clr" : "border-white"
      }`}
    >
      <div className="flex text-left items-center w-full">
        <h3 className="text-2xl font-bold">{item.title}</h3>
      </div>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isActive ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="mt-4">{item.content}</div>
        </div>
      </div>
    </div>
  );
};

export default AutoplayTab;
