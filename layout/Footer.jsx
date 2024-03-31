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

const Footer = () => {
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
      icon: <Mail size={20} strokeWidth={1.5} color="#30348D" />,
      title: "oshodifoods@gmail.com",
    },
    {
      icon: <Phone size={20} strokeWidth={1.5} color="#30348D" />,
      title: "+1 (012) 345-6789",
    },
    {
      icon: <Clock8 size={20} strokeWidth={1.5} color="#30348D" />,
      title: "08:00 - 18:00 (Mon - Sat)",
    },
    {
      icon: <MapPin size={20} strokeWidth={1.5} color="#30348D" />,
      title: "Location/Address",
    },
  ];

  return (
    <footer className="hidden sm:flex justify-between border-t-2 border-t-primary-gray/25 mt-28 pt-16 pb-16 px-[113px] text-[#060A32] text-sm">
      <section className="flex flex-col">
        <div className="flex items-center gap-[127px]">
          <div className="flex flex-col">
            <div>
              <Image
                src="/logo.svg"
                width={160}
                height={59}
                alt="Oshodi Foods"
                className="ml-[-24px]"
              />
            </div>

            <p className="w-[363px] text-justify break-words">
              At Oshodi Group, we are not just a company; we are architects of
              transformation in the commodity industry. Since 2013, our journey
              has been one of unwavering dedication and visionary leadership.
            </p>
          </div>
          <ul className="flex flex-col gap-4 mt-9">
            <p className="font-medium mb-2 text-lg">Navigation</p>
            {navItems.map((navItem) => {
              const { title, href } = navItem;

              return (
                <Link
                  href={href}
                  key={title}
                  className="hover:text-primary-gray"
                >
                  <li>{title}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-7 mt-8">
          <Facebook size={20} fill="#30348D" strokeWidth={1.5} />
          <Linkedin size={20} fill="#30348D" strokeWidth={1.5} />
          <Twitter size={20} color="#30348D" strokeWidth={1.5} />
          <Instagram size={20} color="#30348D" strokeWidth={1.5} />
        </div>
      </section>

      <section className="flex gap-[126px] mt-8">
        <div>
          <ul className="flex flex-col gap-4">
            <p className="font-medium mb-3 text-lg">Services</p>

            {servicesLinks.map((servicesLink) => {
              return (
                <Link
                  href={servicesLink.href}
                  key={servicesLink.title}
                  className="hover:text-primary-gray"
                >
                  {servicesLink.title}
                </Link>
              );
            })}
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-6">
            <p className="font-medium text-lg">Contact Us</p>

            {contacts.map((contact) => {
              return (
                <li className="flex gap-1 items-center" key={contact.title}>
                  {contact.icon}{" "}
                  <span className="text-primary-blue font-medium hover:text-primary-gray">
                    {contact.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
