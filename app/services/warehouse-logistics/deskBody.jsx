"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Accordion, Button } from "@/components/shared";
import { warehouseLogisticsData } from "@/lib/constants";

const DeskBody = () => {
  const router = useRouter();
   const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

   const toggleAccordion = (index) => {
     setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
   };

  return (
    <div className="hidden sm:block w-[758px] mt-16">
      {warehouseLogisticsData.map((data, index) => {
        const { title, text } = data;

        return (
          <Accordion
            key={index}
            title={title}
            isOpen={index === openAccordionIndex}
            onClickHandler={() => toggleAccordion(index)}
          >
            {text}
          </Accordion>
        );
      })}

      <div className="mt-10 text-justify break-normal leading-[30px]">
        <p className="mb-8">
          As your trusted partner in warehousing and logistics, we understand
          the significance of collaboration and transparency in fostering
          long-term success. Our team of industry experts works tirelessly to
          understand your unique requirements, tailor solutions to meet your
          specific needs, and provide proactive support every step of the way.
          With Oshodi Group by your side, you can trust that your commodities
          are in capable hands, allowing you to focus on what matters most.
        </p>
        <p>
          Discover how our world-class warehousing and logistics solutions can
          elevate the standard for your business. Contact us today to learn more
          about our comprehensive suite of services and embark on a journey
          towards unparalleled excellence in warehousing and logistics.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <Button
          variant="services"
          className=""
          onClickHandler={() => router.push("/contact")}
        >
          Get in touch
        </Button>
      </div>
    </div>
  );
};

export default DeskBody;
