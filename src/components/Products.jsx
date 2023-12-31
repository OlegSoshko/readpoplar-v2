import { motion } from 'framer-motion';

import { styles } from '../styles';
import { products } from '../constants';
import { fadeIn, textVariant } from '../utils';

import { ProductCard } from './ProductCard';
import { SectionWrapper } from '../hoc';

const Products = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>База для мерча</p>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Мы ценим ваше время, поэтому уже разработали стильные и удобные лекала, продумав каждую деталь. Остается только определиться с дизайном, и можно запускать мерч в производство.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-7">
          {products.map((product, index) => (
            <ProductCard key={product.id} index={index} title={product.title} icon={product.icon} />
          ))}
        </div>
    </>
  );
};

export default SectionWrapper(Products, 'products');
