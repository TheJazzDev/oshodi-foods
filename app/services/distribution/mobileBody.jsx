"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";

const MobileBody = () => {
  const router = useRouter();

  return (
    <div className="sm:hidden mt-12">
      <article className="flex flex-col gap-8 text-justify break-normal leading-[30px]">
        <section>
          At Oshodi Group, we have cultivated a vast network of local
          distribution channels, whether nestled in bustling urban centers or
          remote rural communities, our distribution network ensures that our
          clients and customers have access to the finest commodities available
          in the market. From small retail outlets to large-scale industries,
          our distribution services are designed to accommodate varying demands
          and facilitate seamless access to quality commodities.
        </section>

        <section>
          Efficiency is the hallmark of our distribution services. We understand
          the importance of timely delivery in meeting the demands of a dynamic
          market. Leveraging our expertise and resources, we ensure that
          commodities are dispatched promptly and reach their destinations
          efficiently, minimizing downtime and maximizing productivity for our
          clients.
        </section>
        <section>
          Contact us today to explore our comprehensive suite of distribution
          services and embark on a satisfactory journey of sourcing for premium
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
