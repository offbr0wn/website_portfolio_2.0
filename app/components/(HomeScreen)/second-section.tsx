import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import NextUiCard from '../ui/next-ui-card';

export default function SectionSectionHomeScreen() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start center", "end center"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 1, 0]);
  return (
    
     <div
          ref={ref}
          className="  flex flex-col items-center justify-center   min-h-[80vh]  md:px-[15vw]  "
          id="about"
        >
          <motion.div
            style={{
              opacity: opacity,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* <CardRevelScroll content={content} /> */}
            <NextUiCard />
          </motion.div>
        </div>
    
  );
}
