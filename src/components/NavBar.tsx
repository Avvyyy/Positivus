// Navbar
import React from "react";
import { RxHamburgerMenu,  RxCross1 } from "react-icons/rx";
import logo from "../assets/Logo.svg";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { AnimatePresence, motion } from "framer-motion" //Used for the animations 


function NavBar () {

    // Navbar links
    const navLinks = [
        {
            label: "About",
            href: "#about"
        },
        {
            label: "Services",
            href: "#services"
        },
        {
            label: "Use Case",
            href: "#use-case"
        },
        {
            label: "Pricing",
            href: "#pricing"
        }, 
        {
            label: "Blog",
            href: "#blog"
        }

    ]

    // usestate for navbar toggling
    const [isOpen, setIsOpen] = useState(false);



    return (
        <nav className="font-grotesk flex items-center justify-between  w-full relative">
            <img src={logo} alt="Positivus Logo" className="w-1/3"/>

            <div className="flex-1"></div>

            <button type="button" onClick={() => setIsOpen(!isOpen)} className={`text-2xl p-1.5 rounded-md md:hidden ${isOpen ? "bg-primary" : ""}`} title={isOpen ? "Hide" : "Show"}>
                {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>

            <AnimatePresence>
            {isOpen && (
            <motion.div
            initial={{ y: 10 }}
            animate={{ y: 170}}
            exit={{ y: 100}}
            className={`md:flex-row bg-gray w-11/12 min-h-content items-center justify-between gap-10 transition ease-in-out ${isOpen ? "flex flex-col absolute p-20" : " "}`}> 
            <ul>
                   {
                    navLinks.map(link => {
                        return (
                            <li key={link.href}>
                                <HashLink smooth to={link.href}>
                                    {link.label}
                                </HashLink>
                            </li>
                        )
                    })
                   }
            </ul>
            </motion.div>
            )}
            </AnimatePresence>
        </nav>
    )
}

export default NavBar;