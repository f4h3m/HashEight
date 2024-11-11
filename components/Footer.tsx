import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container mx-auto border-t border-slate-500 py-4">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <p className="font-semibold md:text-left text-center">
            &copy; HashEight Copyright 2024
          </p>
          <ul className="flex md:justify-end justify-center gap-4 font-semibold md:mt-0 mt-4">
            <li className="border-r-2 pr-4">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Condition</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
