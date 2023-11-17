import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils';
import { howOrderSteps } from '../constants';

import { HowOrderStep } from './HowOrderStep';

const HowOrder = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Как сделать заказ</p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
        {howOrderSteps.map(step => (
          <HowOrderStep
            key={step.id}
            iconBg={step.iconBg}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(HowOrder, 'how-order');