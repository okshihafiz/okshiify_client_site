import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import p1 from '../../../Images/SliderImages/p1.png';



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


// import required modules
import { Pagination } from "swiper";
import './styles.css';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const TopSlider = () => {

  const useStyles = makeStyles({
    sliderWrapper:{
        display:'flex',
        alignItems:'center',
        width:'100%',
        height:'100%',
        justifyContent:'flex-start'
    },
    title:{
      fontSize:'45px',
      
    },
    rightBox:{
    flex:1,
    },
    leftBox:{
      
    }
})

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
        <SwiperSlide className={classes.sliderWrapper}>
          <Box className={classes.leftBox}>
            <img style={{width:'100%', height:'100%'}} src={p1} alt="" />
          </Box>
          <Box className={classes.rightBox}>
          <h2 className={classes.title}>
            Aesthetic LX.</h2>
          </Box>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopSlider;