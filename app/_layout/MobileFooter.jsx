"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Clock8,
  MapPin,
} from "lucide-react";

const MobileFooter = () => {
  const navItems = [
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

  const servicesLinks = [
    {
      title: "Commodity Procurement",
      href: "/services/commodity",
    },
    {
      title: "Global Exportation",
      href: "/services/exportation",
    },
    {
      title: "Warehousing and Logistics",
      href: "/services/warehouse-logistics",
    },
    {
      title: "Local Distribution",
      href: "/services/distribution",
    },
    {
      title: "Market Consulting",
      href: "/services/market-consulting",
    },
  ];

  const contacts = [
    {
      icon: <Mail size={15} strokeWidth={1.5} color="#30348D" />,
      title: "info@oshodifood.com",
    },
    {
      icon: <Phone size={15} strokeWidth={1.5} color="#30348D" />,
      title: "+1 (012) 345-6789",
    },
    {
      icon: <Clock8 size={15} strokeWidth={1.5} color="#30348D" />,
      title: "08:00 - 18:00 (Mon - Sat)",
    },
    {
      icon: <MapPin size={15} strokeWidth={1.5} color="#30348D" />,
      title: "Location/Address",
    },
  ];

  return (
    <footer className="flex sm:hidden flex-col mt-5 pt-6 pb-6 pl-4 pr-16 text-[#060A32] text-[10px]">
      <div>
        <Image src="/logo.svg" width={65} height={24} alt="Oshodi Foods" />
      </div>
      <section className="flex flex-col mt-[14px]">
        <div className="flex justify-between">
          <p className="w-[220px] text-justify break-words">
            At Oshodi Group, we are not just a company; we are architects of
            transformation in the commodity industry. Since 2013, our journey
            has been one of unwavering dedication and visionary leadership.
          </p>

          <ul className="flex flex-col gap-3">
            <p className="font-semibold mb-1">Navigation</p>
            {navItems.map((navItem) => {
              const { title, href } = navItem;

              return (
                <Link href={href} key={title}>
                  <li>{title}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-[6px] mt-2">
          <Facebook size={15} fill="#30348D" strokeWidth={1.5} />
          <Linkedin size={15} fill="#30348D" strokeWidth={1.5} />
          <Twitter size={15} color="#30348D" strokeWidth={1.5} />
          <Instagram size={15} color="#30348D" strokeWidth={1.5} />
        </div>
      </section>

      <section className="flex justify-between mt-10">
        <div>
          <ul className="flex flex-col gap-[6px]">
            <p className="font-semibold mb-1">Contact Us</p>

            {contacts.map((contact) => {
              let href = "";
              if (contact.title.startsWith("+")) {
                href = `tel:${contact.title}`;
              } else if (contact.title.includes("@")) {
                href = `mailto:${contact.title}`;
              }

              return (
                <li key={contact.title}>
                  {href ? (
                    <a href={href} className="flex gap-1 items-center">
                      {contact.icon}{" "}
                      <span className="text-primary-blue font-medium hover:text-primary-gray">
                        {contact.title}
                      </span>
                    </a>
                  ) : (
                    <div className="flex gap-1 items-center">
                      {contact.icon}{" "}
                      <span className="text-primary-blue font-medium hover:text-primary-gray">
                        {contact.title}
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-[6px]">
            <p className="font-semibold mb-1">Services</p>

            {servicesLinks.map((servicesLink) => {
              return (
                <Link href={servicesLink.href} key={servicesLink.title}>
                  {servicesLink.title}
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default MobileFooter;
