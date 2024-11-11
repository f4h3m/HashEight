import React from "react";
import { Rocket } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className="bg-white text-black text-[12px] font-bold px-6 rounded-full uppercase py-1 pr-4 mb-5 flex items-center shadow-md shadow-turquoise-clr">
      {children}
      <Rocket size={16} className="ml-2" />
    </div>
  );
};

export default Badge;
