import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import InfoCard from "../InfoCard/InfoCard";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";

const InfoCards = () => {
  const [webInfos, setWebInfos] = useState([]);
  // console.log(webInfo);

  useEffect(() => {
    fetch("/webInfo.json")
      .then((res) => res.json())
      .then((data) => setWebInfos(data));
  }, []);

  const useStyles = makeStyles({
    cardArea: {
      border: "1px solid #e1e1e1",
      paddingBottom: "10px",
      marginTop: "14px",
    },
  });
  const classes = useStyles();

  return (
    <Container>
      <Grid
        className={classes.cardArea}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {webInfos.map((webInfo) => (
          <InfoCard webInfo={webInfo} key={webInfo.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default InfoCards;
