"use client";
import { useRouter } from "next/navigation";
import {  Button } from "@/components/shared";

const MobileBody = () => {
  const router = useRouter();

  return (
    <div className="sm:hidden mt-12">
      <article className="flex flex-col gap-6 text-justify break-normal leading-[30px]">
        <section>
          At the heart of global commerce, our export services bridge
          continents, elevating Nigerian commodities to a pivotal role on the
          international stage. These commodities, ranging from Cocoa and
          Coffee's rich flavours to Steel and Aluminium's robust materials, have
          become indispensable staples in global markets. We facilitate a
          seamless export process, expertly designed to navigate the
          complexities of international trade easily. From the initial
          consultation to the final delivery, our comprehensive suite of export
          services ensures a smooth and efficient transit for your commodities
          to their worldwide destinations.
        </section>
        <section>
          Navigating the intricate maze of international customs regulations can
          be a formidable challenge. However, with our dedicated customs
          clearance support, you can be confident that your commodities,
          including Palm Oil, Cashew Nuts, and Soybeans, will pass through
          customs smoothly. Our team of experts meticulously manages all customs
          documentation and procedures, ensuring compliance with regulatory
          requirements and expediting the clearance process.
        </section>

        <section>
          Whether by air, sea, or land, we collaborate with trusted shipping
          carriers known for their reliability and efficiency. This partnership
          guarantees the timely delivery of your commodities, such as Timber,
          Plywood, and Rubber, offering peace of mind to our clients.
        </section>
        <section>
          Our export strategies are underpinned by comprehensive market
          insights, carefully curated to identify and leverage opportunities in
          high-demand regions globally. By analysing market trends, consumer
          preferences, and economic indicators, we tailor our export efforts to
          target regions with the highest potential for success. This strategic
          approach ensures maximum market penetration and profitability for
          various commodities, including Cassava, Yam, and Limestone.
        </section>
        <section>
          Are you ready to take your commodities global? Contact us today to
          discover more about our export services and how we can customise a
          solution to meet your needs. Together, let's explore new horizons and
          embark on a journey of export success.
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
