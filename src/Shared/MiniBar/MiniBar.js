import { makeStyles } from '@material-ui/styles';
import { Box, Container, Grid, MenuItem, TextField, Typography, useTheme } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import contact from '../../../src/Images/Flags/contact.png';
import help from '../../../src/Images/Flags/question-mark.png';
import user from '../../../src/Images/Flags/user.png';
// import useAuth from './../../hooks/useAuth';

const MiniBar = () => {
     // const {user}=useAuth()

     const theme = useTheme()

     const useStyles = makeStyles({
          root: {
               background:' #fff',
               color: ' #000',
               padding:'0',
               display:'flex',
               alignItems:'center',
               borderBottom:'0.5px solid #E1E1E1'
          },

          cntryFlag:{
               width:'30px',
          },

          inputBox:{
               background:'none',
               border:'none'
          },

          discountText:{
               paddingTop:'16px',
               display:'flex',
               alignItems:'center',
          },

          typography:{
               paddingTop:'16px',
               display:'flex',
               alignItems:'center',
               transition: 'all 0.4s ease',

               '&:hover':{
               color:'#EF9415',
               cursor: 'pointer'
               }
          },

          topImg:{
               width:'20px',
               marginRight: '8px',
          },
          
          miniBar:{
               [theme.breakpoints.down('sm')]: {
                    display:'none' 
                },
          }

     })

     const classes = useStyles();

     const [currency, setCurrency] = React.useState('USD');

     const currencies = [
          {
            value: 'USD',
            flag: 'https://cdn-icons-png.flaticon.com/512/206/206626.png',
          },
          
          {
            value: 'BAN',
            flag: 'https://cdn-icons-png.flaticon.com/512/940/940231.png',
          },
          {
            value: 'ENG',
            flag: 'https://cdn-icons-png.flaticon.com/512/555/555417.png',
          },
          {
            value: 'CND',
            flag: 'https://cdn-icons-png.flaticon.com/512/555/555473.png',
          },
          
        ];


     const handleChange = (event) => {
     setCurrency(event.target.value);
     };

     return (
          <Box className={classes.root}>
              <Container>
              <Grid container spacing={2}>

              <Grid item xs={12} md={5}>
              <Typography className={classes.discountText} variant="body2" gutterBottom>
               Super Deal! free shipping On orders over $50
               </Typography>
               </Grid>
               
              
               <Grid item xs={6} md={1}>
               <TextField
               select
               value={currency}
               onChange={handleChange}
               variant="standard"
               >
               {currencies.map((option) => (
               <MenuItem key={option.value} value={option.value}>
               <img className={classes.cntryFlag} src={option.flag} alt=""/>
               </MenuItem>
               ))}
               </TextField>
               </Grid>
               <Grid className={classes.miniBar} item xs={6} md={2}>
               <Typography  className={classes.typography} variant="body2" gutterBottom>
               <img className={classes.topImg} src={contact} alt="" />  Contact
               </Typography>
               </Grid>
               <Grid item className={classes.miniBar} xs={6} md={2}>
               <Typography  className={classes.typography} variant="body2" gutterBottom>
               <img className={classes.topImg} src={help} alt="" />   Need Help
               </Typography>
               </Grid>
               <Grid item xs={6} md={2}>
               <NavLink style={{textDecoration:'none', color:'inherit'}} to="/register">
               <Typography  className={classes.typography } variant="body2" gutterBottom>
               <img className={classes.topImg} src={user} alt="" />   Sign In / Register
               </Typography>
               </NavLink>
               </Grid>
               </Grid>
              </Container>
          </Box>
     );
};

export default MiniBar;