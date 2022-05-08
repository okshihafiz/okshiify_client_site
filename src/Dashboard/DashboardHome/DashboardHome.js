import React from "react";
import { Box } from "@mui/system";
import FeauturedInfo from "../DashBoardComponent/FeauturedInfo/FeauturedInfo";
import { userData } from "../../userData";
import Chart from "../DashBoardComponent/Chart/Chart";
import Grid from "@mui/material/Grid";
import LeftActivities from "../DashBoardComponent/LeftActivities/LeftActivities";
import RightActivities from "../DashBoardComponent/RightActivities/RightActivities";

const DashboardHome = () => {
  return (
    <Box>
      <FeauturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <LeftActivities />
        </Grid>
        <Grid item xs={12} md={8}>
          <RightActivities />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;
