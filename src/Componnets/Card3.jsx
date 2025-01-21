import React from 'react'
import { Box, Typography, Chip, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
function Card3() {
  return (
    <div>
         <Box
                    sx={{
                      width: '100%',
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
                        padding: 1.5,
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                    Images
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: '#ffffff',
                        padding: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip
                          icon={<CheckCircleIcon sx={{ color: 'green' }} />}
                          label={`6 Passed`}
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
                          label={`1 Failed`}
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
    </div>
  )
}

export default Card3