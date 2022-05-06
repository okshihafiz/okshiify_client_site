import React from "react";
import { CardMedia, Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const InfoCard = ({ webInfo }) => {
  const { title, title2, img } = webInfo;

  const useStyles = makeStyles({
    CardBox: {
      background: "none",
      boxShadow: "none",
      display: "flex",
      alignItems: "center",
    },
  });
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={3}>
      <Card className={classes.CardBox}>
        <CardMedia
          style={{ width: "15%", height: "15%" }}
          component="img"
          image={img}
          alt="service talk"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title2}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default InfoCard;
