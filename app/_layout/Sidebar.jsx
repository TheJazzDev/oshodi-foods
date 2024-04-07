"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/shared";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="fixed w-full z-20 top-0 left-0 bg-white sm:hidden px-4 pt-4 font-semibold">
      <div>
        <div className="flex">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="sidebar-overlay"
                className="fixed inset-0 bg-black/35 z-10"
                onClick={toggleSidebar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              />
            )}
          </AnimatePresence>

          <div className="flex items-center gap-28 ml-10">
            <div>
              <Image
                src="/logo.svg"
                width={82}
                height={23}
                alt="Oshodi Foods"
              />
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="sidebar-content"
                className={`flex flex-col gap-6 z-50 fixed pl-4 pt-5 bg-white inset-0 `}
                initial={{ width: 0 }}
                animate={{ width: 211 }}
                exit={{ width: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button onClickHandler={toggleSidebar}>
                  <X color="#30348D" />
                </Button>

                {tabs.map((tab) => {
                  const { title, href } = tab;
                  const isActive =
                    pathname === href || pathname.startsWith(`${href}/`);

                  return (
                    <Link
                      href={href}
                      key={title}
                      className={`${
                        isActive ? "text-primary-blue" : "text-primary-gray"
                      }`}
                      onClick={toggleSidebar}
                    >
                      <motion.p
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100vw" }}
                        transition={{ duration: 0.6 }}
                      >
                        {title}
                      </motion.p>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {!isOpen && (
            <Button onClickHandler={toggleSidebar} className="absolute mt-2">
              <Menu color="#30348D" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
