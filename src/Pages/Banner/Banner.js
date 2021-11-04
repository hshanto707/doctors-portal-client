import React from 'react';
import chair from '../../img/chair.png'
import bg from '../../img/bg.png'
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
  background: `url(${bg })`
}

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 400
}

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perspiciatis nihil quo animi autem harum quaerat cum quos saepe sequi.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#3ce7ed' }}>Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item style={{ verticalCenter }}>
          <img style={{ width: '550px', marginY: 'auto' }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;