import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MenuBar from "../../../Shared/MenuBar/MenuBar";
import MidBar from "../../../Shared/MidBar/MidBar";
import MiniBar from "../../../Shared/MiniBar/MiniBar";
import Footer from "../../../Shared/Footer/Footer";
import PopUp from "../../../Shared/PopUp/PopUp";
import TopSlider from "../TopSlider/TopSlider";
import DemoCard from "../DemoCard/DemoCard";
import NewsLetter from "../NewsLetter/NewsLetter";
import Products from "../../Products/Products";
import InfoCards from "./InfoCards/InfoCards";
import TopCategories from "./TopCategories/TopCategories";
const Home = () => {
  return (
    <>
      <Container>
        <MiniBar />
        <MidBar />
        <MenuBar />
        <TopSlider />
        <DemoCard />
        <InfoCards />
        <PopUp />
       
      </Container>

      <Container sx={{ marginTop: "60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Products />
            
          </Grid>
        </Grid>
      </Container>
      <Container>
        
      <TopCategories/>
      </Container>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
