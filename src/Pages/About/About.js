import { Box, Container } from '@mui/material';
import React from 'react';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import MidBar from '../../Shared/MidBar/MidBar';
import MiniBar from '../../Shared/MiniBar/MiniBar';

const About = () => {
     return (
          <>
               <Box>
               <MiniBar/>
               <MidBar/>
               <MenuBar/>
               </Box>

               <Container>
                    <h1>Hello about</h1>
               </Container>

          </>
     );
};

export default About;