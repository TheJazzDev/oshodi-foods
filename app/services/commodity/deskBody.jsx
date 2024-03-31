"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Accordion, Button } from "@/components/shared";

const DeskBody = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hidden sm:block w-[758px] mt-16">
      <Accordion
        title="Commodity Procurement"
        isOpen={isOpen}
        onClickHandler={toggleAccordion}
      >
        At the heart of our operations lies a meticulously crafted, data-driven
        approach aimed at identifying and sourcing Nigeria's most coveted
        commodities. Our robust intelligence infrastructure empowers us to stay
        ahead of market trends, ensuring that our clients benefit from timely
        and informed decision-making. We offer real-time snapshots of market
        demands both locally and globally. We pride ourselves on fostering
        direct collaborations with local producers, by forging strong
        partnerships at the grassroots level which guarantees the authenticity
        and quality of our offerings. Our commitment to excellence extends to
        every facet of our operations. Through comprehensive quality checks, we
        meticulously inspect each commodity to meet the highest standards. Rest
        assured, when you engage with us, you're investing in uncompromising
        quality.
      </Accordion>

      <div className="mt-10 text-justify break-normal leading-[30px]">
        <p className="mb-8">
          In navigating the dynamic landscape of commodity procurement, we
          employ market-driven strategies tailored to maximize value for our
          clients. From strategic sourcing to optimized supply chain management.
        </p>
        <p>
          Ready to take your commodity procurement to new heights? Get in touch
          with us today to learn more about our comprehensive suite of services
          and how we can tailor solutions to meet your specific needs.
        </p>
      </div>

      <div className="flex justify-center mt-10 ">
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
