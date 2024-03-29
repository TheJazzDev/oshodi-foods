"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/shared";
import { Menu, X } from "lucide-react";
// import{ motion} from "framer-motion"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const tabs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex relative sm:hidden px-4 pt-4 font-semibold">
      {isOpen ? (
        <Button onClickHandler={toggleSidebar} className="z-10 absolute mt-2">
          <Menu color="black" />
        </Button>
      ) : (
        <div className="flex flex-col gap-6 z-10 absolute bg-white w-[211px] pt-2 h-screen">
          <Button onClickHandler={toggleSidebar}>
            <X color="black" />{" "}
          </Button>
          {tabs.map((tab) => {
            const { title, href } = tab;

            return (
              <Link
                href={href}
                key={title}
                className={`${
                  pathname === href ? "text-primary-blue " : "text-primary-gray"
                }`}
              >
                <p>{title}</p>
              </Link>
            );
          })}
        </div>
      )}
      <div className="flex items-center gap-28 ml-6">
        <div>
          <Image src="/logo.svg" width={82} height={23} alt="Oshodi Foods" />
        </div>
        <Button variant="primary">Shop Now</Button>
      </div>
    </nav>
  );
};

export default Sidebar;
