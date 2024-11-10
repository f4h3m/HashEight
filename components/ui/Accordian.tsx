"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

const AccordionItem: React.FC<{
  item: AccordionItem;
  isActive: boolean;
  onClick: () => void;
}> = ({ item, isActive, onClick }) => {
  return (
    <>
      <button
        className="flex justify-between items-center w-full px-5 py-3 text-left bg-white text-black rounded-md"
        onClick={onClick}
      >
        <h3 className="text-lg font-bold">{item.title}</h3>
        <span
          className={`transform transition-transform duration-300 ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown />
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: isActive ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="p-4">{item.content}</div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
