import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid2';
import { Box, Typography, Chip, Stack } from '@mui/material';
import Score from './Score';
import Score2 from './Score2';
function ClickbleCom({ data }) {
    return (
        <Box sx={{ padding:"40px"}}>
   
            <Typography variant='h4' sx={{textAlign:"center" , my:"15px"}}>Click on Categories to check detail information</Typography>
            <Grid container spacing={2} >
                {data.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={`item-${index}`} >
                        <Box
                            sx={{
                                // width: '300px',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                border: '1px solid #e0e0e0',

                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: '#f4ebff',
                                    textAlign: 'center',
                                    padding: 1,
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold">
                                    {item.type}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    backgroundColor: '#ffffff',
                                    padding: 2,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '300px'
                                }}
                            >
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Chip
                                        icon={<CheckCircleIcon sx={{ color: 'green' }} />}
                                        label={`${item.total_success} Passed`}
                                        sx={{
                                            backgroundColor: 'rgba(144, 238, 144, 0.3)',
                                            color: 'green',
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Stack>

                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Chip
                                        icon={<CancelIcon sx={{ color: 'red' }} />}
                                        label={`${item.total_error} Failed`}
                                        sx={{
                                            backgroundColor: 'rgba(255, 182, 193, 0.3)',
                                            color: 'red',
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </Stack>
                            </Box>

                            <Box
                                sx={{
                                    height: 4,
                                    backgroundColor: 'purple',
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>


        </Box>
    )
}

export default ClickbleCom