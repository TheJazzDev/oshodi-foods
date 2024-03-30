import { Card } from "@/components/shared";

const Services = () => {
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

      <section className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center mt-10 sm:mt-20">
        {tabs.map((tab) => {
          const { url, title } = tab;

          return (
            <Card url={url} key={title}>
              {title}
            </Card>
          );
        })}
      </section>
    </>
  );
};

export default Services;
