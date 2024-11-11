import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.svg";
import Menu from "./ui/Menu";

export default function Header() {
  const items = [
    {
      name: "Info",
      link: "#info",
    },
    {
      name: "Feature",
      link: "#feature",
    },
    {
      name: "Faq",
      link: "#faq",
    },
    {
      name: "Testimonial",
      link: "#testimonial",
    },
  ];
  return (
    <header className="grid grid-cols-2 justify-between items-center py-4 relative">
      <Link href="/">
        <Image src={Logo} alt="HashEight Logo" width="200" />
      </Link>
      <Menu items={items} />
    </header>
  );
}
