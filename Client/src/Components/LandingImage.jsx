import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utils/motion";
import { SectionWarapper } from "../Hoc";
import { styled } from "@mui/material/styles";

const StyledSection = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  marginLeft: 300,
}));

function LandingImage() {
  return (
    <motion.div variants={fadeIn("rignt","spring",0.75)}>
         <StyledSection>
      <img
        src="https://global-uploads.webflow.com/62861fb0faf45bf95f09d5c2/632086e968ab2da6923f5d66_digital_product.webp"
        alt="login"
      />
    </StyledSection>

    </motion.div>
   
  );
}

export default SectionWarapper(LandingImage) ;
