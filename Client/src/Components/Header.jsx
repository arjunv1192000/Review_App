import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: '#3C6FF5',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  margin: '5px',
  cursor: 'pointer',
};

function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)',borderRadius:3,marginTop:1,width:"95%", marginRight: 5}}>
      <Toolbar>
        <img src="https://avatarmedia.com.au/wp-content/uploads/2022/01/social.png" alt="Logo" style={{ width: 60, height: 80,margin:10 }} />
        <Typography variant="h6" component="div" color={"#1976d2"} sx={{fontWeight:1000}}>
        QuickReview
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
        <Link to="/home">
            <button style={buttonStyle}>Home</button>
          </Link>
          <Link to="/Reviewform">
            <button style={buttonStyle}>Add Review</button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;