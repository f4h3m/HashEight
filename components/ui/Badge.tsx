import React from "react";
import { Rocket } from "lucide-react";
export default function Badge({ children }: any) {
  return (
    <div className="bg-white text-black text-[12px] font-bold px-6 rounded-full uppercase py-1 pr-4 mb-5 flex items-center">
      {children}
      <Rocket size={16} className="ml-2" />
    </div>
  );
}
