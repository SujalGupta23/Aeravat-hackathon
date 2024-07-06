import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const typewriterRef = useRef(null);
  const words = ["I Host Events.", "Provide Vendors.", "Have Fun."];
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const typewriter = typewriterRef.current;

    if (typewriter) {
      words.forEach((word) => {
        typewriter.typeString(word).pauseFor(1000).deleteAll();
      });

      typewriter.start();
    }
  }, [isReady]);

  useEffect(() => {
    setIsReady(true);

    const interval = setInterval(() => {
      setIsReady((prevIsReady) => !prevIsReady);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Event Me</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100 flex`}>
            <Typewriter
              options={{
                delay: 75,
              }}
              onInit={(typewriter) => {
                typewriterRef.current = typewriter;
              }}
            />
          </div>
        </div>
      </div>

      <ComputersCanvas />

      {/* xs:bottom-10 bottom-32 */}
      <div className="absolute bottom-0 w-full flex justify-center items-center">
        {/* <a href="#about"></a> */}
      </div>
    </section>
  );
};

export default Hero;
