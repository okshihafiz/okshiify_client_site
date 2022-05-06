import { Grade } from "@material-ui/icons";
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
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  padding: "60px 50px 50px 0px",
                }}
              >
                <img width="100%" src={headphone1} alt="" />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ padding: "40px 0px 30px 0px" }}>
                <Typography
                  sx={{ fontSize: "20px" }}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Headphone Pro i-stock
                </Typography>
                <Box>
                  <Grade style={{ color: "#F9BA48", fontSize: "18px" }} />
                  <Grade style={{ color: "#F9BA48", fontSize: "18px" }} />
                  <Grade style={{ color: "#F9BA48", fontSize: "18px" }} />
                  <Grade style={{ color: "#F9BA48", fontSize: "18px" }} />
                  <Grade style={{ color: "#F9BA48", fontSize: "18px" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "900",
                    margin: "16px 0",
                    color: "#171717",
                  }}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  $ 277.00
                </Typography>

                <Typography variant="body2" gutterBottom>
                  It is a long established fact that a reader will be distracted
                  by the readable when looking at its layout. The point of using
                  make sure
                </Typography>
              </Box>
            </Grid>
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
