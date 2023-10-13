import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../Utils/motion";

const SectionWarapper = (Component,idName) =>
  function HOC() {
    return(
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0.25}}
        >
            <span className="hash-span" id={idName}>&nbsp;</span>

            <Component/> 

        </motion.section>
    )
  };

export default SectionWarapper; 
