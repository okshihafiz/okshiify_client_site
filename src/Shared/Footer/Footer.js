import { Box} from '@mui/material';
import React from 'react';
import TopFooter from '../TopFooter/TopFooter';
import { makeStyles } from '@material-ui/styles';
import MidFooter from '../MidFooter/MidFooter';
import BottomFooter from '../BottomFooter/BottomFooter';

const Footer = () => {

     const useStyles = makeStyles({
          root:{
               background:'#222222',
               padding:'48px',
               color:'#fff',
               marginTop:'600px'
          }
     })

     const classes = useStyles();


     return (
          <Box className={classes.root}>
           <TopFooter/> 
           <MidFooter/> 
           <BottomFooter/>  
          </Box>
     );
};

export default Footer;