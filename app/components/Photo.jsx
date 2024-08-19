import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute"
        >
            <Image 
              src="/ProfileImage.png" 
              priority
              fill 
              quality={100}
              alt=""
              className="object-contain" />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253"
            r="250"
            stroke="#dda15e"
            strokeWidth="7"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray:["120 45 15 45"],
              rotate:[220, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType:"reverse",
            }}
          >
          </motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
