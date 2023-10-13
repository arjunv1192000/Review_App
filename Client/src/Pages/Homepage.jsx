import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Box, Stack, Grid } from "@mui/material";
import Reviewcard from "../Components/Reviewcard";
import axios from "../Axios/axios";
import avatar1 from "../assets/1.png";
import avatar2 from "../assets/3.png";
import avatar3 from "../assets/4.png";
import avatar4 from "../assets/7.png";
import avatar5 from "../assets/8.png";

const avatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5];

function Homepage() {
  const [reviews, setReviews] = useState([]);

  const fetchData = () => {
    axios
      .get("/Getreviews")
      .then((response) => {
        console.log(response.data.reviews);
        setReviews(response.data.reviews);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Stack >
        <Header />
        <Box
          sx={{
            width: "95%",
            height: "auto",
            borderRadius: 6,
            backgroundColor: "white",
            marginLeft: 5,
            marginTop: 15,
            boxShadow: 10,
            zIndex: 1,
           
          }}
        >
          <Stack direction={"row"} margin={4} spacing={2} sx={{marginLeft:15}}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ padding: 5 }}
            >
              {reviews.map((review) => {
                
                const randomAvatarImage = avatarImages[Math.floor(Math.random() * avatarImages.length)];

                return (
                  <Reviewcard
                    key={review._id}
                    id={review._id}
                    name={review.name}
                    email={review.email}
                    rating={review.userExperienceRating}
                    usageFrequency={review.usageFrequency}
                    mainAppGoals={review.mainAppGoals}
                    improvements={review.improvements}
                    dob={review.dateOfBirth}
                    avatar={randomAvatarImage}
                    fetchData={fetchData}
                  />
                );
              })}
            </Grid>
          </Stack>
        </Box>
        <Footer />
      </Stack>
    </>
  );
}

export default Homepage;
