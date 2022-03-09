import { CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import paymentCards from '../../../src/Images/Flags/paymentCard.png';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';

const BottomFooter = () => {

     const useStyle = makeStyles({
          root:{
               marginTop:'48px',
          },

          linkArea:{
               background:'#414040',
               display:'flex',
               alignItems:'center',
               justifyContent:'center',
               width:'30px',
               height:'30px',
               borderRadius:'2px',
               marginRight:'10px',

          },

          linkItem:{
               textDecoration:'none'
          },

          bottomLink:{
               textDecoration:'none',
               fontSize:'20px',
               fontWeight:'bold',
               color:'#EF9415',
               marginRight:'10px'
          }
          
     })

     const classes = useStyle();

     return (
          <Container className={classes.root}>
               <Grid  container spacing={1}>
                    <Grid sx={{display:'flex',alignItems:'end'}} item xs={12} md={4}>
                    <Box sx={{display:'flex'}}>
                         <Box className={classes.linkArea}>
                         <Link className={classes.linkItem} to="/"><Facebook style={{color:'#0A0A0A', fontSize:'24px', marginTop:'4px'}}/></Link>
                         </Box>
                         <Box className={classes.linkArea}>
                         <Link className={classes.linkItem} to="/"><Twitter style={{color:'#0A0A0A', fontSize:'24px', marginTop:'4px'}}/></Link>
                         </Box>
                         <Box className={classes.linkArea}>
                         <Link className={classes.linkItem} to="/"><Instagram style={{color:'#0A0A0A', fontSize:'24px', marginTop:'4px'}}/></Link>
                         </Box>
                         <Box className={classes.linkArea}>
                         <Link className={classes.linkItem} to="/"><LinkedIn style={{color:'#0A0A0A', fontSize:'24px', marginTop:'4px'}}/></Link>
                         </Box>
                    </Box>
                    </Grid>
                    <Grid sx={{display:'flex', alignItems:'end'}} item xs={12} md={4}>
                    <Box style={{display:'flex', alignItems:'center'}}>
                    <Link className={classes.bottomLink} to="/">okshiify.</Link>
                    
                    <Typography sx={{color:'#999999', fontWeight:'bolder', marginTop:'10px'}} variant="body2" display="block" gutterBottom>
                    Privacy term © 2023. All Rights Reserved
                    </Typography>
                    </Box>
                   
                    </Grid>
                    <Grid sx={{display:'flex', justifyContent:'flex-end'}} item xs={12} md={4}>
                    <CardMedia
                    component="img"
                    style={{width:'45%', objectFit:'cover'}}
                    image={paymentCards}
                    alt="green iguana"
                    />
                    </Grid>
               </Grid>

               
          </Container>
     );
};

export default BottomFooter;