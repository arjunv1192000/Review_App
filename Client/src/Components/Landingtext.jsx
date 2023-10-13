import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utils/motion";
import { SectionWarapper } from "../Hoc";
import { useNavigate } from "react-router-dom";

const StyledSection = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

function Landingtext() {
  const navigate = useNavigate();
  const buttonStyle = {
    borderRadius: 8,
    width: 150,
    height: 60,
    marginLeft: 5,
    "&:hover": {
      backgroundColor: "white",
    },
  };
  return (
    <motion.div variants={fadeIn("rignt", "spring", 0.75)}>
      <StyledSection>
        <motion.div variants={textVariant()}>
          <Typography
            variant="h3"
            sx={{ px: 5, mt: 10, mb: 5, color: "white" }}
          >
            Welcome to QuickReview
          </Typography>
          <Typography
            variant="h5"
            sx={{ px: 5, mb: 5, color: "white" }}
          >
            Share your thoughts in a snap with QuickReview. Leave feedback effortlessly.
          </Typography>
        </motion.div>

        <Button
          variant="outlined"
          sx={buttonStyle}
          onClick={() => navigate("/Reviewform")}
        >
          Get started
        </Button>
      </StyledSection>
    </motion.div>
  );
}

export default SectionWarapper(Landingtext);
