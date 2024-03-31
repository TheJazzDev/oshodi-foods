"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared";
import { ReactTyped } from "react-typed";
import Services from "./services/page";
import Contact from "./contact/page";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <header className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between px-4 sm:px-20 ">
        <div className="w-[22rem] sm:w-[39rem] flex flex-col gap-6 sm:gap-8">
          <h1 className="text-2xl sm:text-6xl sm:w-[42rem] text-primary-blue font-semibold text-balance tracking-wide leading-8 sm:leading-[80px]">
            Discover the <br />
            Best{" "}
            <span className="text-primary-red">
              <ReactTyped
                strings={["Nigerian", "Afro Caribbean"]}
                typeSpeed={150}
                loop
                // startWhenVisible={true}
                showCursor={false}
              />
            </span>
            <br /> Food Products
          </h1>

          <p className="text-primary-gray/75 left-6 sm:leading-8">
            We offer a wide range of food products with over 10 years of
            experience and we have established a network of reliable suppliers
            and partners in Nigeria and abroad. We guarantee fast delivery,
            competitive prices, and excellent customer service for every order
            you place with us.
          </p>
          <Button
            variant="primary"
            className="w-fit px-16 py-3 font-semibold hidden sm:block"
            onClickHandler={() => router.push("/services")}
          >
            Explore our Services
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src="/images/header-img.png"
            width={573}
            height={567}
            alt="African foodstuff"
          />
        </div>

        <Button
          variant="primary"
          className="w-fit px-16 py-3 self-center font-semibold sm:hidden"
          onClickHandler={() => router.push("/services")}
        >
          Explore our Services
        </Button>
      </header>

      <section className="block sm:flex items-center gap-[7.5rem] mx-4 sm:mx-0 sm:px-20 bg-primary-blue py-8 sm:py-[7.5rem] text-white mt-12 sm:mt-28">
        <div className="hidden sm:block rounded-lg overflow-hidden border-2 border-transparent">
          <Image
            src="/images/distribution.png"
            width={506}
            height={558}
            alt="Delivery of goods"
          />
        </div>
        <div className="sm:w-[653px]">
          <p className="text-center sm:text-start text-base sm:text-[28px] font-semibold">
            About us
          </p>
          <p className="mt-4 sm:mt-[4.5rem] text-xs sm:text-lg px-6 sm:px-0 tracking-wider sm:tracking-wide sm:leading-8 text-white/80">
            Oshodi Group, founded in 2013, pioneers transformation in the
            commodity industry under CEO Mr. Oshodi's visionary leadership. With
            integrity and excellence, we navigate the market, ensuring
            transparent, reliable transactions. Expect us to deliver on
            promises, offering expertise derived from years of experience. Our
            global reach and local focus champion both local and international
            success, shaping a future of growth and prosperity. Join us on this
            transformative journey, where trust and innovation drive
            unparalleled results.
          </p>
        </div>
      </section>

      <section className="mt-16 sm:mt-28">
        <Services />{" "}
      </section>

      <section className="mt-12 sm:mt-14">
        <Contact />
      </section>
    </>
  );
};

export default Home;
