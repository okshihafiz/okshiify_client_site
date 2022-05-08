import { Language, Notifications, Settings } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid, useTheme, CardMedia } from "@mui/material";
import React from "react";
import clsx from "clsx";
import BusinessLogo from "../../../src/Images/logo/businessLogo.png";

const DashboardTopBar = () => {
  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      background: "#e1e1e1",
      color: " #171717",
      padding: "10px",
    },

    logoRespnsive: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },

    rightHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    iconRespnsive: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },

    rightIconContainer: {
      position: "relative",
      marginRight: "10px",
    },

    notificatioBadge: {
      position: "absolute",
      width: "15px",
      height: "15px",
      top: "-8px",
      left: "10px",
      background: "red",
      color: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    MuIconDevelop: {
      color: "#a7a5a5",
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      cursor: "pointer",
    },
  });

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              style={{ width: "auto", height: "45px" }}
              image={BusinessLogo}
              alt="green iguana"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className={clsx(classes.rightHeader, classes.iconRespnsive)}>
              <Box className={classes.rightIconContainer}>
                <Notifications className={classes.MuIconDevelop} />
                <span className={classes.notificatioBadge}>2</span>
              </Box>
              <Box className={classes.rightIconContainer}>
                <Language className={classes.MuIconDevelop} />
                <span className={classes.notificatioBadge}>2</span>
              </Box>
              <Box className={classes.rightIconContainer}>
                <Settings className={classes.MuIconDevelop} />
              </Box>
              <Box className={classes.rightIconContainer}>
                <img
                  className={classes.avatar}
                  src="https://i.ibb.co/Htt4Bwn/86196176.jpg"
                  alt="user"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardTopBar;
