import React from "react";
import { Button, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

const TopCategorie = ({ topCategories }) => {
  const { title, title2, img } = topCategories;

  //Write here style Component
  const useStyles = makeStyles({
    CardBox: {
      boxShadow: "none",
      display: "flex",
      alignItems: "center",
    },
    viewBtn: {
      color: "#EF9415",
      textTransform: "capitalize",
      padding: "3px 10px",
      marginTop: "4px",
    },
  });
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={3}>
      <Paper elevation={0}>
        <Card className={classes.CardBox}>
          <CardMedia
            style={{ width: "22%", height: "18%", margin: "0px 20px 0px 10px" }}
            component="img"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="button" display="block" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {title2}
            </Typography>
            <Button
              className={classes.viewBtn}
              color="inherit"
              variant="outlined"
            >
              View more
            </Button>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default TopCategorie;
