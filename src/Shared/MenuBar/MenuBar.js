import { makeStyles } from '@material-ui/styles';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { Menu as MenuIcon } from "@material-ui/icons";

const MenuBar = () => {

     const useStyle = makeStyles({
          root:{
               
          }
     })

     const classes = useStyle();
     return (
          <Container className={classes.root}>
               <Box sx={{ flexGrow: 1 }}>
                    <AppBar sx={{background:'#131921'}} position="static">
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