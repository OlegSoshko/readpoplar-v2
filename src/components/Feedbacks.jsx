import { motion } from 'framer-motion';

import { textVariant } from '../utils';
import { styles } from '../styles';
import { testimonials } from '../constants';

import { FeedbackCard } from './FeedbackCard';
import { SectionWrapper } from '../hoc';

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Отзывы</p>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {testimonials.map((feedback, index) => (
          <FeedbackCard
            key={feedback.id}
            index={index}
            name={feedback.name}
            testimonial={feedback.testimonial}
            company={feedback.company}
            image={feedback.image}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, 'feedbacks');