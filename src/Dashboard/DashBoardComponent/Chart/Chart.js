import { makeStyles } from "@mui/styles";
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  //Write style component here

  const useStyles = makeStyles({
    chart: {
      margin: "20px",
      padding: "20px",
      webkitBoxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
      boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    },

    chartTitle: {
      marginBottom: "20px",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.chart}>
      <h3 className={classes.chartTitle}>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
