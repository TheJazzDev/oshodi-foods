"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";

const MobileBody = () => {
  const router = useRouter();

  return (
    <div className="sm:hidden mt-12">
      <article className="flex flex-col gap-8 text-justify break-normal leading-[30px]">
        <section>
          At the heart of our operations lies a meticulously crafted,
          data-driven approach aimed at identifying and sourcing Nigeria's most
          coveted commodities. Our robust intelligence infrastructure empowers
          us to stay ahead of market trends, ensuring that our clients benefit
          from timely and informed decision-making. We offer real-time snapshots
          of market demands both locally and globally.
        </section>
        <section>
          We pride ourselves on fostering direct collaborations with local
          producers, by forging strong partnerships at the grassroots level
          which guarantees the authenticity and quality of our offerings. Our
          commitment to excellence extends to every facet of our operations.
          Through comprehensive quality checks, we meticulously inspect each
          commodity to meet the highest standards. Rest assured, when you engage
          with us, you're investing in uncompromising quality.
        </section>

        <section>
          In navigating the dynamic landscape of commodity procurement, we
          employ market-driven strategies tailored to maximize value for our
          clients. From strategic sourcing to optimized supply chain management.
        </section>
        <p>
          Ready to take your commodity procurement to new heights? Get in touch
          with us today to learn more about our comprehensive suite of services
          and how we can tailor solutions to meet your specific needs.
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
