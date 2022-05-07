import { Favorite, Grade, RemoveRedEye } from "@material-ui/icons";
import { Box, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
import headphone1 from "../../../Images/headerphone1.png";
import BestSelles from "../BestSelles/BestSelles";

const DealProduct = () => {
  // Count Down state
  const [timeDays, setTimeDays] = useState("00");
  const [timeHours, setTimeHours] = useState("00");
  const [timeMinutes, setTimeMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");

  let interval = useRef();

  // function for countdown
  const startTimer = () => {
    const countDownDate = new Date("August 30, 2030 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
      }
    }, 1000);
  };
  // declear useEffect for one time call startTimer function
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, []);

  const useStyles = makeStyles({
    dealArea: {
      border: "1px solid #E1E1E1",
      padding: "20px 26px 30px 26px",
      margin: "30px 0",
    },
    subscribeBtn: {
      background: "#EF9415",
      color: "#fff",

      "&:hover": {
        background: "#c7790b",
      },
    },
    favoriteBtn: {
      background: "#E6EAEE",
      marginLeft: "10px",
    },
  });

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box className={classes.dealArea}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", padding: "10px 0" }}
            gutterBottom
            component="div"
          >
            DEAL OF THE DAY PRODUCTS
          </Typography>
          <hr style={{ borderTop: "1px solid #e1e1e1" }} />

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
                    marginTop: "16px",
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
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  className={classes.subscribeBtn}
                  variant="contained"
                  color="inherit"
                >
                  Add to Cart
                </Button>
                <Button
                  color="inherit"
                  className={classes.favoriteBtn}
                  variant="text"
                >
                  <Favorite style={{ color: "#171717", fontSize: "26px" }} />
                </Button>
                <Button
                  color="inherit"
                  className={classes.favoriteBtn}
                  variant="text"
                >
                  <RemoveRedEye
                    style={{ color: "#171717", fontSize: "26px" }}
                  />
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "40px",
                }}
              >
                <Box sx={{ marginRight: " 20px" }}>
                  <Typography variant="h6">{timeDays}</Typography>
                  <Typography variant="body2">Days</Typography>
                </Box>
                <Box sx={{ marginRight: " 20px" }}>
                  <Typography variant="h6">{timeHours}</Typography>
                  <Typography variant="body2">Hrs</Typography>
                </Box>
                <Box sx={{ marginRight: " 20px" }}>
                  <Typography variant="h6">{timeMinutes}</Typography>
                  <Typography variant="body2">Min</Typography>
                </Box>
                <Box sx={{ marginRight: " 20px" }}>
                  <Typography variant="h6">{timeSeconds}</Typography>
                  <Typography variant="body2">Sec</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box className={classes.dealArea}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", padding: "10px 0" }}
            gutterBottom
            component="div"
          >
            Best Selling
          </Typography>
          <hr style={{ borderTop: "1px solid #e1e1e1" }} />
          <Box>
            <BestSelles />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DealProduct;
