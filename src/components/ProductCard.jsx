import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '../utils';

export const CardProduct = ({ index, title, icon }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="green-pink-gradient p-px rounded-2xl sm:w-[360px] w-full h-full"
      >
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className='w-full bg-tertiary p-[1px] rounded-2xl shadow-card'
        >
          <div className='relative flex justify-center'>
            <img src={icon} alt='web-development' className='w-80 object-contain' />
          </div>
          <div className='mt-5'>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};