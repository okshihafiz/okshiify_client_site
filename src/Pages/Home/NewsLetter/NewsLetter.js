import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  ArrowRightAlt,
} from "@material-ui/icons";
import clsx from "clsx";

const NewsLetter = () => {
  const useStyle = makeStyles({
    linkArea: {
      // background:'#414040',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "30px",
      height: "30px",
      borderRadius: "2px",
      marginRight: "10px",
    },

    linkItem: {
      textDecoration: "none",
    },

    bottomLink: {
      textDecoration: "none",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#EF9415",
      marginRight: "10px",
    },
    newsBox: {
      background: "#171717",
      padding: "26px",
      color: "#fff",
    },
    letterBox: {
      border: "1px solid gray",
    },

    inputArea: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      padding: "10px 10px",
      position: "relative",
    },

    textFild: {
      zIndex: "-0",
      background: "#fff",
      outline: "none",
      border: "1px solid gray",
      padding: "13px 20px",
      width: "90%",
      fontSize: "16px",
    },
    subBtn: {
      background: "#171717",
      color: "#fff",
      padding: "12px 20px",
      border: "none",
      outline: "none",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "50px",
      position: "absolute",
      right: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "0.4s ease",

      "&:hover": {
        background: "#000",
        right: "16px",
      },
    },
  });

  const classes = useStyle();

  return (
    <Grid sx={{ marginTop: "0px" }} container spacing={0}>
      <Grid item xs={12} md={5}>
        <Box className={classes.newsBox}>
          <Box>
            <Typography variant="h4" gutterBottom>
              NewsLetter
            </Typography>
            <Typography variant="body2" gutterBottom>
              Be the first to find out the about new styles and exclusive
              offers, get 35% off your first purchase!
            </Typography>
          </Box>

          <Box sx={{ marginTop: "26px" }}>
            <Typography variant="caption" gutterBottom component="div">
              Get In Touch
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Box className={classes.linkArea}>
                <Link className={classes.linkItem} to="/">
                  <Facebook
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                      marginTop: "4px",
                      marginLeft: "-10px",
                    }}
                  />
                </Link>
              </Box>
              <Box className={classes.linkArea}>
                <Link className={classes.linkItem} to="/">
                  <Twitter
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                      marginTop: "4px",
                    }}
                  />
                </Link>
              </Box>
              <Box className={classes.linkArea}>
                <Link className={classes.linkItem} to="/">
                  <Instagram
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                      marginTop: "4px",
                    }}
                  />
                </Link>
              </Box>
              <Box className={classes.linkArea}>
                <Link className={classes.linkItem} to="/">
                  <LinkedIn
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                      marginTop: "4px",
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid className={classes.letterBox} item xs={12} md={7}>
        <Box className={classes.inputArea}>
          <input
            type="email"
            className={classes.textFild}
            placeholder="example@example.com"
          />
          <button className={clsx(classes.subBtn)} type="submit">
            {" "}
            Subscribe <ArrowRightAlt />{" "}
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NewsLetter;
