import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import React from "react";
import p1 from "../../../Images/demoCard/p1.png";
import p2 from "../../../Images/demoCard/p2.png";
import p3 from "../../../Images/demoCard/p3.png";

const DemoCard = () => {
  const useStyle = makeStyles({
    demoBox: {
      // background: "#171717",
      borderRadius: "3px",
      position: "relative",
    },
    shopBtn: {
      color: "#fff",
      position: "absolute",
      top: "40%",
      left: "30%",
      outline: "none",
      border: "1px solid #fff",
      transition: "all 0.5s ease",

      "&:hover": {
        background: "#fff",
        cursor: "pointer",
        color: "#000",
      },
    },
  });

  const classes = useStyle();

  return (
    <Grid
      sx={{ marginTop: "10px", marginBottom: "10px" }}
      container
      spacing={2}
    >
      <Grid item xs={12} md={4}>
        <Box sx={{ background: "#e1e1e1" }} className={classes.demoBox}>
          <img width="100%" src={p1} alt="" />
          <Box>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.shopBtn}
            >
              {" "}
              Shop Now
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ background: "#F9B019" }} className={classes.demoBox}>
          <img width="100%" src={p2} alt="" />
          <Box>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.shopBtn}
            >
              {" "}
              Shop Now
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ background: "#e1e1e1" }} className={classes.demoBox}>
          <img width="100%" src={p3} alt="" />
          <Box>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.shopBtn}
            >
              {" "}
              Shop Now
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DemoCard;
