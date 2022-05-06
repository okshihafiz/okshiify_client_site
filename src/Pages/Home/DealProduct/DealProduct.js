import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import headphone1 from "../../../Images/headerphone1.png";

const DealProduct = () => {
  const useStyles = makeStyles({
    dealArea: {
      border: "1px solid #E1E1E1",
      padding: "20px 26px",
      margin: "30px 0",
    },
  });

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Box className={classes.dealArea}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", padding: "10px 0" }}
            gutterBottom
            component="div"
          >
            DEAL OF THE DAYS PRODUCTS
          </Typography>
          <hr />

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box
                sx={{
                  padding: "50px 0",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "90%",
                  paddingTop: "60px",
                }}
              >
                <img width="100%" src={headphone1} alt="" />
              </Box>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.dealArea}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", padding: "10px 0" }}
            gutterBottom
            component="div"
          >
            Best Selling
          </Typography>
          <hr />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DealProduct;
