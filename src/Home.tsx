// Landing Page -Home for Positivus
import { HashLink } from "react-router-hash-link";
import { useRef } from "react";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ServicesBlock from "./components/ServicesBlock";
import heroImage from "./assets/hero-image.svg";
import makeThingsHappen from "./assets/makeThingsHAppen.png";

// image imports for the services section
import seoImage from "./assets/Illustration.svg";
import ppcImage from "./assets/Illustration-1.svg";
import smmImage from "./assets/Illustration-2.svg";
import emImage from "./assets/tokyo-sending-messages-from-one-place-to-another 1.svg";
import ccImage from "./assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg";
import atImage from "./assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg";
import { RxArrowTopRight } from "react-icons/rx";

// Imports for horizontal auto-scroll
import {
  SiNotion,
  SiNetflix,
  SiZoom,
  SiDribbble,
  SiAmazon,
  SiHubspot,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

function Home() {
  // Animation for the case studies
  const carouselRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: carouselRef,
  });
  // const maskImage = useScrollOverflowMask(scrollXProgress);

  const icons = [SiNotion, SiNetflix, SiZoom, SiDribbble, SiAmazon, SiHubspot];

  //Array holding the various services features
  const servicesArray = [
    {
      label: "Search Engine ‍Optimisation",
      image: seoImage,
      link: "#services",
      boxStyling: "grayService",
      textBg: "primary",
    },
    {
      label: "Pay Per Click Advertising",
      image: ppcImage,
      link: "#services",
      boxStyling: "greenService",
      textBg: "white",
    },
    {
      label: "Social Media ‍Marketing",
      image: smmImage,
      link: "#services",
      boxStyling: "blackService",
      textBg: "primary",
    },
    {
      label: "Email ‍Marketing",
      image: emImage,
      link: "#services",
      boxStyling: "grayService",
      textBg: "primary",
    },
    {
      label: "Content Creation",
      image: ccImage,
      link: "#services",
      boxStyling: "greenService",
      textBg: "white",
    },
    {
      label: "Analytics & Tracking",
      image: atImage,
      link: "#services",
      boxStyling: "blackService",
      textBg: "primary",
    },
  ];

  //   Array holding the various case studies
  const caseStudiesArray = [
    {
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: "#case-studies",
    },
    {
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: "#case-studies",
    },
    {
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: "#case-studies",
    },
  ];
  return (
    <div className="font-grotesk px-2 lg:px-24 md:px-12 py-6">
      <NavBar />
      <main className="flex flex-col gap-18 md:gap-36 md:my-36 my-18">
        <div className="grid md:grid-cols-2 md:grid-rows-3 md:gap-2 gap-5 ">
          <h1 className="order-1 heading-text">
            Navigating the digital landscape for success
          </h1>
          <p className="order-3 text-lg">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="button order-4">Book a consultation</button>
          <img
            src={heroImage}
            alt="Image of large speaker - hero image"
            className="order-2 row-span-3 md:w-3/4"
          />
        </div>

        {/* Scroll component */}
        <div className="overflow-hidden w-full">
          <Marquee autoFill={true} loop={0} gradient={false}>
            <div className="flex w-full justify-between gap-10 px-5">
              {[...icons].map((Icon, index) => (
                <Icon
                  key={index}
                  className="text-black text-4xl flex-shrink-0"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </main>

      {/* Services Section */}
      {/* <section id="services" className="md:mb-36 mb-18">
        <div className="flex flex-col md:flex-row gap-5 items-center mb-10">
          <h2 className="h2 flex-1">Services</h2>
          <p className="text-lg ">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {servicesArray.map((service) => {
            return <ServicesBlock {...service} key={service.link} />;
          })}
        </div>
      </section> */}

      <section
        id=""
        className="md:mb-36 mb-18 bg-gray md:flex items-center gap-5 rounded-3xl md:h-90 md:p-20 px-3 py-6"
      >
        <div className="flex flex-col md:gap-8 gap-6">
          <h3 className="h3">Let's make things happen</h3>
          <p className="text-lg">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button type="button" className="button">
            Get your free proposal
          </button>
        </div>
        <img
          src={makeThingsHappen}
          alt="Smiley with stars"
          className="hidden md:inline w-5/12 "
        ></img>
      </section>

      {/* Case Studies Section */}
      <section id="" className="md:mb-36 mb-18">
        <div className="flex flex-col md:flex-row  gap-5 items-center mb-10">
          <h2 className="h2 flex-1">Case Studies</h2>
          <p className="text-lg">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div
          className="bg-black rounded-3xl flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 p-10 gap-10 "
          ref={carouselRef}
        >
          {caseStudiesArray.map((caseStudy, index) => {
            return (
              <div
                key={caseStudy.link}
                className={`flex flex-col justify-between gap-5 text-lg md:pr-5 flex-shrink-0 snap-start w-full h-full bg-primary ${
                  index !== caseStudiesArray.length - 1
                    ? "md:border-r md:border-white"
                    : ""
                }`}
              >
                <p className="text-white ">{caseStudy.text}</p>
                <HashLink
                  smooth
                  to={caseStudy.link}
                  className="text-primary flex items-center"
                >
                  {" "}
                  Learn More <RxArrowTopRight />
                </HashLink>
              </div>
            );
          })}
        </div>
      </section>

      {/* Working process section */}
      <section id="" className="md:mb-36 mb-18">
        <div className="flex flex-col md:flex-row  gap-5 items-center mb-10">
          <h2 className="h2">Our Working Process</h2>
          <p className="text-lg">
            Step-by-step guide to achieving your Business Goals
          </p>
        </div>
        <div></div>
      </section>

      {/* Team section */}
      <section id="" className="md:mb-36 mb-18">
        <div className="flex flex-col md:flex-row  gap-5 items-center mb-10">
          <h2 className="h2 flex-1">Team</h2>
          <p className="text-lg">
            Meet the skilled and experienced team behind our successful digital
            marketing strategie
          </p>
        </div>
        <div></div>
      </section>

      {/* Testimonials section */}
      <section id="" className="md:mb-36 mb-18">
        <div className="flex flex-col md:flex-row  gap-5 items-center mb-10">
          <h2 className="h2">Testimonials</h2>
          <p className="text-lg">
            Hear from our satisfied clients: Read our testimonials to learn more
            about our Digital Marketing services
          </p>
        </div>
        <div></div>
      </section>

      {/* Contact Us section */}
      <section id="" className="md:mb-36 mb-18">
        <div className="flex flex-col md:flex-row  gap-5 items-center mb-10">
          <h2 className="h2">Contact us</h2>
          <p className="text-lg">
            Connect with us: Let's discuss your Digital Marketing needs
          </p>
        </div>
        <div>
          <form>
            <div>
              <div>
                <input type="radio" name="purpose" id="sayHi" value="Say Hi" />
                <label htmlFor="sayHi">Say Hi</label>
              </div>
              <div>
                <input type="radio" name="purpose" id="getAQuote" value="Get A Quote" />
                <label htmlFor="getAQuote">Get A Quote</label>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
