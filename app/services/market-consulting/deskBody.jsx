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
          Oshodi Foods offers comprehensive market consulting services tailored
          to guide you through the intricate process of exporting goods to the
          UK and Europe. Our step-by-step approach ensures a seamless and
          successful export journey. Here’s how we support you at every stage:
        </p>
      </div>

      {consultingData.map((data) => {
        const { title, listItem1, listItem2, key } = data;

        return (
          <div key={key} className="mt-4">
            <Accordion
              title={title}
              isOpen={key === openAccordionKey}
              onClickHandler={() => toggleAccordion(key)}
            >
              <ul className="list-disc">
                {listItem2 ? (
                  <>
                    <li className="mb-4">{listItem1}</li>
                    <li>{listItem2}</li>
                  </>
                ) : (
                  <li>{listItem1}</li>
                )}
              </ul>
            </Accordion>
          </div>
        );
      })}

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
