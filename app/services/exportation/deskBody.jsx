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
        title="Global Exportation"
        isOpen={isOpen}
        onClickHandler={toggleAccordion}
      >
        At the nexus of global trade, our export services transcend borders,
        propelling Nigerian commodities onto the international stage, where they
        assert their prominence as indispensable staples in global markets. We
        orchestrate a seamless export process, meticulously crafted to navigate
        the complexities of international trade with ease. From initial
        consultations to final delivery, our comprehensive suite of export
        services ensures a smooth and efficient journey for your commodities to
        reach their global destinations. Navigating the intricate web of
        international customs regulations can be daunting, but with our
        dedicated customs clearance assistance, you can rest assured that your
        commodities will sail through customs seamlessly. Our team of experts
        meticulously manages all customs documentation and procedures, ensuring
        compliance with regulatory requirements and expediting the clearance
        process. Whether by air, sea, or land, we partner with trusted shipping
        carriers renowned for their reliability and efficiency, guaranteeing
        timely delivery and peace of mind for our clients. Our export strategies
        are informed by comprehensive market insights, meticulously curated to
        identify and capitalize on opportunities in high-demand regions
        worldwide. By analyzing market trends, consumer preferences, and
        economic indicators, we tailor our export efforts to target regions with
        the greatest potential for success, ensuring maximum market penetration
        and profitability for your commodities.
      </Accordion>

      <div className="mt-10 text-justify break-normal leading-[30px]">
        <p>
          Ready to take your commodities global? Get in touch with us today to
          learn more about our export services and how we can tailor a solution
          to meet your specific needs. Together, let's unlock new horizons and
          embark on a journey of export success.
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
