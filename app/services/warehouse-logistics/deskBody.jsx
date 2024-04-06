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
    <div className="hidden sm:block max-w-2xl mt-16">
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
        <section className="mb-8">
          <h4 className="font-medium mb-3 text-primary-blue">
            Partnership and Transparency
          </h4>
          <p className="mb-4">
            At Oshodi Group, we believe in the power of partnership and the
            value of transparency. We work closely with our clients to
            understand their warehousing and logistics needs, offering tailored
            solutions that best meet those requirements. Our team is dedicated
            to providing clear communication and support throughout the process,
            ensuring a successful partnership.
          </p>
          <p>
            With Oshodi Group, you can trust that your commodities are in good
            hands. Our straightforward approach to warehousing and logistics
            allows you to focus on the core aspects of your business, knowing
            that the storage and transportation of your goods are being managed
            effectively.
          </p>
        </section>
        <section>
          <h4 className="mb-3 font-medium text-primary-blue">
            Discover Our Warehousing Solutions
          </h4>
          <p>
            Learn more about how our warehousing and logistics services can
            support your business. Contact us today to discuss your needs and
            how we can help you achieve your operational goals with our
            practical and reliable warehousing solutions at Oshodi Group.
          </p>
        </section>
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
