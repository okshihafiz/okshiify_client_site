import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Rating from "react-rating";

const BestSell = ({ bestData }) => {
  // Write style component here
  const useStyles = makeStyles({
    CardBox: {
      background: "none",
      boxShadow: "none",
      display: "flex",
      alignItems: "center",
      marginBottom: "-14px",
    },
  });
  const classes = useStyles();

  //   console.log(bestData);
  const { title, price, img, ratting } = bestData || {};

  return (
    <Grid item xs={12} md={12} sm={12}>
      <Card className={classes.CardBox}>
        <CardMedia
          style={{ width: "24%", height: "17%" }}
          component="img"
          image={img}
          alt="service talk"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Rating
            style={{ color: "#F9BA48" }}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={ratting}
            readonly
          />
          <Typography variant="body1">$ {price}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BestSell;
