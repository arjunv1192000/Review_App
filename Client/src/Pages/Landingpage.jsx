import React from 'react';
import { Box, Stack } from '@mui/material';
import backgroundImage from '../assets/background.jpg';
import Landingtext from '../Components/Landingtext';
import LandingImage from '../Components/LandingImage';


function Landingpage() {
  
  return (
    <>
      <Box sx={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', width: '100%', height: 850, display: 'flex', flexDirection: 'column' }}>
        <Stack direction={'row'} sx={{ marginTop: '200px', marginLeft: '40px' }}>
          <Landingtext />
          <LandingImage/>
        </Stack>
      </Box>
    </>
  );
}

export default Landingpage;
