import React from "react";
import DashboardTopBar from "./DashboardTopBar/DashboardTopBar";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import SideBar from "./SideBar/SideBar";

const Dashboard = () => {
  return (
    <Box>
      <DashboardTopBar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={10}></Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
