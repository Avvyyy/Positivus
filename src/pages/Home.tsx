// Landing Page -Home for Positivus
import { useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ServicesBlock from "../components/ServicesBlock";
import CaseStudies from "../components/CaseStudies";
import Carousel from "../components/Carousel";
import Team from "../components/Team";
import WorkingProcess from "../components/WorkingProcess";
import heroImage from "../assets/images/hero-image.svg";
import makeThingsHappen from "../assets/images/makeThingsHAppen.png";
// image imports for the services section
import seoImage from "../assets/images/Illustration.svg";
import ppcImage from "../assets/images/Illustration-1.svg";
import smmImage from "../assets/images/Illustration-2.svg";
import emImage from "../assets/images/tokyo-sending-messages-from-one-place-to-another 1.svg";
import ccImage from "../assets/images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg";
import atImage from "../assets/images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg";
import {
  SiNotion,
  SiNetflix,
  SiZoom,
  SiDribbble,
  SiAmazon,
  SiHubspot,
} from "react-icons/si"; // Imports for horizontal auto-scroll
import Marquee from "react-fast-marquee";
import contactUsImage from "../assets/images/contactUsImage.png"; // Imports for contact-us section
import { motion, useInView } from "framer-motion"; // Imports for animation on the entire page

function Home() {
  const heroRef = useRef(null);
  const makeThingsHappenRef = useRef(null);
  const caseStudyRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactUsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: false });
  const isMakeThingsHappenInView = useInView(makeThingsHappenRef, {
    once: false,
  });
  const isCaseStudyInView = useInView(caseStudyRef, { once: false });
  const isTestimonialsInView = useInView(testimonialsRef, { once: false });
  const isContactUsInView = useInView(contactUsRef, { once: false });

  const icons = [SiNotion, SiNetflix, SiZoom, SiDribbble, SiAmazon, SiHubspot];

  //Array holding the various services features
  const servicesArray = [
    {
      label: "Search Engine ‍Optimisation",
      image: ppcImage,
      link: "#services",
      boxStyling: "grayService",
      textBg: "primary",
    },
    {
      label: "Pay Per Click Advertising",
      image: seoImage,
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

  return (
    <div className="font-grotesk py-6">
      <NavBar />

      {/*Hero Menu*/}
      <motion.main
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-18 my-36  px-4 lg:px-24 md:px-12"
      >
        <div className="grid md:grid-cols-2 md:grid-rows-3 md:gap-2 gap-5">
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
            className="order-2 row-span-3 md:w-4/5"
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
      </motion.main>

      {/* Services Section */}
      <motion.section
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        id="services"
        className="md:mb-36 mb-18 px-4 lg:px-24 md:px-12"
      >
        <div className="flex flex-col md:flex-row gap-5 items-center mb-10">
          <h2 className="h2 flex-1">Services</h2>
          <p className="text-lg ">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:space-y-4 ">
          {servicesArray.map((service) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              key={service.link}
            >
              <ServicesBlock {...service} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Lets make things happen section*/}
      <motion.section
        ref={makeThingsHappenRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isMakeThingsHappenInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -50 }
        }
        transition={{ duration: 0.8 }}
        className="md:mb-36 mb-18 bg-gray md:flex items-center gap-5 rounded-3xl md:h-90 md:p-20 py-6 px-4 lg:px-24 md:px-12 md:w-10/12 w-11/12 m-auto"
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
      </motion.section>

      {/* Case Studies Section */}
      <motion.section
        ref={caseStudyRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isCaseStudyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
        }
        transition={{ duration: 0.8 }}
        id="use-case"
        className="md:mb-36 mb-18  px-4 lg:px-24 md:px-12"
      >
        <div className="flex flex-col md:flex-row  gap-5 items-center mb-10">
          <h2 className="h2 flex-1">Case Studies</h2>
          <p className="text-lg">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <CaseStudies />
      </motion.section>

      {/* Working process section */}
      <section id="" className="md:mb-36 mb-18  px-4 lg:px-24 md:px-12">
        <div className="flex flex-col md:flex-row  gap-5 items-center mb-10">
          <h2 className="h2">Our Working Process</h2>
          <p className="text-lg">
            Step-by-step guide to achieving your Business Goals
          </p>
        </div>
        <div>
          <WorkingProcess />
        </div>
      </section>

      {/* Team section */}
      <motion.section
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        id=""
        className="md:mb-36 mb-18  px-4 lg:px-24 md:px-12"
      >
        <div className="flex flex-col md:flex-row  gap-5 items-center mb-10">
          <h2 className="h2 flex-1">Team</h2>
          <p className="text-lg">
            Meet the skilled and experienced team behind our successful digital
            marketing strategie
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <Team />
          <button type="button" className="button place-self-end-safe">
            See all team...
          </button>
        </div>
      </motion.section>

      {/* Testimonials section */}
      <motion.section
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
        }
        transition={{ duration: 0.8 }}
        id=""
        className="md:mb-36 mb-18 px-4 lg:px-24 md:px-12"
      >
        <div className="flex flex-col md:flex-row  gap-5 items-center lg:mb-10 mb-5">
          <h2 className="h2">Testimonials</h2>
          <p className="text-lg">
            Hear from our satisfied clients: Read our testimonials to learn more
            about our Digital Marketing services
          </p>
        </div>
        <div>
          <Carousel />
        </div>
      </motion.section>

      {/* Contact Us section */}
      <motion.section
        ref={contactUsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isContactUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
        }
        transition={{ duration: 0.8 }}
        id=""
        className="md:mb-36 mb-18  px-4 lg:px-24 md:px-12"
      >
        <div className="flex flex-col md:flex-row  gap-5 items-center mb-10">
          <h2 className="h2">Contact us</h2>
          <p className="text-lg">
            Connect with us: Let's discuss your Digital Marketing needs
          </p>
        </div>

        <div className="md:mb-36 mb-18 bg-gray rounded-3xl md:p-10 p-3 m py-6 w-full relative overflow-x-hidden">
          <form className="flex flex-col gap-5 w-full lg:w-1/2">
            <div className="flex gap-10">
              <div className="flex gap-1">
                <input
                  type="radio"
                  name="purpose"
                  id="sayHi"
                  value="Say Hi"
                  className="accent-primary scale-150 checked:border border-black"
                />
                <label htmlFor="sayHi">Say Hi</label>
              </div>
              <div className="flex gap-1">
                <input
                  type="radio"
                  name="purpose"
                  id="getAQuote"
                  value="Get A Quote"
                  className="accent-primary scale-150 checked:border border-black"
                />
                <label htmlFor="getAQuote">Get A Quote</label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-black rounded-lg outline-primary h-10 w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-black rounded-lg outline-primary h-10 w-full bg-white"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message *</label>
              <textarea
                name="message"
                id="messsage"
                placeholder="Message"
                className="border border-black rounded-lg outline-primary h-40 w-full bg-white"
                required
              ></textarea>
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>

          <img
            className="hidden lg:inline place-self-end-safe absolute top-0 left-[70%] h-full"
            src={contactUsImage}
          />
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default Home;
