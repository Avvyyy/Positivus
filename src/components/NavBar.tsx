import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from "../assets/Logo.svg";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Use Case", href: "#use-case" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-grotesk flex flex-col lg:flex-row items-center justify-evenly w-full fixed top-0 bg-white lg:px-20 p-10 lg:py-4 z-50">
      {/* Logo + Toggle Button */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <img src={logo} alt="Positivus Logo" className="w-1/2 sm:w-1/4 lg:w-8/12" />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`text-4xl p-1.5 rounded-md lg:hidden ${
            isOpen ? "bg-primary" : ""
          }`}
          title={isOpen ? "Hide" : "Show"}
        >
          {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex text-black text-lg flex-row items-center gap-6 bg-transparent">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-gray-500">
            <HashLink smooth to={link.href}>{link.label}</HashLink>
          </li>
        ))}
        <Link
          to="/get-started"
          className="bg-white text-black rounded-md p-3 h-13 w-max text-base hover:bg-black ease-in delay-75 transition hover:text-white border"
        >
          Get Started
        </Link>
      </ul>

      {/* Mobile Nav  */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-nav"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col text-black text-lg items-center gap-10 bg-gray p-10 w-full sm:w-10/12 m-10 lg:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href} className="hover:text-gray">
                <HashLink smooth to={link.href}>{link.label}</HashLink>
              </li>
            ))}
            <Link
              to="/get-started"
              className="bg-white text-black rounded-md p-3 h-13 w-max text-base hover:bg-black ease-in delay-75 transition hover:text-white border"
            >
              Get Started
            </Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
