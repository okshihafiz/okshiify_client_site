import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Phone, Home, Email, ChatBubble, Person } from '@material-ui/icons';

const MidFooter = () => {

     const useStyles = makeStyles({
          root:{
               padding:'48px 0px 10px 0px',
          },

          infoText:{
               marginBottom:'24px',
               fontWeight:'normal'
          },

          infoBox :{
               display:"flex",
               alignItems:'center',
               marginBottom:'14px'
          },

          recentBox:{
               display: "flex",
               marginBottom:'14px'
          },

          subBoxWrapper:{
               display: "flex",
               alignItems:'center',
              marginTop:'14px'
          },

          celanderBox:{
               textAlign:'center',
               marginRight:'10px',
               background:'#333333',
               padding:'0 4px'
          },

          adminBoxWrapper:{
               display: "flex",
               alignItems:'center',
               marginRight:'10px'
          },


     })

     const classes = useStyles();

     return (
          <Container className={classes.root}>
              <Grid container spacing={2}>
               <Grid item xs={12} md={3}>
               <Typography className={classes.infoText} variant="h6" gutterBottom component="div">
               Contact With Us
               </Typography>
                <Box  className={classes.infoBox}>
                    <Phone style={{color:'#EF9415', marginRight:'10px'}}/>
                    <Box>
                    <Typography  variant="caption" gutterBottom>
                    +880 195 0646 560 <br/>
                    +880 178 6589 600
                    </Typography> 
                    </Box>
                </Box>
               
                <Box  className={classes.infoBox}>
                    <Home style={{color:'#EF9415', marginRight:'10px'}}/>
                    <Box>
                    <Typography  variant="caption" gutterBottom>
                    Beanibazar,Zip-(3174) Sylhet,<br/>
                    Beanibazar, Bangladesh
                    </Typography> 
                    </Box>
                </Box>
                <Box  className={classes.infoBox}>
                    <Email style={{color:'#EF9415', marginRight:'10px'}}/>
                    <Box>
                    <Typography  variant="caption" gutterBottom>
                    okshiify@gmail.com<br/>
                    hafizurrahman.jr@gmail.com
                    </Typography> 
                    </Box>
                </Box>
               </Grid>
               <Grid item xs={12} md={3}>
              
               </Grid>
               <Grid item xs={12} md={3}>
               
               </Grid>
               <Grid item xs={12} md={3}>
               <Typography className={classes.infoText} variant="h6" gutterBottom component="div">
               RECENT POST
               </Typography>
               <Box className={classes.recentBox}>
                    <Box className={classes.celanderBox}>
                         <Box>
                         <Typography sx={{fontWeight:'bolder', marginTop:'15px', marginBottom:'0px'}} variant="h4" gutterBottom component="div">
                            11
                         </Typography>
                         </Box>
                         <Box>
                         <Typography sx={{fontSize:'10px'}} variant="caption" display="block" gutterBottom>
                         January 2023
                         </Typography>  
                         </Box>
                    </Box>
                    <Box>
                         <Box>
                         <Typography sx={{fontWeight:'bold'}} variant="subtitle1" gutterBottom component="div">
                         WHERE WE'RE STANDING RIHGT NOW
                         </Typography>
                         </Box>
                         <Box className={classes.subBoxWrapper}>
                            <Box className={classes.adminBoxWrapper}>
                            <Box>
                               <Person style={{marginRight:'8px', fontSize:'16px', color:'#EF9415'}} />  
                            </Box>
                            <Box>
                            <Typography variant="body2" gutterBottom>
                            By Admin
                            </Typography>
                            </Box>
                            </Box>  
                            <Box className={classes.adminBoxWrapper}>
                            <Box>
                               <ChatBubble style={{marginRight:'8px', fontSize:'16px', color:'#EF9415'}} />  
                            </Box>
                            <Box>
                            <Typography variant="body2" gutterBottom>
                            28
                            </Typography>
                            </Box>
                            </Box>  
                         </Box>
                    </Box>
               </Box>
               <Box className={classes.recentBox}>
                    <Box className={classes.celanderBox}>
                         <Box>
                         <Typography sx={{fontWeight:'bolder', marginTop:'15px', marginBottom:'0px'}} variant="h4" gutterBottom component="div">
                            07
                         </Typography>
                         </Box>
                         <Box>
                         <Typography sx={{fontSize:'10px'}} variant="caption" display="block" gutterBottom>
                         February 2023
                         </Typography>  
                         </Box>
                    </Box>
                    <Box>
                         <Box>
                         <Typography sx={{fontWeight:'bold'}} variant="subtitle1" gutterBottom component="div">
                         WHERE WE'RE STANDING RIHGT NOW
                         </Typography>
                         </Box>
                         <Box className={classes.subBoxWrapper}>
                            <Box className={classes.adminBoxWrapper}>
                            <Box>
                               <Person style={{marginRight:'8px', fontSize:'16px', color:'#EF9415'}} />  
                            </Box>
                            <Box>
                            <Typography variant="body2" gutterBottom>
                            By Admin
                            </Typography>
                            </Box>
                            </Box>  
                            <Box className={classes.adminBoxWrapper}>
                            <Box>
                               <ChatBubble style={{marginRight:'8px', fontSize:'16px', color:'#EF9415'}} />  
                            </Box>
                            <Box>
                            <Typography variant="body2" gutterBottom>
                            70
                            </Typography>
                            </Box>
                            </Box>  
                         </Box>
                    </Box>
               </Box>
               </Grid>
               </Grid>
          </Container>
     );
};

export default MidFooter;