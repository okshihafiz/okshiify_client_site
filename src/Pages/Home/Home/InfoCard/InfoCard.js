import React from "react";
import { CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
const InfoCard = ({ webInfo }) => {
  const { title, title2, img } = webInfo;
  return (
    <Grid item xs={2} sm={4} md={3}>
      <Card sx={{ minWidth: 275 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img src={img} alt="" />
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid>
              <Typography variant="h6" component="div">
                {title}
              </Typography>
              <Typography  color="text.secondary">
                {title2}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </Grid>
  );
};
export default InfoCard;
