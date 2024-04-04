"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";

const MobileBody = () => {
  const router = useRouter();

  return (
    <div className="sm:hidden mt-12">
      <article className="flex flex-col gap-6 text-justify break-normal leading-[30px]">
        <section>
          Our warehousing facility is at the heart of our service offering,
          designed to cater to a wide range of storage needs. Our focus is on
          practicality, security, and efficiency. Our warehouse is equipped to
          handle various commodities, from non-perishable goods to bulk items,
          ensuring they are stored under suitable conditions. Security protocols
          are in place to safeguard your commodities, and our inventory
          management system is designed to keep track of your goods efficiently.
        </section>
        <section>
          Complementing our warehousing services, our logistics operations are
          tailored to ensure the smooth movement of goods. We utilise a network
          of reliable transportation partners to facilitate timely deliveries.
          We aim to reduce lead times and make the delivery process seamless,
          ensuring your commodities reach their intended destinations promptly.
        </section>

        <section>
          At Oshodi Group, we believe in the power of partnership and the value
          of transparency. We work closely with our clients to understand their
          warehousing and logistics needs, offering tailored solutions that best
          meet those requirements. Our team is dedicated to providing clear
          communication and support throughout the process, ensuring a
          successful partnership. With Oshodi Group, you can trust that your
          commodities are in good hands. Our straightforward approach to
          warehousing and logistics allows you to focus on the core aspects of
          your business, knowing that the storage and transportation of your
          goods are being managed effectively.
        </section>
        <section>
          Learn more about how our warehousing and logistics services can
          support your business. Contact us today to discuss your needs and how
          we can help you achieve your operational goals with our practical and
          reliable warehousing solutions at Oshodi Group.
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
