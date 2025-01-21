import React from "react";
import {  Typography, Box, LinearProgress } from "@mui/material";

function Loadingscreen() {
  return (
    <Box sx={{  background: "linear-gradient(to left, #fff, #f5eafc)",}}>
      <Typography variant="h4" sx={{ fontWeight: "bold",pt:"70px", textAlign: "center" }}>
        SKYNET TECHNOLOGIES
      </Typography>
      <Typography variant="h5" sx={{ color: "purple", textAlign: "center" }}>
        Accessibility Checker
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "160px",
          minHeight: "85vh",
         
          textAlign: "center",
          padding: 2, 
        }}
      >
         <Typography
          variant="body1"
          sx={{ marginBottom: 2, fontSize: "1rem", color: "textSecondary" }}
        >
          We may take a few minutes to analyze the web page for accessibility issues
        </Typography>

        <LinearProgress
          variant="indeterminate"
          sx={{
            width: "100%",
            maxWidth: "600px",
            height: "8px",
            backgroundColor: "#f0f0f0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#6200ea", 
            },
            borderRadius: "4px",
          }}
        />
      </Box>
    </Box>

  );
}

export default Loadingscreen;
