import { Search } from '@material-ui/icons';
import { Container } from '@mui/material';
import React from 'react';
import styled  from 'styled-components';

const SearchContainer = styled.div`
display: flex; 
align-items:center;
border:0.5px solid #E1E1E1;
padding:6px;
justify-content: center;
margin-top:10px;
font-size:14px;
`
const Input = styled.input`
flex:1;
outline:none;
border: none;
padding:6px 4px;
width:auto;
`

const CustomSearch = () => {

     return (
          <Container>
          <SearchContainer>
          <Input placeholder='Search'/>
          <Search style={{color:'gray', fontSize:'20px'}} />
          </SearchContainer>
          </Container>
     );
};

export default CustomSearch;