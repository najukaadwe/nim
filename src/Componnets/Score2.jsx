import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Typography, Card } from "@mui/material";

ChartJS.register(ArcElement, Tooltip);

const Score2 = () => {
  const data = {
    datasets: [
      {
        data: [20, 30, 50], 
        backgroundColor: ["#98C1D9", "#5C80BC", "#364F6B"], 
        borderWidth: 0,
        circumference: 180,
        rotation: 270, 
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false }, 
    },
    rotation: -90,
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Card sx={{ ml: "50px", padding: "20px", boxShadow: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", mt: "10px" }}>
        WCAG 2.0/2.1/2.2
      </Typography>
      <Box
        sx={{
          width: "250px",
          height: "190px",
          position: "relative",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "10px",
          margin: "0 auto", // Center the box horizontally
        }}
      >
        <Doughnut data={data} options={options} />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" component="p" mt={5}>
            123
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "red", fontWeight: "bold", marginTop: "-5px" }}
          >
            Requires Manual Check
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
        
            gap: "10px",  // Space between each label
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#98C1D9",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            />
            <Typography variant="caption" sx={{ color: "black" }}>
              A
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#5C80BC",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            />
            <Typography variant="caption">AA</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#364F6B",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            />
            <Typography variant="caption">AAA</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Score2;
