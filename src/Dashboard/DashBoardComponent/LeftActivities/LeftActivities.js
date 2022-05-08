import React from "react";
import { Visibility } from "@material-ui/icons";
import { Box, makeStyles } from "@mui/material";

const LeftActivities = () => {
  const useStyles = makeStyles({
    widgetSm: {
      flex: " 1",
      webkitBoxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
      boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
      padding: "20px",
      marginRight: "20px",
    },

    widgetSmTitle: {
      fontSize: "22px",
      fontWeight: "600",
    },

    widgetSmImg: {
      width: "40px",
      height: "40px",
      borderRadius: " 50%",
      objectFit: "cover",
    },

    widgetSmList: {
      margin: "0",
      padding: "0",
      listStyle: "none",
    },

    widgetSmListItem: {
      display: "flex",
      alignTtems: "center",
      justifyContent: "space-between",
      margin: "20px 0px",
    },

    widgetSmUser: {
      display: "flex",
      flexDirection: "column",
    },

    widgetSmUsername: {
      fontWeight: "600",
    },

    widgetSmUserTitle: {
      fontWeight: "300",
    },

    widgetSmButton: {
      display: "flex",
      alignItems: "center",
      border: "none",
      borderRadius: "10px",
      padding: "7px 10px",
      backgroundColor: "#eeeef7",
      color: "#555",
      cursor: "pointer",
    },

    widgetSmIcon: {
      fontSize: "16px !important",
      marginRight: "5px",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.widgetSm}>
      <span className={classes.widgetSmTitle}>New Join Members</span>
      <ul className={classes.widgetSmList}>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={classes.widgetSmImg}
          />
          <Box className={classes.widgetSmUser}>
            <span className={classes.widgetSmUsername}>Anna Keller</span>
            <span className={classes.widgetSmUserTitle}>Software Engineer</span>
          </Box>
          <button className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={classes.widgetSmImg}
          />
          <Box className={classes.widgetSmUser}>
            <span className={classes.widgetSmUsername}>Anna Keller</span>
            <span className={classes.widgetSmUserTitle}>Software Engineer</span>
          </Box>
          <button className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={classes.widgetSmImg}
          />
          <Box className={classes.widgetSmUser}>
            <span className={classes.widgetSmUsername}>Anna Keller</span>
            <span className={classes.widgetSmUserTitle}>Software Engineer</span>
          </Box>
          <button className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={classes.widgetSmImg}
          />
          <Box className={classes.widgetSmUser}>
            <span className={classes.widgetSmUsername}>Anna Keller</span>
            <span className={classes.widgetSmUserTitle}>Software Engineer</span>
          </Box>
          <button className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={classes.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={classes.widgetSmImg}
          />
          <Box className={classes.widgetSmUser}>
            <span className={classes.widgetSmUsername}>Anna Keller</span>
            <span className={classes.widgetSmUserTitle}>Software Engineer</span>
          </Box>
          <button className={classes.widgetSmButton}>
            <Visibility className={classes.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
    </Box>
  );
};

export default LeftActivities;
