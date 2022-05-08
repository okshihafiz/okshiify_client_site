import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Advicement from './../Advicement/Advicement';
const Advicements = () => {
    const [adviceMents, setAdviceMents] = useState([]);
    useEffect(() => {
        fetch("/adviceMents.json")
          .then((res) => res.json())
          .then((data) => setAdviceMents(data));
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
            {adviceMents.map((adviceMent) => (
              <Advicement adviceMent={adviceMent} key={adviceMent.id} />
            ))}
          </Grid>
        </Container>
      );
    };

export default Advicements;