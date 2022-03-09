import { Box} from '@mui/material';
import React from 'react';
import TopFooter from '../TopFooter/TopFooter';
import { makeStyles } from '@material-ui/styles';
import MidFooter from '../MidFooter/MidFooter';

const Footer = () => {

     const useStyles = makeStyles({
          root:{
               background:'#222222',
               padding:'48px',
               color:'#fff',
               marginTop:'400px'
          }
     })

     const classes = useStyles();


     return (
          <Box className={classes.root}>
           <TopFooter/> 
           <MidFooter/>   
          </Box>
     );
};

export default Footer;