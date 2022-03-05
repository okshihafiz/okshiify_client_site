import { makeStyles } from '@material-ui/styles';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const MenuBar = () => {

     const useStyle = makeStyles({
          root:{
               padding:'14px 0',
               background:'#131921',
               color:'#fff',
               fontWeight:'bold'
          }
     })

     const classes = useStyle();
     return (
          <Container className={classes.root}>
               <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                    <Toolbar>
                         <IconButton
                         size="large"
                         edge="start"
                         color="inherit"
                         aria-label="menu"
                         sx={{ mr: 2 }}
                         >
                         <MenuIcon />
                         </IconButton>
                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                         News
                         </Typography>
                         <Button color="inherit">Login</Button>
                    </Toolbar>
                    </AppBar>
               </Box>
          </Container>
     );
};

export default MenuBar;