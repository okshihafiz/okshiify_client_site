import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Phone, Home, Email, ChatBubble, Person, ArrowForwardIos } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import p1 from '../../../src/Images/footerImage/p1.jpg';
import p2 from '../../../src/Images/footerImage/p2.jpg';
import p3 from '../../../src/Images/footerImage/p3.jpg';
import p4 from '../../../src/Images/footerImage/p4.jpg';
import p5 from '../../../src/Images/footerImage/p5.jpg';
import p6 from '../../../src/Images/footerImage/p6.jpg';


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

          orderItem:{
               display: "flex",
               flexDirection:'column'
          },

          listItem:{
               textDecoration:'none',
               color:'#eee',
               padding:'4px 0',
               fontSize:'14px',
               borderBottom:'1px dotted #444444',
               display:'flex',
               alignItems:'center',
               transition:'all 0.4s ease',

               '&:last-child':{
                    borderBottom: '0px dotted',
               },

               '&:hover':{
                    paddingLeft:'14px'
               }
          }


     })

     const classes = useStyles();

     return (
          <Container className={classes.root}>
              <Grid container spacing={2}>
               <Grid item xs={12} md={3}>
               <Typography className={classes.infoText} variant="h6" gutterBottom component="div">
               Contact Info.
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
               <Typography className={classes.infoText} variant="h6" gutterBottom component="div">
               Usefull Links
               </Typography>
               <Box className={classes.orderItem}>
                    <NavLink className={classes.listItem} to="/"> <ArrowForwardIos style={{fontSize:'11px', marginRight:'4px'}} /> Home</NavLink>
                    <NavLink className={classes.listItem} to="/"><ArrowForwardIos style={{fontSize:'11px', marginRight:'4px'}} /> Services</NavLink>
                    <NavLink className={classes.listItem} to="/"><ArrowForwardIos style={{fontSize:'11px', marginRight:'4px'}} /> About Us</NavLink>
                    <NavLink className={classes.listItem} to="/"><ArrowForwardIos style={{fontSize:'11px', marginRight:'4px'}} /> Order History</NavLink>
                    <NavLink className={classes.listItem} to="/"><ArrowForwardIos style={{fontSize:'11px', marginRight:'4px'}} /> Customer Services</NavLink>
                    <NavLink className={classes.listItem} to="/"><ArrowForwardIos style={{fontSize:'11px', marginRight:'4px'}} /> Get help & support</NavLink>
                    <NavLink className={classes.listItem} to="/"><ArrowForwardIos style={{fontSize:'11px', marginRight:'4px'}} /> Terms & Conditions</NavLink>
                    <NavLink className={classes.listItem} to="/"><ArrowForwardIos style={{fontSize:'11px', marginRight:'4px'}} /> Our Privacy & Features</NavLink>
               </Box>
               </Grid>
               
               <Grid   item xs={12} md={3}>
               <Typography className={classes.infoText} variant="h6" gutterBottom component="div">
               Instagram
               </Typography>
               
               <Grid container spacing={0}>
               <Grid item xs={4} md={4}>
               <CardMedia
                    component="img"
                    style={{width:'85%', objectFit:'cover',height:'85%'}}
                    image={p1}
                    alt="green iguana"
               />
               </Grid>
               <Grid item xs={4} md={4}>
               <CardMedia
                    component="img"
                    style={{width:'85%', objectFit:'cover',height:'85%'}}
                    image={p2}
                    alt="green iguana"
               />
               </Grid>
               <Grid item xs={4} md={4}>
               <CardMedia
                    component="img"
                    style={{width:'85%', objectFit:'cover',height:'85%'}}
                    image={p3}
                    alt="green iguana"
               />
               </Grid>
               <Grid item xs={4} md={4}>
               <CardMedia
                    component="img"
                    style={{width:'85%', objectFit:'cover',height:'85%'}}
                    image={p4}
                    alt="green iguana"
               />
               </Grid>
               <Grid item xs={4} md={4}>
               <CardMedia
                    component="img"
                    style={{width:'85%', objectFit:'cover',height:'85%'}}
                    image={p5}
                    alt="green iguana"
               />
               </Grid>
               <Grid item xs={4} md={4}>
               <CardMedia
                    component="img"
                    style={{width:'85%', objectFit:'cover',height:'85%'}}
                    image={p6}
                    alt="green iguana"
               />
               </Grid>
               </Grid>
               </Grid>
               
               <Grid item xs={12} md={3}>
               <Typography className={classes.infoText} variant="h6" gutterBottom component="div">
               Recent Post
               </Typography>
               <Box className={classes.recentBox}>
                    <Box className={classes.celanderBox}>
                         <Box>
                         <Typography sx={{fontWeight:'bolder', marginTop:'15px', marginBottom:'0px'}} variant="h4" gutterBottom component="div">
                            24
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
                         <Typography  variant="subtitle1" gutterBottom component="div">
                         WHERE WE'RE STANDING RIHGT NOW
                         </Typography>
                         </Box>
                         <Box className={classes.subBoxWrapper}>
                            <Box className={classes.adminBoxWrapper}>
                            <Box>
                               <Person style={{marginRight:'8px', fontSize:'16px'}} />  
                            </Box>
                            <Box>
                            <Typography variant="body2" gutterBottom>
                            By Admin
                            </Typography>
                            </Box>
                            </Box>  
                            <Box className={classes.adminBoxWrapper}>
                            <Box>
                               <ChatBubble style={{marginRight:'8px', fontSize:'16px'}} />  
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
                            27
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
                         <Typography  variant="subtitle1" gutterBottom component="div">
                         KEEP YOUR'S VISION ON CALENDAR
                         </Typography>
                         </Box>
                         <Box className={classes.subBoxWrapper}>
                            <Box className={classes.adminBoxWrapper}>
                            <Box>
                               <Person style={{marginRight:'8px', fontSize:'16px', }} />  
                            </Box>
                            <Box>
                            <Typography variant="body2" gutterBottom>
                            By Admin
                            </Typography>
                            </Box>
                            </Box>  
                            <Box className={classes.adminBoxWrapper}>
                            <Box>
                               <ChatBubble style={{marginRight:'8px', fontSize:'16px', }} />  
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