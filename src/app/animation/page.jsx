'use client';

import { motion } from "framer-motion";

const Animation = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      <motion.div className="w-96 h-96 bg-red-600 rounded" 
      initial={{x:-100}} 
      animation={{x:100}}
      ></motion.div>
    </div>
  );
};
export default Animation;