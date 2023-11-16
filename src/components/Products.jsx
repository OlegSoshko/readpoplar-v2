import { motion } from 'framer-motion';

import { styles } from '../styles';
import { products } from '../constants';
import { fadeIn, textVariant } from '../utils';

import { CardProduct } from './CardProduct';

export const Products = () => {
  return (
    <div className={`${styles.paddingX} max-w-7xl mx-auto"`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>База для мерча</p>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Мы ценим ваше время, поэтому уже разработали стильные и удобные лекала, продумав каждую деталь. Остается только определиться с дизайном, и можно запускать мерч в производство.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
          {products.map((product, index) => (
            <CardProduct key={product.id} index={index} title={product.title} icon={product.icon} />
          ))}
        </div>
    </div>
  );
};
