"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";

const MobileBody = () => {
  const router = useRouter();

  return (
    <div className="sm:hidden mt-12">
      <article className="flex flex-col gap-6 text-justify break-normal leading-[30px]">
        <section>
          At the heart of global commerce, our export services bridge borders,
          elevating Nigerian commodities to a significant international status
          as essential staples in global markets. We facilitate a seamless
          export process, carefully designed to navigate the complexities of
          international trade effortlessly. From the initial consultation to the
          final delivery, our extensive range of export services guarantees a
          smooth and efficient passage for your commodities to their worldwide
          destinations.
        </section>
        <section>
          The maze of international customs regulations can be overwhelming, but
          with our specialised customs clearance support, you can be confident
          that your commodities will pass through customs smoothly. Our team of
          experts diligently oversees all customs documentation and procedures,
          ensuring adherence to regulatory requirements and speeding up the
          clearance process. Whether by air, sea, or land, we collaborate with
          reputable shipping carriers known for their dependability and
          efficiency, ensuring timely delivery and peace of mind for our
          clients.
        </section>

        <section>
          Our export strategies are driven by detailed market insights carefully
          gathered to identify and leverage opportunities in regions worldwide
          with high demand. By examining market trends, consumer preferences,
          and economic indicators, we customise our export initiatives to target
          areas with the most significant potential for success. This approach
          ensures optimal market penetration and profitability for your
          commodities.
        </section>
        <section>
          Contact us today to discover our comprehensive suite of distribution
          services and begin a fulfilling journey of sourcing premium
          commodities with Oshodi Group.
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
