import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import doctor from "../../img/doctor.png";
import bg from "../../img/appointment-bg.png";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, 0.8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 150,
};

const AppointmentBanner = () => {
  return (
    <div>
      <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: 400, marginTop: "-110px" }}
              src={doctor}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'}}>
            <Box>
              <Typography variant="h6" sx={{mb: 2}} style={{ color: "#5ce7ed" }}>
                Appointment
              </Typography>
              <Typography variant="h4" sx={{mb: 2}} style={{ color: "white" }}>
                Make An Appointment Today
              </Typography>
              <Typography sx={{mb: 2}} style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident officia ad atque soluta blanditiis error omnis,
                molestiae beatae doloribus autem.
              </Typography>
              <Button variant="contained">Learn More</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AppointmentBanner;
