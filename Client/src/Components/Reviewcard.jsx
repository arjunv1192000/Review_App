import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Stack, Box, Modal } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Reviewcard({
  id,
  name,
  email,
  rating,
  usageFrequency,
  improvements,
  mainAppGoals,
  dob,
  avatar,
  fetchData,
}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mappedRating = rating / 2; 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Card
        sx={{ width: 400, borderRadius: 5, marginRight: 3, marginBottom: 3 }}
      >
        <Stack direction={"row"}>
          <Avatar
            alt=""
            src={avatar}
            sx={{ width: 50, height: 50, margin: 3 }}
          />
          <Stack sx={{ marginTop: 3 }}>
            <Typography>{name}</Typography>
            <Typography>{email}</Typography>
            <Rating name="size-medium" value={mappedRating} precision={0.5} readOnly />
          </Stack>
        </Stack>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            " {improvements}"
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
           
            onClick={handleOpenModal}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Card>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 2,
            boxShadow: 6,
            width: 300,
            height: "auto",
            backgroundColor: "white",
            padding: 4,
          }}
        >
          <Stack sx={{ alignItems: "center" }}>
            <Avatar
              alt=""
              src={avatar}
              sx={{ width: 80, height: 80, marginTop: -7, mx: "auto" }}
            />
            <Typography fontSize={21} fontWeight={500} marginTop={2}>
              {name}
            </Typography>
            <Typography fontSize={18} fontWeight={300} marginTop={1}>
              {email}
            </Typography>
            <Rating name="size-medium" value={mappedRating} precision={0.5} readOnly />

            <Typography variant="body2" color="text.secondary">
              " {improvements}"
            </Typography>
            <Typography fontSize={18} fontWeight={300} marginTop={1}>
              App usageFrequency:{usageFrequency}
            </Typography>
            <Typography fontSize={20} fontWeight={300} marginTop={1}>
              MainAppGoals
            </Typography>
            <Typography fontSize={18} fontWeight={300} marginTop={1}>
              {mainAppGoals}
            </Typography>
            <Typography fontSize={18} fontWeight={300} marginTop={1}>
            DOB:{new Date(dob).toLocaleDateString()}
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default Reviewcard;
