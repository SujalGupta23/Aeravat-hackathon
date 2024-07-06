import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, lsocial, gsocial, code } from "../assets";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [loginUrl, setLoginUrl] = useState("/login"); // Define the URL for login
  const [analysisUrl, setAnalysisUrl] = useState("/analysis");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            className="w-9 h-9 bg-white my-3 mx-5"
            animate={{
              scale: [1, 1, 1.3, 1.3, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <SlCalender
              className=" grid place-items-center h-9 w-9 bg-primary rounded-full"
              size={30}
            />
          </motion.div>
          <p className="text-white text-3xl font-bold cursor-pointer flex">
            Event Me &nbsp;
            <span className="md:block hidden text-3xl">| Sportoholic</span>
          </p>
        </Link>

        {/* Laptop */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title} </a>
            </li>
          ))}
          {/* Add the Login link */}
          <li
            className={`${
              active === "Login" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive("Login");
            }}
          >
            <Link to={loginUrl}>Login</Link>
          </li>
          <li
            className={`${
              active === "Analysis" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive("Analysis");
            }}
          >
            <Link to={analysisUrl}>Analysis</Link>
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title} </a>
                </li>
              ))}
              {/* Add the Login link */}
              <li
                className={`${
                  active === "Login" ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px] `}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Login");
                }}
              >
                <Link to={loginUrl}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
