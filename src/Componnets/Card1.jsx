import React from 'react'
import { Gauge } from '@mui/x-charts/Gauge';
import { Card, Typography } from "@mui/material";

function Card1() {
  return (
    <div>
          <Card sx={{height:"150px" , width:"200px" , marginLeft:"30px" ,padding:"20px"}} m={5}>
    <Typography variant="h6" textAlign={"center"}>Accessbility Score</Typography>
  <Gauge  height={100} value={90} startAngle={-90} endAngle={90} />
  </Card>
    </div>
  )
}

export default Card1