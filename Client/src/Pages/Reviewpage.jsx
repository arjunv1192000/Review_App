import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Stack, Typography } from "@mui/material";
import Reviewform from "../Components/Reviewform";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Reviewimage from "../Components/Reviewimage";

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

function Reviewpage() {
  return (
    <>
      <Stack>
        <Header />
        <StyledRoot>
          <Reviewimage />

          <Container maxWidth="sm">
            <StyledContent>
              <Typography
                align="center"
                color="primary"
                gutterBottom
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 700,
                  fontSize:24,
                  margin: "20px 0",
                }}
              >
                Share your thoughts and experiences with us. We value your
                feedback!
              </Typography>
              <Reviewform />
            </StyledContent>
          </Container>
        </StyledRoot>
        <Footer />
      </Stack>
    </>
  );
}

export default Reviewpage;
