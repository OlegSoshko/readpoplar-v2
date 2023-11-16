import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '../utils';

export const CardProduct = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[350px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] p-px min-h-[280px] flex flex-col items-center'
          options={{
          max: 45,
          scale: 1,
          speed: 450
        }}>
          <img src={icon} alt='web-development' className='w-80 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
