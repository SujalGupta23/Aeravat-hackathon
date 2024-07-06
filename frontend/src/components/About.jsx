import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom"; // Import Link
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";

const ServiceCard = ({ index, title, icon, link }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <Link to={link}>
          {" "}
          {/* Wrap with Link */}
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </Link>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const services = [
    {
      title: "I'm a Participant",
      icon: web,
      link: "/participantview", // Define link for Participant
    },
    {
      title: "I'm an Organiser",
      icon: mobile,
      link: "/eventorganize", // Define link for Organiser
    },
    {
      title: "I'm a Vendor",
      icon: backend,
      link: "/vendor", // Define link for Vendor
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        "Discover the ultimate hub for sports event hosting. Our platform
        simplifies every aspect of organizing and participating in sports
        events, offering intuitive registration processes, efficient scheduling
        tools, and seamless communication channels. Whether you're a passionate
        athlete seeking thrilling competitions or an event organizer in search
        of a reliable platform, our website provides everything you need to make
        your sports experience unforgettable.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
