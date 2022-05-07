import { Fastfood, SportsEsports } from "@material-ui/icons";
import {
  Backpack,
  Checkroom,
  SupportAgent,
  TravelExplore,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const PopularCategories = () => {
  //Write style component here
  const useStyles = makeStyles({
    dealArea: {
      border: "1px solid #E1E1E1",
      padding: "10px 10px 10px 10px",
    },
    productBtn: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom: "25px",
    },
  });

  const classes = useStyles();
  return (
    <Box className={classes.dealArea}>
      <Typography variant="h6" gutterBottom component="div">
        Popular Categories
      </Typography>
      <hr style={{ borderTop: "1px solid #e1e1e1" }} />
      <Box>
        <Box sx={{ padding: "20px 0px 30px 0px" }}>
          <Button className={classes.productBtn} color="inherit" variant="text">
            {" "}
            <SupportAgent style={{ marginRight: "10px", fontSize: "32px" }} />
            Electronics
          </Button>
          <Button className={classes.productBtn} color="inherit" variant="text">
            {" "}
            <Checkroom style={{ marginRight: "10px", fontSize: "32px" }} />
            Men's Fashion
          </Button>
          <Button className={classes.productBtn} color="inherit" variant="text">
            {" "}
            <Checkroom style={{ marginRight: "10px", fontSize: "32px" }} />
            Women's Fashion
          </Button>

          <Button className={classes.productBtn} color="inherit" variant="text">
            {" "}
            <TravelExplore style={{ marginRight: "10px", fontSize: "32px" }} />
            Travel & Clothing
          </Button>

          <Button className={classes.productBtn} color="inherit" variant="text">
            {" "}
            <Fastfood style={{ marginRight: "10px", fontSize: "32px" }} />
            Home & kitchen
          </Button>

          <Button className={classes.productBtn} color="inherit" variant="text">
            {" "}
            <Backpack style={{ marginRight: "10px", fontSize: "32px" }} />
            Backpacks Fashion
          </Button>
          <Button className={classes.productBtn} color="inherit" variant="text">
            {" "}
            <SportsEsports style={{ marginRight: "10px", fontSize: "32px" }} />
            Gaming & Accessories
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PopularCategories;
