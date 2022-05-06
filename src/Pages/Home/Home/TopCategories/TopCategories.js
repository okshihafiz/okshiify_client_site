import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TopCategorie from "./../TopCategorie/TopCategorie";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const TopCategories = () => {
  // Write here style component
  const useStyles = makeStyles({
    cardArea: {
      border: "1px solid #e1e1e1",
      paddingBottom: "30px",
      marginTop: "14px",
    },
  });
  const classes = useStyles();

  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    fetch("/topCategories.json")
      .then((res) => res.json())
      .then((data) => setTopCategories(data));
  }, []);
  return (
    <Grid sx={{ marginTop: "20px" }}>
      <Box className={classes.cardArea}>
        <Grid sx={{ padding: "20px 26px 30px 26px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", padding: "10px 0" }}
            gutterBottom
            component="div"
          >
            Top Categories
          </Typography>
          <hr style={{ borderTop: "1px solid #e1e1e1" }} />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ paddingTop: "16px" }}
          >
            {topCategories.map((topCategories) => (
              <TopCategorie
                topCategories={topCategories}
                key={topCategories.id}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default TopCategories;
