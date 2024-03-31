"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";

const MobileBody = () => {
  const router = useRouter();

  return (
    <div className="sm:hidden mt-12">
      <article className="flex flex-col gap-8 text-justify break-normal leading-[30px]">
        <section>
          Oshodi Foods offers comprehensive market consulting services tailored
          to guide you through the intricate process of exporting goods to the
          UK and Europe. Our step-by-step approach ensures a seamless and
          successful export journey. Here’s how we support you at every stage:
        </section>
        <section>
          <p className="text-primary-blue font-semibold">
            Initial Consultation and Market Analysis
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-1">
              Understanding Your Objectives: We start with a detailed discussion
              to grasp your goals, target markets, and the products you're
              looking to export.
            </li>
            <li>
              Market Research: Conducting in-depth market research, we identify
              demand, competition, and optimal pricing strategies for your food
              items in the UK and European markets.
            </li>
          </ul>
        </section>
        <section>
          <p className="text-primary-blue font-semibold">
            Sourcing and Price Analysis"
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-1">
              Product Sourcing: Leveraging our extensive network, we assist in
              sourcing high-quality food items directly from reputable producers
              and suppliers.
            </li>
            <li>
              Price Optimisation: Our experts analyse current market prices to
              ensure you source your products cost-effectively, enhancing your
              profit margins.
            </li>
          </ul>
        </section>
        <section>
          <p className="text-primary-blue font-semibold">
            Documentation and Compliance
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-1">
              Regulatory Guidance: We offer detailed advice on necessary export
              documentation, including health certificates, export licences, and
              other regulatory paperwork.
            </li>
            <li>
              Compliance Checks: Ensuring your products meet UK and European
              regulations for food safety and standards, advising on any
              adjustments needed.
            </li>
          </ul>
        </section>
        <section>
          <p className="text-primary-blue font-semibold">Logistics Planning</p>
          <ul className="list-disc ml-6">
            <li className="mb-1">
              Calculating Weight and Volume: Assistance in determining the
              weight and volume of your shipment is crucial for logistics
              planning and cost calculations.
            </li>
            <li>
              Permitted Items Verification: We verify that your food items are
              permitted for import into the UK and Europe, ensuring a smooth
              customs process.
            </li>
          </ul>
        </section>

        <section>
          <p className="text-primary-blue font-semibold">
            Shipping and Transportation
          </p>
          <ul className="list-disc ml-6">
            <li>
              Selecting the Right Shipping Option: Based on your shipment's
              size, budget, and timeline, we guide you in choosing the most
              suitable shipping method, be it air freight or sea freight.
            </li>
            <li>
              Export Preparation: Guidance on preparing your shipment for
              export, ensuring it meets all shipping and customs requirements.
            </li>
          </ul>
        </section>
        <section>
          <p className="text-primary-blue font-semibold">
            Tracking and Updates
          </p>
          <ul className="list-disc ml-6">
            <li>
              Shipment Tracking: We provide tools and regular updates for
              tracking your shipment, keeping you informed every step of the
              way.
            </li>
          </ul>
        </section>
        <section>
          <p className="text-primary-blue font-semibold">Customs Clearance</p>
          <ul className="list-disc ml-6">
            <li className="mb-1">
              Assistance with Customs in the UK/Europe: Our team aids in the
              customs clearance process, ensuring your goods are cleared
              efficiently.
            </li>
            <li>
              Duty and Tax Guidance: Advice on applicable duties and taxes,
              helping you understand the financial aspects of clearing your
              goods.
            </li>
          </ul>
        </section>
        <section>
          <p className="text-primary-blue font-semibold">
            Market Entry and Sales
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-1">
              Finding Buyers: Utilising our network, we help you connect with
              reliable buyers and distributors in the UK and Europe.
            </li>
            <li>
              Direct Sales Option: If preferred, Oshodi Foods can directly sell
              your goods through our established channels, acting as your sales
              agent.
            </li>
          </ul>
        </section>
        <section>
          <p className="text-primary-blue font-semibold">Post-Sale Support</p>
          <ul className="list-disc ml-6">
            <li className="mb-1">
              Gathering Feedback: We collect feedback post-sale to help you
              enhance product quality, packaging, or other aspects for future
              shipments.
            </li>
            <li>
              Exploring Market Expansion: Based on the success of your initial
              exports, we look into expanding your product range and exploring
              new market opportunities.
            </li>
          </ul>
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
