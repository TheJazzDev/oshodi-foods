"use client";
import { useRouter, usePathname } from "next/navigation";
import { Card } from "@/components/shared";
import { Button } from "@/components/shared";
import { MoveRight } from "lucide-react";

const Services = () => {
  const router = useRouter();
const pathname = usePathname()

  const tabs = [
    {
      title: "Commodity Procurement",
      url: "/images/commodity.png",
    },
    {
      title: "Global Exportation",
      url: "/images/cargo.png",
    },
    {
      title: "Warehousing and Logistics",
      url: "/images/warehouse.png",
    },
    {
      title: "Local Distribution",
      url: "/images/distribution.png",
    },
    {
      title: "Market Consulting",
      url: "/images/consult.png",
    },
  ];

  return (
    <>
      <h1 className="text-primary-blue font-medium text-center text-lg sm:text-[2.5rem]">
        Our Services
      </h1>
      <p className="text-primary-gray/80 text-sm sm:text-base text-center mt-4">
        Experience Tailored Excellence: Discover Our Range of Services
      </p>

      <section className="flex gap-4 mx-4 sm:mx-10 sm:gap-6 sm:justify-center mt-10 sm:mt-20 scroll-smooth scroll-ml-4 overflow-auto">
        {tabs.map((tab) => {
          const { url, title } = tab;

          return (
            <Card url={url} key={title}>
              {title}
            </Card>
          );
        })}
      </section>
      <div className={`${pathname === "/" ? "flex" : "hidden"} justify-center`}>
        <Button
          variant="primary"
          className="mt-10 sm:mt-20 py-4 px-8 flex gap-4 font-medium"
          onClickHandler={() => router.push("/services")}
        >
          Explore Now <MoveRight />
        </Button>
      </div>
    </>
  );
};

export default Services;
