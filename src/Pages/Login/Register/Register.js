import { Facebook} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { Google,  Twitter } from '@mui/icons-material';
import { Button, Container, Grid, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Register = () => {
const {resisterUser}=useAuth()
     const theme = useTheme()

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
               background:'#F6FAFE'
          },
          boxHeader:{
               height:'40px',
               display:'flex', 
               alignItems:'center',
               justifyContent:'space-between',
               margin:'10px 6px 6px 10px',
               background:'#F6FAFE'
          },
          providerBox:{
               borderBottom:'1px solid #C2C9BC', 
               background:'#131921',
               padding:'10px',
          },
          providerSign:{
               display:'flex',
               justifyContent:'flex-start',
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
               width:'100%',
               padding:'10px 14px',
               fontSize:'14px',
          },
          submitBtn:{
               marginTop:'40px',
               padding:'11px 14px',
               background:'#131921',
               border:'none', 
               color:'#F7A819',
               fontWeight:'600',
               transition:'all 0.4s ease',
               borderRadius:'2px',
               fontSize:'14px',

               '&:hover':{
                    background:'#0a0d11', 
                    cursor:'pointer',
               }
          },

          registerText:{
               [theme.breakpoints.down('sm')]: {
                   paddingBottom:'50px' 
                },
          },

          responsiveBox:{
               [theme.breakpoints.down('sm')]: {
                    width:'100%'
                },
          },

          signInContainer:{
               [theme.breakpoints.down('sm')]: {
                    justifyContent:'center'
                }
          }
     })

     const classes = useStyles();

     //REACT HOOK FORM

     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => {
          console.log('All test');
          // resisterUser(data.email)
     };
   
     // console.log(watch("example")); 

     // Googele SignIn

   

     return (
       <Container>
         <Box className={classes.root}>
           <Box className={clsx(classes.customBox, classes.responsiveBox)}>
             {/* Header Box  */}
             <Box className={classes.boxHeader}>
               <Grid container spacing={2}>
                 <Grid item xs={12} md={6}>
                   <Typography sx={{ color: "#000" }} variant="h6" gutterBottom>
                     Register
                   </Typography>
                 </Grid>
                 <Grid className={classes.registerText} item xs={12} md={6}>
                   <NavLink
                     style={{ textDecoration: "none", color: "inherit" }}
                     to="/login"
                   >
                     <Button
                       style={{ textTransform: "capitalize", color: "#000" }}
                       variant="text"
                     >
                       Already have an account? SignIn now
                     </Button>
                   </NavLink>
                 </Grid>
               </Grid>
             </Box>

             {/* Provider Box */}
             <Box className={classes.providerBox}>
               <Typography
                 sx={{ color: "#fff", fontStyle: "italic", fontWeight: "500" }}
                 variant="caption"
                 display="block"
                 gutterBottom
               >
                 You can either...
               </Typography>

               <Grid container spacing={2}>
                 <Grid item xs={12} md={4}>
                   <Box
                     className={clsx(
                       classes.providerSign,
                       classes.signInContainer
                     )}
                   >
                     <Facebook
                       style={{ marginLeft: "5px", marginRight: "5px" }}
                     />
                     <Button
                       style={{
                         textTransform: "capitalize",
                         color: "#000",
                         borderLeft: "1px solid #C2C9BC",
                         height: "35px",
                       }}
                       variant="text"
                     >
                       Sign in Facebook
                     </Button>
                   </Box>
                 </Grid>
                 <Grid item xs={12} md={4}>
                   <Box
                     className={clsx(
                       classes.providerSign,
                       classes.signInContainer
                     )}
                   >
                     <Twitter
                       style={{ marginLeft: "5px", marginRight: "5px" }}
                     />
                     <Button
                       style={{
                         textTransform: "capitalize",
                         color: "#000",
                         borderLeft: "1px solid #C2C9BC",
                         height: "35px",
                       }}
                       variant="text"
                     >
                       Sign in by Twitter
                     </Button>
                   </Box>
                 </Grid>
                 <Grid item xs={12} md={4}>
                   <Box
                     className={clsx(
                       classes.providerSign,
                       classes.signInContainer
                     )}
                   >
                     <Google
                       style={{ marginLeft: "5px", marginRight: "5px" }}
                     />
                     <Button
                     
                       style={{
                         textTransform: "capitalize",
                         color: "#000",
                         borderLeft: "1px solid #C2C9BC",
                         height: "35px",
                       }}
                       variant="text"
                     >
                       Sign in by Google
                     </Button>
                   </Box>
                 </Grid>
               </Grid>
             </Box>

             {/* Register Box  */}
             <Box className={classes.registerBox}>
               <Typography
                 sx={{ color: "#000", fontStyle: "italic", fontWeight: "500" }}
                 variant="caption"
                 display="block"
                 gutterBottom
               >
                 or, You can register yourself...
               </Typography>

               <Box sx={{ my: 3 }}>
                 <form
                   className={classes.loginForm}
                   onSubmit={handleSubmit(onSubmit)}
                 >
                   <Grid container spacing={2}>
                     <Grid item xs={12} md={6}>
                       <input
                         className={classes.loginInput}
                         {...register("name", { required: true })}
                         placeholder="Your full name"
                       />
                       <br />
                       {errors.name && (
                         <span style={{ fontSize: "10px", color: "red" }}>
                           Please fill up name field
                         </span>
                       )}
                     </Grid>
                     <Grid item xs={12} md={6}>
                       <input
                         className={classes.loginInput}
                         {...register("email", { required: true })}
                         placeholder="Your email"
                       />
                       <br />
                       {errors.email && (
                         <span style={{ fontSize: "10px", color: "red" }}>
                           Please fill up email field
                         </span>
                       )}
                     </Grid>
                     <Grid item xs={12} md={6}>
                       <input
                         className={classes.loginInput}
                         {...register("password", { required: true })}
                         placeholder="Type a strong password"
                       />
                       <br />
                       {errors.password && (
                         <span style={{ fontSize: "10px", color: "red" }}>
                           Please fill up password field
                         </span>
                       )}
                     </Grid>
                     <Grid item xs={12} md={6}>
                       <input
                         className={classes.loginInput}
                         {...register("password2", { required: true })}
                         placeholder="Re-type  password"
                       />
                       <br />
                       {errors.password2 && (
                         <span style={{ fontSize: "10px", color: "red" }}>
                           Please fill up re-password field
                         </span>
                       )}
                     </Grid>
                   </Grid>
                   <input
                     className={classes.submitBtn}
                     type="submit"
                     value="Create Account"
                   />
                 </form>
               </Box>
             </Box>
           </Box>
         </Box>
       </Container>
     );
};

export default Register;