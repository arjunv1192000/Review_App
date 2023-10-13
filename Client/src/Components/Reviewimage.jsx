import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utils/motion";
import { SectionWarapper } from "../Hoc";
import { styled } from "@mui/material/styles";

const StyledSection = styled("div")(({ theme }) => ({
    width: "70%",
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    marginTop:200,
    marginLeft:60,
   
  }));

function Reviewimage() {
  return (
    <motion.div variants={fadeIn("rignt", "spring", 0.75)}>
      <StyledSection>
        <img
          src="https://www.multipz.com/images/hire-developer.png"
          alt="login"
        />
      </StyledSection>
    </motion.div>
  );
}

export default SectionWarapper(Reviewimage);
