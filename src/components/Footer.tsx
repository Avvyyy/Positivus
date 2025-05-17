import logoWhite from "../assets/logo-white.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { SiLinkedin, SiX, SiFacebook } from "react-icons/si";

function Footer() {
  const footerLinks = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Use Case",
      href: "#use-case",
    },
    {
      label: "Pricing",
      href: "#pricing",
    },
    {
      label: "Blog",
      href: "#blog",
    },
  ];

  const socials = [
    {
      icon: SiLinkedin,
      link: "https://www.linkedin.com/in/favour-uzochukwu/",
    },
    {
      icon: SiX,
      link: "https://www.x.com/",
    },
    {
      icon: SiFacebook,
      link: "https://www.facebook.com/",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="bg-black rounded-t-3xl text-white md:p-10 p-5 flex flex-col  gap-10 md:gap-20 ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <img src={logoWhite} alt="Positivus white logo" />
        <div className="flex flex-col sm:flex-row justify-evenly items-center md:gap-5 gap-10 text-[16px]">
          {footerLinks.map((link) => (
            <HashLink
              to={link.href}
              key={link.href}
              className="underline underline-offset-4 hover:text-primary"
            >
              {link.label}
            </HashLink>
          ))}
        </div>
        <div className=" hidden lg:flex justify-evenly items-center gap-5 ">
          {socials.map((link) => (
            <Link to={link.link} className="text-3xl hover:text-primary">
              {" "}
              <link.icon />{" "}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly gap-10 items-center">
        <div className="flex flex-col md:w-2/5 gap-5 items-center lg:items-start text-center lg:text-left">
          <h4 className="bg-primary text-black font-bold md:w-max text-xl text-center p-1 rounded-lg">
            Contact Us:
          </h4>
          <span>
            <span className="font-bold">Email: </span>
            <Link to="mailto:info@positivus.com">info@positivus.com</Link>
          </span>
          <span>
           <span className="font-bold">Phone: </span>
            <Link to="tel: 555-567-890"> 555-567-890</Link>
          </span>
          <span>
            <span className="font-bold">Address:</span> <br/> 1234 Main St Moonstone City, Stardust State 12345
          </span>
        </div>
        <div className=" flex lg:hidden text-3xl gap-5 hover:text-primary">
          {socials.map((link) => (
            <Link to={link.link}>
              {" "}
              <link.icon />{" "}
            </Link>
          ))}
        </div>

        <form className="bg-[#292A32] flex-1 rounded-xl flex items-center flex-col md:flex-row justify-center gap-5 p-5 ">
          <input
            name="userEmail"
            id="userEmail"
            placeholder="Email address"
            className="w-full md:w-max  h-16 p-3 placeholder:text-gray border border-white rounded-xl text-lg placeholder:text-lg"
          />
          <button
            type="submit"
            className="bg-primary text-black w-full md:w-max h-16 rounded-xl p-3 text-lg "
          >
            Subscribe to news
          </button>
        </form>
      </div>

      <hr className="border border-white w-full"/>
      <div className="text-sm md:text-lg flex flex-col md:flex-row items-center md:items-start gap-5 text-center">
        &copy; {year} Positivus. All Rights Reserved.{" "}
        <span>
          <Link to="/" className="underline underline-offset-4">
            Privacy Policy
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;
