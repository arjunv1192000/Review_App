import { Box, Stack, Typography, Avatar, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSection = styled("div")(({ theme }) => ({
  width: "70%",
  maxWidth: 200,
  display: "flex",
  flexDirection: "column",
  marginTop: 1,
  marginLeft: 60,
}));

function Footer() {
  return (
    <Box sx={{ height: 300, width: "100%", marginTop: 3 }}>
      <Stack>
        <Stack direction={"row"}>
          <Stack marginLeft={5}>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 1000,
                letterSpacing: ".3rem",
                color: "#1976d2",
                textDecoration: "none",
                marginLeft: 4,
                marginTop: 3,
              }}
            >
             QuickReview
            </Typography>
            <Typography
              marginLeft={3}
              marginTop={3}
              fontSize={12}
              fontWeight={400}
              width={300}
            >
            Share your thoughts in a snap with QuickReview. Leave feedback effortlessly
            Join a community of reviewers and gain insights from like-minded individuals
            </Typography>
            <Stack direction={"row"} marginLeft={2} marginTop={2}>
              <Avatar
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                sx={{ width: 50, height: 50, marginTop: 2, marginRight: 2 }}
              />
              <Avatar
                alt=""
                src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png"
                sx={{ width: 50, height: 50, marginTop: 2, marginRight: 2 }}
              />
              <Avatar
                alt=""
                src="https://w7.pngwing.com/pngs/239/740/png-transparent-twitter-logo-icon-twitter-file-logo-social-media-news-thumbnail.png"
                sx={{ width: 50, height: 50, marginTop: 2 }}
              />
            </Stack>
          </Stack>
          <StyledSection>
            <img
              src="https://www.multipz.com/images/contact-img.png"
              alt="login"
            />
          </StyledSection>
          <Typography sx={{marginTop:5,width:600,marginLeft:10}}>
          "At QuickReview, our mission is to empower individuals and communities to make informed decisions by providing a platform for sharing honest and insightful reviews. We believe that everyone's opinions matter, and we're committed to creating a space where users can effortlessly share their thoughts, rate their experiences, and build a community of informed consumers"
           
          </Typography>
        </Stack>

        <Divider sx={{marginTop:2}}></Divider>
        <Divider></Divider>
        <Typography
          marginLeft={5}
          marginTop={2}
          fontSize={10}
          fontWeight={400}
          width={300}
        >
          Copyright © 2023. all right reserved
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
