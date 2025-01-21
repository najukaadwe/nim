import React from "react";
import { AppBar, Toolbar, Typography, Box, Select, MenuItem, Container } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "2px solid #6a1b9a", 
      }}
    >
      <Toolbar>
        <Container>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, padding:"10px" }}>
       
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              SKYNET TECHNOLOGIES
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "#6a1b9a" }}>
              Accessibility Checker
            </Typography>
          </Box>
          <Select
          defaultValue="en"
          variant="outlined"
          sx={{
            marginLeft: "auto",
            color: "#6a1b9a",
            fontWeight: "bold",
            height:"40px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #6a1b9a",
            },
            "& .MuiSvgIcon-root": {
              color: "#6a1b9a",
            },
          }}
        >
          <MenuItem value="en">En</MenuItem>
          <MenuItem value="es">Es</MenuItem>
          <MenuItem value="fr">Fr</MenuItem>
        </Select>
        </Box>
        </Container>
     
      </Toolbar>
    </AppBar>
  );
};

export default Header;
