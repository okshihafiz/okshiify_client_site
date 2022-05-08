import React from "react";
import {
  Home,
  Timeline,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  AccountTree,
} from "@material-ui/icons";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const SideBar = () => {
  const useStyles = makeStyles({
    sidebar: {
      height: "calc(100vh - 50px)",
      background: " #f8f9fa",
      position: "sticky",
      top: "50px",
      marginTop: "4px",
    },

    sidebarWrapper: {
      padding: "20px",
    },

    sidearMenu: {
      marginBottom: "10px",
    },

    sidebarTitle: {
      fontSize: "16px",
      color: "#08152F",
      fontWeight: "600",
    },

    sidebarList: {
      listStyle: "none",
      padding: "5px",
    },

    sidebarListItem: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      padding: "5px",
      borderRadius: "10px",

      "&:hover": {
        background: "#ecebeb",
      },
    },

    active: {
      background: "#ecebeb",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      padding: "5px",
      borderRadius: "10px",
      marginBottom: "4px",
    },

    linkIcon: {
      marginRight: "10px",
      fontSize: "22px",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.sidebar}>
      <Box className={classes.sidebarWrapper}>
        <Box className={classes.sidearMenu}>
          <Typography variant="h3" className={classes.sidebarTitle}>
            Dashboard
          </Typography>
          <ul className={classes.sidebarList}>
            <li className={classes.active}>
              <Home className={classes.linkIcon} />
              Home
            </li>
            <li className={classes.sidebarListItem}>
              <Timeline className={classes.linkIcon} />
              Analytics
            </li>
            <li className={classes.sidebarListItem}>
              <TrendingUp className={classes.linkIcon} />
              Sales
            </li>
          </ul>
        </Box>
        <Box className={classes.sidearMenu}>
          <Typography variant="h3" className={classes.sidebarTitle}>
            Quick Meun
          </Typography>
          <ul className={classes.sidebarList}>
            <li className={classes.sidebarListItem}>
              <PersonOutline className={classes.linkIcon} />
              Users
            </li>
            <li className={classes.sidebarListItem}>
              <Storefront className={classes.linkIcon} />
              Products
            </li>
            <li className={classes.sidebarListItem}>
              <AttachMoney className={classes.linkIcon} />
              Transaction
            </li>
            <li className={classes.sidebarListItem}>
              <BarChart className={classes.linkIcon} />
              Reports
            </li>
          </ul>
        </Box>
        <Box className={classes.sidearMenu}>
          <Typography variant="h3" className={classes.sidebarTitle}>
            Notification
          </Typography>
          <ul className={classes.sidebarList}>
            <li className={classes.sidebarListItem}>
              <MailOutline className={classes.linkIcon} />
              Mail
            </li>
            <li className={classes.sidebarListItem}>
              <DynamicFeed className={classes.linkIcon} />
              Feedback
            </li>
            <li className={classes.sidebarListItem}>
              <ChatBubbleOutline className={classes.linkIcon} />
              Message
            </li>
          </ul>
        </Box>
        <Box className={classes.sidearMenu}>
          <Typography variant="h3" className={classes.sidebarTitle}>
            Staff
          </Typography>
          <ul className={classes.sidebarList}>
            <li className={classes.sidebarListItem}>
              <WorkOutline className={classes.linkIcon} />
              Manage
            </li>
            <li className={classes.sidebarListItem}>
              <AccountTree className={classes.linkIcon} />
              Branch
            </li>
            <li className={classes.sidebarListItem}>
              <Report className={classes.linkIcon} />
              Reports
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
