"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";
import { consultingData } from "@/lib/constants";

const MobileBody = () => {
  const router = useRouter();

  return (
    <div className="sm:hidden mt-12">
      <article className="flex flex-col gap-6 text-justify break-normal leading-[30px]">
        <section>
          Oshodi Foods provides bespoke market consulting services designed to
          navigate you through the complex process of exporting goods worldwide.
          Our systematic approach ensures a smooth and successful export
          journey. Here's how we support you at every phase:
        </section>
        <>
          {consultingData.map((data) => {
            const { title, subTitle1, listItem1, subTitle2, listItem2, key } =
              data;
            return (
              <section>
                {subTitle2 ? (
                  <>
                    <p className="text-primary-blue font-semibold">{title}</p>
                    <ul className="list-disc marker:text-primary-blue ml-6">
                      <li className="mb-1">
                        <span className="text-primary-blue font-medium">
                          {subTitle1}
                        </span>{" "}
                        {listItem1}
                      </li>
                      <li className="mb-1">
                        <span className="text-primary-blue font-medium">
                          {subTitle2}
                        </span>{" "}
                        {listItem2}
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="text-primary-blue font-semibold">{title}</p>
                    <ul className="list-disc marker:text-primary-blue ml-6">
                      <li className="mb-1">
                        <span className="text-primary-blue font-medium">
                          {subTitle1}
                        </span>{" "}
                        {listItem1}
                      </li>
                    </ul>
                  </>
                )}
              </section>
            );
          })}
        </>

        <p>
          Embark on your export journey with Oshodi Foods and unlock the
          potential of the markets for your products.
        </p>
      </article>

      <div className="flex justify-center mt-10 ">
        <Button
          variant="services"
          onClickHandler={() => router.push("/contact")}
        >
          Get in touch
        </Button>
      </div>
    </div>
  );
};

export default MobileBody;
