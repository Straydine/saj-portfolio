import React, { useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, source_code_link, }) => {
  const tiltRef = useRef(null); // Create a ref using useRef

  return (
    <Tilt ref={tiltRef} className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Profil.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Je suis actuellement inscrite en Master d'Expert en Système Informatique au CFA INGETIS, 
        je suis motivée à combiner mes études avec une expérience professionnelle enrichissante.
        Avec mes compétences en méthodes agiles, SEO, UML et web design, ainsi que ma maîtrise 
        des outils tels que Figma, Bootstrap et UX, je suis prête à contribuer au succès d'une 
        entreprise. De plus, mon expérience au sein du ministère de l'Intérieur en tant que 
        chargé de projet en SIC/BAF/BCC démontre ma capacité à créer des équipes et à mener 
        des projets à bien.
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
