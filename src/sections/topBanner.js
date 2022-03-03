import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
// import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
// import Chip from '@mui/material/Chip'
import '@fontsource/roboto/300.css';

export default class TopBanner extends React.Component {
    render(){
        return (
            <div>
                <Box sx={{ p: 2, display: 'flex' }}>
                    <img alt="Remy Sharp" height ={39} width={170} src='https://www.myitshwewah.com/uploads/6/0/3/6/60366863/full-logo-horizontal_2.png' />
                    <Stack spacing={0.5}>
                        <Typography variant="body2" color="text.secondary">
                        {/* <LocationOn sx={{color:'primary'}} /> Scranton, PA */}
                        </Typography>
                    </Stack>
                    <IconButton>
                    {/* <Edit sx={{ fontSize: 14 }} /> */}
                    </IconButton>
                </Box>
                {/* <Divider />
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                    <Chip>Active account</Chip>
                    <Switch />
                </Stack> */}
            </div>
        );
    }
}

