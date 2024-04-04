"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Accordion, Button } from "@/components/shared";
import { consultingData } from "@/lib/constants";

const DeskBody = () => {
  const router = useRouter();
  const [openAccordionKey, setOpenAccordionKey] = useState(null);

  const toggleAccordion = (key) => {
    setOpenAccordionKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="hidden sm:block w-[758px] mt-16">
      <div className="mb-6 text-justify break-normal leading-[30px]">
        <p>
          Oshodi Foods provides bespoke market consulting services designed to
          navigate you through the complex process of exporting goods worldwide.
          Our systematic approach ensures a smooth and successful export
          journey. Here's how we support you at every phase:
        </p>
      </div>

      {consultingData.map((data) => {
        const { title, subTitle1, listItem1, subTitle2, listItem2, key } = data;

        return (
          <div key={key} className="mt-4">
            <Accordion
              title={title}
              isOpen={key === openAccordionKey}
              onClickHandler={() => toggleAccordion(key)}
            >
              <ul className="list-disc marker:text-primary-blue">
                {listItem2 ? (
                  <>
                    <li className="mb-4">
                      <span className="font-medium text-primary-blue">
                        {subTitle1}
                      </span>{" "}
                      {listItem1}
                    </li>
                    <li>
                      <span className="font-medium text-primary-blue">
                        {subTitle2}
                      </span>{" "}
                      {listItem2}
                    </li>
                  </>
                ) : (
                  <li>
                    <span className="font-medium text-primary-blue">
                      {subTitle1}
                    </span>{" "}
                    {listItem1}
                  </li>
                )}
              </ul>
            </Accordion>
          </div>
        );
      })}

      <div className="mt-10 text-justify break-normal leading-[30px]">
        <p>
          Embark on your export journey with Oshodi Foods and unlock the
          potential of the markets for your products.
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
