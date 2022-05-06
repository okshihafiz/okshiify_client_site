import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import InfoCard from "../InfoCard/InfoCard";

const InfoCards = () => {
  const [webInfos, setWebInfos] = useState([]);
  // console.log(webInfo);

  useEffect(() => {
    fetch("/webInfo.json")
      .then((res) => res.json())
      .then((data) => setWebInfos(data));
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ paddingTop: "16px" }}
    >
      {webInfos.map((webInfo) => (
        <InfoCard webInfo={webInfo} key={webInfo.id} />
      ))}
    </Grid>
  );
};

export default InfoCards;
