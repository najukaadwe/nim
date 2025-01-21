import React, { useState } from 'react';
import { Box, TextField, Button, InputAdornment, Typography, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';  
import Grid from '@mui/material/Grid2';
import Card1 from './Card1';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import { Select, MenuItem, FormControl } from '@mui/material';
import Card3 from './Card3';
import Card4 from './Card4';
import Score from './Score';
import Score2 from './Score2';
function Landing() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);  
  const dropdownOptions = [
    "WCAG 2.0, 2.1 & 2.2",
    "ADA Title III",
    "Section 508",
    "California Unruh",
    "Australian DDA",
    "UK Equality Act",
    "EN 301 549",
    "Canada ACA",
  ];
  const [selectedOption, setSelectedOption] = useState("WCAG 2.0, 2.1 & 2.2"); 


  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const navigate = useNavigate();  


  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };


  const handleCheckUrl = () => {
    if (!url) {
      setError("Please enter a URL");  
      return;
    }

   
    navigate('/card2', { state: { url } });
  };

  return (
    <>

      <Grid container spacing={2} >
        <Grid size={6} sx={{    background: "linear-gradient(to right, #fff, #f5eafc)",}}>
          <Box sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            minHeight: '100vh', 
            

          }}>
          

            <Box sx={{display:"flex"}}>
              <Grid container spacing={2} direction="column" >

                <Grid item xs={12} sx={{mt:"60px"}}>
                  {/* <Card1 /> */}
                  <Score/>
                </Grid>
                <Grid item xs={12} sx={{ml:"10px"}}>
                <Card sx={{padding:"20px"}}>    <Card4 /></Card>
                </Grid>


              </Grid>

              <Grid container spacing={2} direction="column">
              <Grid item xs={12} sx={{ml:"30px"}}>
                <Card sx={{padding:"20px"}}>    <Card3 /></Card>
              
                </Grid>
                <Grid item xs={12}>
                  {/* <Card1 /> */}
                  <Score2/>
                </Grid>
              


              </Grid>
            </Box>



          </Box>

        </Grid>
        <Grid size={6} >
          <Typography variant='h4' sx={{ text: "bold", mt: "40px" }}>SKYNET TECHNOLOGIES</Typography>
          <Typography variant='h5' sx={{ color: "purple" }}>Accessibility Checker</Typography>
          <Box sx={{
            display: 'flex',
             ml:"30px",
            alignItems: 'center',
            minHeight: '80vh', 
           

          }}>

            <Box >
              <Typography variant='h4' textAlign={'center'}>Our free <span style={{ color: "purple" }}>ADA</span> and <span style={{ color: "purple" }}>WCAG compliance</span> </Typography>
              <Typography variant='h4' textAlign={'center'}>checker identifies web accessibility issues</Typography>
              <Box sx={{ display: "flex", mt: "30px" ,ml:"50px"}}>

                <TextField
                  id="input-with-icon-textfield"

                  placeholder='Enter Website URL'
                  variant="outlined"
                 
                  value={url}
                  onChange={handleUrlChange} 
                  error={!!error}  
                  helperText={error} 
                  sx={{ marginBottom: 2 }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <TravelExploreIcon />
                        </InputAdornment>
                      ),
                    },
                  }}

                />


                <FormControl >

                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    {dropdownOptions.map((option, index) => (
                      <MenuItem key={index} value={option} sx={{ color: "#9c1ee9" }}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>


              <Button
                variant="contained"

                onClick={handleCheckUrl}
                sx={{ marginBottom: 2, backgroundColor: "#9c1ee9", display: "flex", alignItems: "center" ,ml:"60px"}}
              >
                Start Scan
              </Button>
            </Box>
          </Box>

        </Grid>


      </Grid>

    </>

  );
}

export default Landing;
