import { motion } from 'framer-motion';

import { textVariant } from '../utils';
import { styles } from '../styles';
import { advantages } from '../constants';

import { AdvantageCard } from './AdvantageCard';
import { SectionWrapper } from '../hoc';

const Advantages = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Наши преимущества</p>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {advantages.map((advantage, index) => (
          <AdvantageCard
            key={advantage.id}
            title={advantage.title}
            description={advantage.description}
            icon={advantage.icon}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Advantages, 'advantages');