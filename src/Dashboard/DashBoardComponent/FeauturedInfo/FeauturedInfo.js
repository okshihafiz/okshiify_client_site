import { ArrowDownwardRounded, ArrowUpward } from "@material-ui/icons";
import React from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Grid } from "@mui/material";

const FeauturedInfo = () => {
  const useStyles = makeStyles({
    futuredInfo: {
      display: "flex",
      marginTop: "30px",
    },

    futuredInfoItem: {
      flex: "1",
      padding: "40px",
      margin: "0 14px",
      borderRadius: "8px",
      boxShadow: "12px 12px 46px -16px rgba(0, 0, 0, 0.2)",
      webkitBoxShadow: "12px 12px 46px -16px rgba(0, 0, 0, 0.2)",
      mozBoxShadow: "12px 12px 46px -16px rgba(0, 0, 0, 0.2)",
    },

    futuredInfoTitle: {
      fontSize: "20px",
    },

    headMoney: {
      fontSize: "30px",
      fontWeight: "600",
    },

    futureInfoMoneyConyainer: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0px",
    },
    lessMoney: {
      marginLeft: "20px",
      display: "flex",
      alignItems: "center",
    },
    infoArrow: {
      fontSize: "20px !important",
      marginLeft: "6px",
    },
    positive: {
      color: "green",
    },
    negative: {
      color: "red",
    },
    futureMonthTitle: {
      color: "#acabab",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.futuredInfo}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box className={classes.futuredInfoItem}>
            <span className={classes.futuredInfoTitle}>Revanue</span>
            <Box className={classes.futureInfoMoneyConyainer}>
              <span className={classes.headMoney}>$ 2,450</span>
              <span className={classes.lessMoney}>
                {" "}
                -11.14{" "}
                <ArrowDownwardRounded
                  className={clsx(classes.infoArrow, classes.negative)}
                />{" "}
              </span>
            </Box>
            <span className={classes.futureMonthTitle}>
              {" "}
              Compared to last month
            </span>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.futuredInfoItem}>
            <span className={classes.futuredInfoTitle}>Sales</span>
            <Box className={classes.futureInfoMoneyConyainer}>
              <span className={classes.headMoney}>$ 3,550</span>
              <span className={classes.lessMoney}>
                {" "}
                10.20{" "}
                <ArrowUpward
                  className={clsx(classes.infoArrow, classes.positive)}
                />{" "}
              </span>
            </Box>
            <span className={classes.futureMonthTitle}>
              {" "}
              Compared to last month
            </span>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.futuredInfoItem}>
            <span className={classes.futuredInfoTitle}>Cost</span>
            <Box className={classes.futureInfoMoneyConyainer}>
              <span className={classes.headMoney}>$ 1,250</span>
              <span className={classes.lessMoney}>
                {" "}
                -06.13{" "}
                <ArrowDownwardRounded
                  className={clsx(classes.infoArrow, classes.negative)}
                />{" "}
              </span>
            </Box>
            <span className={classes.futureMonthTitle}>
              {" "}
              Compared to last month
            </span>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeauturedInfo;
