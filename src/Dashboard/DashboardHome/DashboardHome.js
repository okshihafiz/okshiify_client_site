import React from "react";
import { Box } from "@mui/system";
import FeauturedInfo from "../DashBoardComponent/FeauturedInfo/FeauturedInfo";
import { userData } from "../../userData";
import Chart from "../DashBoardComponent/Chart/Chart";

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
    </Box>
  );
};

export default DashboardHome;
