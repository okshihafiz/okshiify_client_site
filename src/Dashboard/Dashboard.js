import React from "react";
import DashboardTopBar from "./DashboardTopBar/DashboardTopBar";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import DashboardHome from "./DashboardHome/DashboardHome";

const Dashboard = () => {
  return (
    <Box>
      <DashboardTopBar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={10}>
          <DashboardHome />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
