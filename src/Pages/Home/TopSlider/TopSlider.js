import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import p1 from "../../../Images/SliderImages/p1.png";
import p2 from "../../../Images/SliderImages/p2.jpg";
import p3 from "../../../Images/SliderImages/p3.jpg";
import clsx from "clsx";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

// import required modules
import { Pagination } from "swiper";
import "./styles.css";
import { Box, Button, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const TopSlider = () => {
  const theme = useTheme();

  const useStyles = makeStyles({
    sliderWrapper: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "100%",
      justifyContent: "flex-start",
    },
    title: {
      fontSize: "46px",
      marginBottom: "16px",
    },
    secondTitle: {
      fontSize: "46px",
      marginBottom: "16px",
      color: "#fff",
    },
    rightBox: {
      flex: 1,
      textAlign: "left",
      marginLeft: "20px",
      width: "55%",
    },
    leftBox: {
      width: "45%",
    },
    des: {
      letterSpacing: "1.9px",
      fontSize: "18px",
      margin: "14px 0",
    },
    shopBtn: {
      padding: "8px 12px",
      background: "transparent",
      border: "1px solid #555",
      borderRadius: "0px",
      marginTop: "10px",
    },
    secondShopBtn: {
      padding: "8px 12px",
      background: "transparent",
      borderRadius: "0px",
      marginTop: "10px",
      color: "#fff",
      border: "1px solid #fff",
    },
    firstBg: {
      background: "#96aa9170",
    },
    secondBg: {
      background: "#291419",
    },
    thirdBg: {
      background: "#bda490c7",
    },
  });

  const classes = useStyles();

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >
        <SwiperSlide className={clsx(classes.sliderWrapper, classes.firstBg)}>
          <Box className={classes.leftBox}>
            <img style={{ width: "80%" }} src={p1} alt="" />
          </Box>
          <Box className={classes.rightBox}>
            <h2 className={classes.title}>Aesthetic LX.</h2>
            <p>DON'T COMPROMISE ON DESIGN! GET FLAT 30% OFF NEW ARRIVALS.</p>
            <Button
              className={classes.shopBtn}
              variant="outlined"
              color="inherit"
            >
              SHOP NOW
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={clsx(classes.sliderWrapper, classes.secondBg)}>
          <Box className={classes.rightBox}>
            <h2 className={classes.secondTitle}>Olufsen’s.</h2>
            <p style={{ color: "#fff" }}>
              DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF NEW ARRIVALS.
            </p>
            <Button
              className={classes.secondShopBtn}
              variant="outlined"
              color="inherit"
            >
              SHOP NOW
            </Button>
          </Box>
          <Box className={classes.leftBox}>
            <img style={{ width: "100%" }} src={p2} alt="" />
          </Box>
        </SwiperSlide>
        <SwiperSlide className={clsx(classes.sliderWrapper, classes.thirdBg)}>
          <Box className={classes.leftBox}>
            <img style={{ width: "80%" }} src={p3} alt="" />
          </Box>
          <Box className={classes.rightBox}>
            <h2 className={classes.title}>Isometric Mock</h2>
            <p> DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF NEW ARRIVALS.</p>
            <Button
              className={classes.shopBtn}
              variant="outlined"
              color="inherit"
            >
              SHOP NOW
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopSlider;
