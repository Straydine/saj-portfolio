import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { focus } from '../constants';

const FocusCard = ({ index, focus }) => (
  <motion.div
    key={focus.name} // Ajoutez la prop "key" avec une valeur unique
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]"></p>
    <div className="mt-1">
      <h2 className="text-white tracking-wider text-[18px]">{focus}</h2>
    </div>
  </motion.div>
);

const Focusbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Explorez mes domaines d'intérêt diversifiés</p>
          <h2 className={styles.sectionHeadText}>Centres d'intérêt.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {focus.map((focus, index) => (
          <FocusCard key={index} index={index} {...focus} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(Focusbacks, "focusback");