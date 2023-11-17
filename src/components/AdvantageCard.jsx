import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { fadeIn } from '../utils';

export const AdvantageCard = ({index, icon, title, description }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
      >
        <div className='relative w-[200px] h-[200px] mx-auto'>
          <img
            src={icon}
            alt='Advantage_card_icon'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};
