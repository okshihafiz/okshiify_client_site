import { makeStyles } from '@material-ui/styles';
import { AppBar, Button, CardMedia, Container, IconButton, Toolbar, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Menu as MenuIcon } from "@material-ui/icons";
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MobileLogo from '../../../src/Images/mobileLogo/mobile.png';
import clsx from 'clsx';

const MenuBar = () => {

     const theme = useTheme()

     const useStyle = makeStyles({
          IconMenu:{
               [theme.breakpoints.up('sm')]: {
                   display:'none' 
               },
          },
          routeContainer:{
               [theme.breakpoints.down('sm')]: {
                    display:'none' 
                },
          },

          logoWrapper:{
               [theme.breakpoints.up('sm')]: {
                    display:'none'
                },
          },

          linkItem:{
            textDecoration:'none',
            marginBottom:'16px',
            color:'#171717'
          },

          logoRight:{
            [theme.breakpoints.down('sm')]: {
               display:'block', 
               marginLeft:'auto' 
          },
          }
     })

     const classes = useStyle();

     // Material UI Drawer 

     const [state, setState] = React.useState(false);
      
     const list = (
          <Box
            sx={{ width: 250 }}
            role="presentation"
          >
            <List>
              
                <ListItem button>
                  <ListItemText>
                    <Link className={classes.linkItem} to="/home">Home</Link>   
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <Link className={classes.linkItem} to="/contact">Contact</Link>   
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <Link className={classes.linkItem} to="/about">About</Link>   
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    <Link className={classes.linkItem} to="/shop">Shop</Link>   
                  </ListItemText>
                </ListItem>
              
            </List>
            
          </Box>
        );

     return (
          <>
               <Container className={classes.root}>
               <Box sx={{ flexGrow: 1 }}>
                    <AppBar sx={{background:'#131921', boxShadow:'none'}} position="static">
                    <Toolbar>

                    
                      <IconButton
                         size="large"
                         edge="start"
                         color="inherit"
                         aria-label="menu"
                         sx={{ mr: 2 }}
                         className={classes.IconMenu}
                         onClick={()=>setState(true)}
                         >
                        <MenuIcon />
                         </IconButton>
                      
                      
                      <Box  className={
                        clsx(
                          classes.logoWrapper,
                          classes.logoRight,
                        )
                      }>
                        
                         <CardMedia
                                component="img"
                                style={{ width:'110px',}}
                                image={MobileLogo}
                                alt="shop logo"
                          />
                         
                      </Box>
                      

                        <Box className={classes.routeContainer}>
                        <NavLink style={{textDecoration:'none', color:'inherit'}} to="/home">
                        <Button color="inherit">Home</Button>
                        </NavLink>
                         
                         <Button color="inherit">
                         <CategoryFilter/>
                         </Button>
                        
                         <NavLink style={{textDecoration:'none', color:'inherit'}} to="/about">
                         <Button color="inherit">ABOUT US</Button>
                         </NavLink>
                         <NavLink style={{textDecoration:'none', color:'inherit'}} to="/contact">
                         <Button color="inherit">CONTACT US</Button>
                         </NavLink>
                         <NavLink style={{textDecoration:'none', color:'inherit'}} to="/shop">
                         <Button color="inherit">SHOP</Button>
                         </NavLink>
                        </Box>
                    </Toolbar>
                    </AppBar>
               </Box>
          </Container>

          <div>
               
               <React.Fragment>
                  
                    <Drawer
                    open={state}
                    onClose={()=>setState(false)}
                    >
                    {list}
                    </Drawer>
               </React.Fragment>
             
          </div>
          </>
     );
};

export default MenuBar;