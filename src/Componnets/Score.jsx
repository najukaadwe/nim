import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box,  Typography, Card } from '@mui/material';

ChartJS.register(ArcElement, Tooltip);

const Score = () => {

  const data = {
    datasets: [
      {
        data: [90, 10], 
        backgroundColor: ["#3f51b5", "#e0e0e0"],
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
    <Card >
            <Typography variant="h6" sx={{textAlign:"center", mt:"20px"}}>
        Accessibility Score
      </Typography>
    <Box style={{  height: "150px", position: "relative" , padding:"20px"}}>
   
      <Doughnut data={data} options={options} />


      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: "bold", marginTop:"60px"}}> 90%  <br></br> <li style={{color:"red" , listStyleType: "none" }}>Not Compliant</li> </p>
      
      </div>

 
    </Box>
    <Typography
      
        sx={{
         
        fontSize:"14px",
        fontWeight:"bold",
          textAlign:"center"
        }}
      >
        Automated Accessibility score has limitations.{' '}
       
      </Typography>
      <Typography sx={{color:"blue" , textAlign:"center" , mb:"10px",}}>click here to learn more</Typography>
    </Card>

  );
};

export default Score;
