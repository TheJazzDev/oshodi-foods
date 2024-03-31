"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";

const MobileBody = () => {
  const router = useRouter();

  return (
    <div className="sm:hidden mt-12">
      <article className="flex flex-col gap-8 text-justify break-normal leading-[30px]">
        <section>
          In the intricate world of commodities, maintaining both value and
          quality hinges upon the utilization of state-of-the-art storage
          facilities and the implementation of efficient logistics solutions. At
          Oshodi Group, we deeply understand this pivotal necessity and take
          immense pride in delivering world-class solutions that transcend
          industry standards.
        </section>
        <section>
          Central to our commitment is our avant-garde warehousing facility,
          meticulously equipped with the latest technological advancements to
          facilitate optimal inventory management, climate control, and security
          protocols. From temperature-sensitive goods to high-value merchandise,
          our warehousing infrastructure ensures that your commodities are
          safeguarded and preserved at their peak condition throughout their
          stay with us.
        </section>

        <section>
          Complementing our exceptional warehousing capabilities is our finely
          tuned logistics chain, engineered to expedite the movement of goods
          with unparalleled efficiency. By leveraging advanced routing
          algorithms and strategic partnerships with leading transportation
          providers, we substantially reduce lead times and streamline the
          delivery process, guaranteeing that your commodities reach their
          designated destinations swiftly and seamlessly.
        </section>
        <section>
          As your trusted partner in warehousing and logistics, we understand
          the significance of collaboration and transparency in fostering
          long-term success. Our team of industry experts works tirelessly to
          understand your unique requirements, tailor solutions to meet your
          specific needs, and provide proactive support every step of the way.
          With Oshodi Group by your side, you can trust that your commodities
          are in capable hands, allowing you to focus on what matters most.
        </section>
        <section>
          Discover how our world-class warehousing and logistics solutions can
          elevate the standard for your business. Contact us today to learn more
          about our comprehensive suite of services and embark on a journey
          towards unparalleled excellence in warehousing and logistics.
        </section>
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
