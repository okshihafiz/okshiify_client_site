import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BestSell from "../BestSell/BestSell";

const BestSelles = () => {
  const [sellData, setSellData] = useState([]);

  //   console.log(sellData);

  useEffect(() => {
    fetch("/bestsellingdata.json")
      .then((res) => res.json())
      .then((data) => setSellData(data));
  }, []);

  return (
    <Grid container spacing={2}>
      {sellData.map((bestData) => (
        <BestSell key={bestData.id} bestData={bestData} />
      ))}
    </Grid>
  );
};

export default BestSelles;
