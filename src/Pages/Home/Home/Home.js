import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuBar from '../../../Shared/MenuBar/MenuBar';
import MidBar from '../../../Shared/MidBar/MidBar';
import MiniBar from '../../../Shared/MiniBar/MiniBar';


const Home = () => {
     return (
          <>
             <Box>
             <MiniBar/>
             <MidBar/>
             <MenuBar/>
             </Box>

             <Container>
                 
             </Container>
          </>
     );
};

export default Home;