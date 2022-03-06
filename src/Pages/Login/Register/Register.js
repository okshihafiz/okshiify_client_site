import { Facebook} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { Google,  Twitter } from '@mui/icons-material';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {

     const useStyles = makeStyles({
          root:{
               width:'100%',
               height:'100vh',
               display:'flex',
               justifyContent:'center',
               alignItems:'center',
               overflowX:'hidden'
          },
          customBox:{
               width:'50%',
               border: '1px solid #E1E1E1',
              
          },
          boxHeadr:{
               height:'40px',
               display:'flex', 
               alignItems:'center',
               justifyContent:'space-between',
               padding:'6px 6px',
               // borderBottom:'1px solid #FFF000', 
               background:'#232F3E'
          },
          providerBox:{
               borderBottom:'1px solid #C2C9BC', 
               background:'#131921',
               padding:'14px 6px',
          },
          providerSign:{
               display:'flex',
               justifyContent:'space-around',
               alignItems:'center',
               borderBottom:'1px solid #C2C9BC', 
               background:'#fff', 
          },

          registerBox:{
               padding:'14px 10px',
          },

          loginForm:{
               width:'100%',
              
          },
          loginInput:{
               width:'90%',
               padding:'10px 14px',
               fontSize:'16px',
          },
          submitBtn:{
               marginTop:'40px',
               padding:'10px 14px',
               background:'#131921',
               border:'none', 
               color:'#F7A819',
               fontWeight:'600',
               transition:'all 0.4s ease',
               borderRadius:'3px',

               '&:hover':{
                    background:'#0a0d11', 
                    cursor:'pointer',
               }
          }
     })

     const classes = useStyles();

     //REACT HOOK FORM

     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
   
     console.log(watch("example")); 

     return (
          <Container  className={classes.root}>
              <Box className={classes.root}>
                    <Box className={classes.customBox}>

                         {/* Header Box  */}
                         <Box className={classes.boxHeadr}>
                              <Typography sx={{color:'#F7A819'}} className={classes.typography} variant="h6" gutterBottom>
                              Register
                              </Typography> 
                              <Button style={{textTransform:'capitalize', color:'#F7A819'}} variant="text">
                              Already have an account ? Sign in
                              </Button> 
                         </Box>

                         {/* Provider Box */}
                         <Box className={classes.providerBox}>
                              <Typography sx={{color:'#fff', fontStyle:'italic', fontWeight:'500'}} variant="caption" display="block" gutterBottom>
                              You can either...
                              </Typography>

                              <Grid container spacing={2}>
                                   <Grid item xs={12} md={4}>
                                   <Box className={classes.providerSign}>
                                   <Facebook style={{marginLeft:'5px'}} />
                                   <Button style={{textTransform:'capitalize', color:'#000',  borderLeft:'1px solid #C2C9BC'}} variant="text">
                                   Sign in  Facebook
                                   </Button>   
                                   </Box> 
                                   </Grid>
                                   <Grid item xs={12} md={4}>
                                   <Box className={classes.providerSign}>
                                   <Twitter style={{marginLeft:'5px'}} />
                                   <Button style={{textTransform:'capitalize', color:'#000', borderLeft:'1px solid #C2C9BC'}} variant="text">
                                   Sign in by Twitter
                                   </Button>   
                                   </Box> 
                                   </Grid>
                                   <Grid item xs={12} md={4}>
                                   <Box className={classes.providerSign}>
                                   <Google style={{marginLeft:'5px'}}  />
                                   <Button style={{textTransform:'capitalize', color:'#000', borderLeft:'1px solid #C2C9BC'}} variant="text">
                                   Sign in by Google
                                   </Button>   
                                   </Box> 
                                   </Grid>
                              </Grid>
                         </Box>

                         {/* Register Box  */}
                         <Box className={classes.registerBox}>
                              <Typography sx={{color:'#000', fontStyle:'italic', fontWeight:'500'}} variant="caption" display="block" gutterBottom>
                              or, You can register yourself...
                              </Typography>

                              <Box sx={{my:3}}>
                              <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
                              <Grid container spacing={2}>
                                   <Grid item xs={12} md={6}>
                                   <input className={classes.loginInput}  {...register("name", { required: true })} placeholder="Your full name" />
                                   <br />
                                   {errors.name && <span style={{fontSize:'10px', color:'red'}}>Please fill up name field</span>}
                                   </Grid>
                                   <Grid item xs={12} md={6}>
                                   <input  className={classes.loginInput} {...register("email", { required: true })} placeholder="Your email"/>
                                   <br />
                                   {errors.email && <span style={{fontSize:'10px', color:'red'}}>Please fill up email field</span>}
                                   </Grid>
                                   <Grid item xs={12} md={6}>
                                   <input  className={classes.loginInput} {...register("password", { required: true })}placeholder="Type a strong password" />
                                   <br />
                                   {errors.password && <span style={{fontSize:'10px', color:'red'}}>Please fill up password field</span>}
                                   </Grid>
                                   <Grid item xs={12} md={6}>
                                   <input  className={classes.loginInput} {...register("password2", { required: true })} placeholder="Re-type  password"/>
                                   <br />
                                   {errors.password2 && <span style={{fontSize:'10px', color:'red'}}>Please fill up re-password field</span>}
                                   </Grid>
                                   </Grid>
                                   <input className={classes.submitBtn} type="submit" value="Create Account" />
                                   </form>
                              </Box>
                         </Box>
                    </Box>
              </Box>
          </Container>
     );
};

export default Register;