import { makeStyles } from '@material-ui/styles';
import {Box, Button, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import bottomLogo from '../../../src/Images/logo/bottomLogo.png';

const TopFooter = () => {

     const useStyles = makeStyles({
          root:{
              padding:'48px 0px 10px 0px',
              borderBottom:'1px solid #4E4F50'
          },
          subscribeText:{
               color:'#949AA6',
               marginTop:'-10px', 
               fontSize:'12px'
          },
          inputField:{
               width:'100%',
               background:'#eee',
               border:'none',
               borderRadius:'4px',
               outline:'none',
          },
          subscribeBtn:{
               background:'#EF9415',
               padding:'15.5px 18px',

               '&:hover':{
                    background:'#c7790b'
               }
          }

     })

     const classes = useStyles();

     return (
          <Container className={classes.root}>
               <Grid style={{display:'flex', alignItems:'end'}} container spacing={2}>
                    <Grid  item xs={12} md={3}>
                    <CardMedia
                    component="img"
                    style={{ width:'auto'}}
                    image={bottomLogo}
                    alt="green iguana"
                    />
                    </Grid>
                    <Grid item xs={12} md={5}>
                    <Box>
                    <Typography sx={{color:'#949AA6', letterSpacing:'3px'}} variant="caption" display="block" gutterBottom>
                    GET FREE NOTIFICATION
                    </Typography>
                    <Typography  variant="h5" gutterBottom component="div">
                    Subscribe to  Newsletter
                    </Typography>
                    <Typography className={classes.subscribeText} variant="body2" gutterBottom>
                    Sign up and be the first to hear about new product launches!
                    </Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                     <form>
                     <Grid container spacing={.5}>
                         <Grid  item xs={12} md={6}>
                         <TextField placeholder='Enter your email' className={classes.inputField} id="outlined-basic"  variant="outlined" />
                         </Grid>
                         <Grid item xs={12}  md={6}>
                         <Button className={classes.subscribeBtn}  variant="contained" color="inherit">Subscribe</Button>
                         </Grid>
                    </Grid>
                     </form>
                    </Grid>
               </Grid>
          </Container>
     );
};

export default TopFooter;