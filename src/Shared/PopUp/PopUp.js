import { Box, Button } from '@mui/material';
import React from 'react';
import './PopUp.css';
import gift from '../../../src/Images/reGift.png';
import { NavLink } from 'react-router-dom';



const PopUp = () => {

     const title = document.querySelector('.title');
     console.log(title)

     return (
              <Box className="popup">
               <Box className="contentBox">
               <Box className="close"></Box>
               <Box className="imgBx">
                    <img  src={gift} alt="gift"/>
               </Box>
               <Box className="content">
                    <Box>
                    <h3 className="title">Special discount</h3>
                    <h2>96 <sup>%</sup><span>off</span></h2>
                    <p>In festival, We provide 96% discount. Ff you are interested to shopping, follow up our offer</p>
                    <NavLink style={{textDecoration:'none', color:'inherit'}} to="/">
                              <Button className="offBtn" variant="text">
                              Get the Offer
                              </Button> 
                              </NavLink>
                    </Box>
               </Box>
               </Box>
              </Box> 
     );

};

export default PopUp;