import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Service from "../Service/Service";
import Fluoride from '../../img/fluoride.png'
import Cavity from '../../img/cavity.png'
import Whitening from '../../img/whitening.png'
import { Typography } from "@mui/material";

const Services = () => {
  const services = [
    {
      name: 'Cavity',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque qui ex, animi laboriosam consequuntur sit ullam voluptates sed exercitationem facere amet dolores, itaque illum. Totam ad tempore pariatur ipsa quas nemo possimus',
      img: Cavity
    },
    {
      name: 'Fluoride',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque qui ex, animi laboriosam consequuntur sit ullam voluptates sed exercitationem facere amet dolores, itaque illum. Totam ad tempore pariatur ipsa quas nemo possimus',
      img: Fluoride
    },
    {
      name: 'Whitening',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque qui ex, animi laboriosam consequuntur sit ullam voluptates sed exercitationem facere amet dolores, itaque illum. Totam ad tempore pariatur ipsa quas nemo possimus',
      img: Whitening
    }
  ]
  
  return (
    <div>
      <Box>
          <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
            Our Services
          </Typography>
          <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
            Services We Provide
          </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
            services.map(service => 
              <Service
                key={service.name}
                service={service}
              ></Service>
            )
          }
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
