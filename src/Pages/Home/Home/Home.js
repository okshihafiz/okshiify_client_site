import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuBar from '../../../Shared/MenuBar/MenuBar';
import MidBar from '../../../Shared/MidBar/MidBar';
import MiniBar from '../../../Shared/MiniBar/MiniBar';
import Footer from "../../../Shared/Footer/Footer";
import PopUp from '../../../Shared/PopUp/PopUp';
import TopSlider from '../TopSlider/TopSlider';

const Home = () => {
     return (
          <>
             <Box>
             <MiniBar/>
             <MidBar/>
             <MenuBar/>
             <PopUp/>
             </Box>

             <Container sx={{marginTop:'120px'}}>
             <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                    
                    </Grid>
                    <Grid item xs={12} md={9}>
                    <TopSlider/>
                    </Grid>
                    
               </Grid>
              
             </Container>

             <Box>
             <Footer/> 
             </Box>
          </>
     );
};

export default Home;