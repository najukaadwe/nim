import { Typography, Box, Container } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Container
      maxWidth={false} 
      sx={{
        backgroundColor: "darkblue",
        position: "fixed",
        bottom: 0,
        left: 0,

        color: "white", 
        padding: "10px 0",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{display:"flex"}}>     
          <Typography variant="body2">Privacy Policy</Typography>
          <Typography variant="body2" sx={{ml:"20px"}}>Terms of Service</Typography>
          </Box>

        <Typography>Copyright @  skynettechnologies.com</Typography>

      </Container>
    </Container>
  );
}

export default Footer;
