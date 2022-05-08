import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const RightActivities = () => {
  const useStyles = makeStyles({
    widgetLg: {
      flex: "2",
      webkitBoxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
      boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
      padding: "20px",
    },

    widgetLgTitle: {
      fontSize: "22px",
      fontWeight: "600",
    },

    widgetLgTable: {
      width: "100%",
      borderSpacing: "20px",
    },

    widgetLgTh: {
      textAlign: "left",
    },

    widgetLgUser: {
      display: "flex",
      alignItems: "center",
      fontWeight: "600",
    },

    widgetLgImg: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: "10px",
    },

    widgetLgAmount: {
      fontWeight: " 300",
    },

    widgetLgButton: {
      padding: "5px 7px",
      border: "none",
      borderRadius: "10px",
    },

    Pending: {
      backgroundColor: "#ebf1fe",
      color: "#2a7ade",
    },
  });
  const classes = useStyles();

  const Button = ({ type }) => {
    return <button className={classes.widgetLgButton}>{type}</button>;
  };

  return (
    <Box className={classes.widgetLg}>
      <h3 className={classes.widgetLgTitle}>Latest transactions</h3>
      <table className={classes.widgetLgTable}>
        <tr className={classes.widgetLgTr}>
          <th className={classes.widgetLgTh}>Customer</th>
          <th className={classes.widgetLgTh}>Date</th>
          <th className={classes.widgetLgTh}>Amount</th>
          <th className={classes.widgetLgTh}>Status</th>
        </tr>
        <tr className={classes.widgetLgTr}>
          <td className={classes.widgetLgUser}>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.widgetLgImg}
            />
            <span className={classes.widgetLgName}>Susan Carol</span>
          </td>
          <td className={classes.widgetLgDate}>2 Jun 2021</td>
          <td className={classes.widgetLgAmount}>$122.00</td>
          <td className={classes.widgetLgStatus}>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className={classes.widgetLgTr}>
          <td className={classes.widgetLgUser}>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.widgetLgImg}
            />
            <span className={classes.widgetLgName}>Susan Carol</span>
          </td>
          <td className={classes.widgetLgDate}>2 Jun 2021</td>
          <td className={classes.widgetLgAmount}>$122.00</td>
          <td className={classes.widgetLgStatus}>
            <Button type="Declined" />
          </td>
        </tr>
        <tr className={classes.widgetLgTr}>
          <td className={classes.widgetLgUser}>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.widgetLgImg}
            />
            <span className={classes.widgetLgName}>Susan Carol</span>
          </td>
          <td className={classes.widgetLgDate}>2 Jun 2021</td>
          <td className={classes.widgetLgAmount}>$122.00</td>
          <td className={classes.widgetLgStatus}>
            <Button type="Pending" />
          </td>
        </tr>
        <tr className={classes.widgetLgTr}>
          <td className={classes.widgetLgUser}>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.widgetLgImg}
            />
            <span className={classes.widgetLgName}>Susan Carol</span>
          </td>
          <td className={classes.widgetLgDate}>2 Jun 2021</td>
          <td className={classes.widgetLgAmount}>$122.00</td>
          <td className={classes.widgetLgStatus}>
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </Box>
  );
};

export default RightActivities;
