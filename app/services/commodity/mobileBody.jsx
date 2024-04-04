"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";

const MobileBody = () => {
  const router = useRouter();

  return (
    <div className="sm:hidden mt-12">
      <article className="flex flex-col gap-6 text-justify break-normal leading-[30px]">
        <section>
          At the core of our operations is a meticulously crafted, data-driven
          approach dedicated to identifying and sourcing Nigeria's most
          sought-after commodities. Our advanced intelligence infrastructure
          positions us at the forefront of market trends, enabling our clients
          to make timely and informed decisions. We specialise in a diverse
          range of commodities, ensuring our clients can access the best the
          market offers.
        </section>
        <section className="flex flex-col gap-4 ">
          <h4 className="font-semibold text-primary-blue">
            Our Commodities Include:
          </h4>
          <ul className="list-disc marker:text-primary-blue ml-8">
            <p className="list-disc font-medium list-item ml-[-12px]">
              Agricultural Products:
            </p>
            <li>Coconuts </li>
            <li>Coffee</li>
            <li>Cashew</li>
            <li>Soybeans</li>
            <li>Palm oil</li>
            <li>Groundnuts</li>
            <li>Cassava Yam</li>
          </ul>
          <ul className="list-disc marker:text-primary-blue ml-8">
            <p className="list-disc font-medium list-item">
              Forestry Products:
            </p>
            <li>Timber</li>
            <li>Plywood</li>
          </ul>
          <ul className="list-disc marker:text-primary-blue ml-8">
            <p className="list-disc font-medium list-item">Minerals:</p>
            <li>Coal</li>
            <li>Limestone</li>
          </ul>
          <ul className="list-disc marker:text-primary-blue ml-8">
            <p className="list-disc font-medium list-item">Metals:</p>
            <li>Steel</li>
            <li>Aluminium</li>
          </ul>
          <ul className="list-disc marker:text-primary-blue ml-8">
            <p className="list-disc font-medium list-item">Others:</p>
            <li>Rubber</li>
            <li>Beverages</li>
          </ul>

          <p className="mt-4">
            Our direct collaborations with local producers and a commitment to
            quality ensure the authenticity and excellence of our offerings,
            from the lush cocoa plantations to the robust coffee farms and from
            the rich palm oil groves to the durable timber forests
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-primary-blue">Why Choose Us?</h4>
          <ul className="list-disc marker:text-primary-blue flex flex-col gap-4 ml-6">
            <li>
              <span className="text-primary-blue font-medium">
                Real-Time Market Insights: {""}
              </span>
              Stay ahead with our real-time snapshots of local and global market
              demands.
            </li>
            <li>
              <span className="text-primary-blue font-medium">
                Quality Assurance: {""}
              </span>
              Every commodity undergoes comprehensive quality checks to meet the
              highest standards.
            </li>
            <li>
              <span className="text-primary-blue font-medium">
                Tailored Solutions: {""}
              </span>
              From strategic sourcing to optimised supply chain management, we
              offer solutions customised to your needs.
            </li>
          </ul>
        </section>
        <p>
          Ready to elevate your commodity procurement strategy? Contact us today
          to discover how our comprehensive suite of services can be tailored to
          meet your specific needs. Whether you're interested in the
          agricultural richness of groundnuts and soybeans, the industrial
          essentials of steel and aluminium, or the unique demands for plywood
          and cassava, we're here to ensure your procurement process is seamless
          and successful.
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
