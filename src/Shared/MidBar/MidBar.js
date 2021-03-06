import { CardMedia, Grid, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import BusinessLogo from "../../../src/Images/logo/businessLogo.png";
import phContact from "../../../src/Images/Flags/phone-call.png";
import addProducts from "../../../src/Images/Flags/heart.png";
import dashboard from "../../../src/Images/Flags/dashboard.png";
import CustomSearch from "../SearchBar/CustomSearch";
import { Box } from "@mui/system";
import "../../index.css";
import { NavLink } from "react-router-dom";
const MidBar = () => {
  const theme = useTheme();

  const useStyle = makeStyles({
    root: {
      padding: "24px 0",
      textAlign: "left",
    },

    typography: {
      paddingTop: "11px",
      display: "flex",
      alignItems: "center",
      transition: "all 0.3s ease",
    },

    topImg: {
      width: "30px",
      marginRight: "8px",
    },

    miniBar: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  });

  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid className={classes.miniBar} item xs={12} md={2}>
          <CardMedia
            component="img"
            style={{ width: "auto", marginLeft: "26px" }}
            image={BusinessLogo}
            alt="green iguana"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomSearch />
        </Grid>
        <Grid
          item
          style={{ display: "flex", justifyContent: "center" }}
          xs={12}
          md={3}
        >
          <Box className={classes.miniBar}>
            <Typography
              className={classes.typography}
              style={{ fontSize: "15px" }}
              variant="body2"
              gutterBottom
            >
              <img className={classes.topImg} src={phContact} alt="" /> Call Us
              Now: <br />
              +1 02 444 66 997
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          className="favoriteList"
          style={{ display: "flex", justifyContent: "center" }}
          xs={6}
          md={1}
        >
          <Typography
            style={{ marginTop: "5px" }}
            className={classes.typography}
            variant="body2"
            gutterBottom
          >
            <Box>
              <span>
                <img className={classes.topImg} src={addProducts} alt="" />
              </span>
            </Box>
          </Typography>
        </Grid>
        <Grid
          item
          style={{ display: "flex", justifyContent: "center" }}
          xs={6}
          md={2}
        >
          <NavLink
            style={{ textDecoration: "none", color: "#000" }}
            to="/dashboard"
          >
            <Typography
              style={{ fontSize: "15px", cursor: "pointer" }}
              className={classes.typography}
              variant="body2"
              gutterBottom
            >
              <img className={classes.topImg} src={dashboard} alt="" /> Dash
              Board <br />
              Update here
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MidBar;
