import MobileHeader from "./mobileHeader";
import Header from "./header";

const About = () => {
  return (
    <div className="px-4 sm:px-20">
      <h1 className="text-center text-lg sm:text-[2.5rem] text-primary-blue font-medium">
        About Us
      </h1>

      <section className="flex flex-col sm:flex-row-reverse items-center gap-14 sm:gap-[4.75rem] mt-8 sm:mt-20">
        <MobileHeader />
        <Header />

        <section className="flex flex-col gap-6 sm:gap-10 sm:w-[42.5rem]">
          <article className="text-justify">
            <p className="text-primary-blue text-lg sm:text-xl mb-6 font-semibold">
              Who are we...?
            </p>
            <p>
              At Oshodi Group, we are not just a company; we are architects of
              transformation in the commodity industry. Since 2013, our journey
              has been one of unwavering dedication and visionary leadership.
              Guided by our dynamic CEO, Mr. Oshodi, whose innovative spirit and
              strategic prowess have propelled us to the forefront of
              excellence, we stand as a beacon of integrity, reliability, and
              unparalleled expertise.
            </p>
          </article>
          <article className="text-justify">
            <p className="text-primary-blue text-lg sm:text-xl mb-6 font-semibold">
              What we do...?
            </p>
            <p>
              At Oshodi Group, integrity, transparency, and excellence are the
              pillars upon which we stand. We conduct our business with
              unwavering honesty, ensuring that every transaction upholds the
              highest ethical standards. Our relentless pursuit of excellence
              drives us to continually innovate, adapt, and exceed expectations
              in all aspects of our work.
            </p>
          </article>
          <article className="text-justify break-normal">
            <p className="text-primary-blue text-lg sm:text-xl mb-6 font-semibold">
              What you can expect...?
            </p>
            <p>
              Our commitment extends beyond mere transactions; it's about
              building lasting relationships based on trust and mutual success.
              We are dedicated to understanding the unique needs of our clients
              and partners, providing great value to address these needs.
            </p>
          </article>

          <article>
            <p className="mb-6">
              When you choose Oshodi Group, you can expect:
            </p>
            <ul className="flex flex-col gap-4 list-disc ml-4 sm:ml-8">
              <li>
                <span className="text-primary-blue font-semibold">
                  Reliability:
                </span>{" "}
                Our track record speaks for itself. We deliver on our promises,
                consistently meeting deadlines and exceeding expectations to
                ensure seamless operations for our partners.
              </li>
              <li>
                <span className="text-primary-blue font-semibold">
                  Expertise:{" "}
                </span>
                With years of experience and industry knowledge, we are experts
                in navigating the complexities of the commodity market,
                providing invaluable insights and guidance to our clients.
              </li>
              <li>
                <span className="text-primary-blue font-semibold">
                  Global Reach, Local Focus:{" "}
                </span>
                While our sights are set on the global market, we remain deeply
                rooted in Africa market, championing local producers and
                businesses to thrive in both domestic and international arenas.
              </li>
            </ul>
          </article>
        </section>
      </section>
    </div>
  );
};

export default About;
