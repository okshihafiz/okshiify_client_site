import { Box, Container } from "@mui/material";
import React from "react";
import MenuBar from "../../Shared/MenuBar/MenuBar";
import MiniBar from "../../Shared/MiniBar/MiniBar";
import MidBar from "../../Shared/MidBar/MidBar";

const Contact = () => {
  return (
    <>
      <Container>
        <Box>
          <MiniBar />
          <MidBar />
          <MenuBar />
        </Box>
        <h1>Hello Contact</h1>
      </Container>
    </>
  );
};

export default Contact;
