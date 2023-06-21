import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { cursus } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CursusCard = ({ cursus }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0e1a40",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={cursus.date}
      iconStyle={{ background: cursus.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={cursus.icon}
            alt={cursus.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{cursus.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {cursus.company_name}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Cursus = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Découvrez mon parcours éducatif, jalonné d'apprentissages enrichissants et de réalisations marquantes.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Parcours Scolaire.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {cursus.map((cursus, index) => (
            <CursusCard
              key={`cursus-${index}`}
              cursus={cursus}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Cursus, "cursus");
