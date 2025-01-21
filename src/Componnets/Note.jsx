import { Card ,Container,Typography} from '@mui/material'
import React from 'react';
import Switch from '@mui/material/Switch';

export const Note = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <Container>
          <Card sx={{  mt:"20px",padding:"15px", backgroundColor: "darkblue" , display:"flex" , justifyContent:"space-between", alignItems:"cemter",color:"white"}}>
              <Typography>No Accessbility overlay detected. Find out how the All in One Accessbility Would make positive impact on your website</Typography>
              <Switch {...label} defaultChecked color="default" sx={{ml:"20px" }}/>
            </Card>
    </Container>
  )
}
