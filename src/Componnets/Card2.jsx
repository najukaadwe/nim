import React, { useState, useEffect } from 'react';
import { Box, Card, Container } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loadingscreen from './Loadingscreen';
import { Note } from './Note';
import ClickbleCom from './ClickbleCom';
import Score2 from './Score2';
import Score from './Score';
import Grid from '@mui/material/Grid2';
function Card2() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const [url, setUrl] = useState(location.state?.url || "");
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!url) return;

    const dataCall = async () => {
      try {
        const postData = {
          url: url,
          is_first: 1,
        };

        const response = await axios.post(
          "https://freeaccessibilitychecker.skynettechnologies.com/api/check-page-compliance-new",
          postData,
          { headers: { "Content-Type": "application/json" } }
        );
        const groupData = response.data.group_data;
        const groupKeys = Object.keys(groupData);

        const combinedData = groupKeys.map((key) => {
          const dataArray = groupData[key];
          const totalSuccess = dataArray.reduce((sum, item) => sum + item.total_success, 0);
          const totalError = dataArray.reduce((sum, item) => sum + item.total_error, 0);

          return { type: key, total_success: totalSuccess, total_error: totalError };
        });

        setData(combinedData);
      } catch (err) {
        setError("Error fetching data, please check the URL.");
        console.error(err);
      }
    };

    dataCall();
  }, [url]);
  
  return (
    <div>
      {data.length === 0 ? (
        <Loadingscreen />
      ) :
        <>
          <Box sx={{}}>
            <Header />
            <Note />
            <Container sx={{my:"20px"}}>
            <Grid container>  
              <Grid item xs={4}>
                <Score />
              </Grid>
              <Grid item xs={4}>
                <Score2 />
              </Grid>
            </Grid>
            </Container>
          
            <Card sx={{ mt: "40px" }}>
              <Container>
                {
                  <ClickbleCom data={data} />

                }
              </Container>
            </Card>
            <Footer />
          </Box>
        </>

      }


    </div>
  );
}

export default Card2;
