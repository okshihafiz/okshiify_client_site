import { Search } from '@material-ui/icons';
import React from 'react';
import styled  from 'styled-components';

const SearchContainer = styled.div`
display: flex; 
align-items:center;
margin-left:10px;
border:0.5px solid #E1E1E1;
padding:5px;
justify-content: center;
margin-top:10px;
font-size:14px;
`
const Input = styled.input`
flex:1;
outline:none;
border: none;
padding:6px 6px;
width:auto;
`

const CustomSearch = () => {

     return (
          <SearchContainer>
               <Input placeholder='Search'/>
               <Search style={{color:'gray', fontSize:'20px'}} />
          </SearchContainer>
     );
};

export default CustomSearch;