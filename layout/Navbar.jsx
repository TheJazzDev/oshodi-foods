"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/shared";

const Navbar = () => {
  const pathname = usePathname();

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
    <nav className="hidden sm:flex items-center justify-between px-20 font-semibold">
      <div>
        <Image src="/logo.svg" width={140} height={60} alt="Oshodi Foods" />
      </div>
      <div className="flex gap-16">
        {tabs.map((tab) => {
          const { title, href } = tab;
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              href={href}
              key={title}
              className={`${
                isActive ? "text-primary-blue" : "text-primary-gray"
              }`}
            >
              <p>{title}</p>
            </Link>
          );
        })}
      </div>

      <Button variant="primary" className="px-10">
        Shop Now
      </Button>
    </nav>
  );
};

export default Navbar;
