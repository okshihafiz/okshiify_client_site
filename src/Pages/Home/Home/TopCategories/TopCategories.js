import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TopCategorie from "./../TopCategorie/TopCategorie";
import { Typography } from "@mui/material";
const TopCategories = () => {
  const [topCategories, setTopCategories] = useState([]);
  useEffect(() => {
    fetch("/topCategories.json")
      .then((res) => res.json())
      .then((data) => setTopCategories(data));
  }, []);
  return (
    <Grid sx={{ marginTop: "20px",background:"#ede7f6"  }}>
        <Grid sx={{ paddingTop: "20px"  }}>
        <Typography sx={{}}>Top Categories</Typography>
        <hr/>
        <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ paddingTop: "16px" }}
    >
      
      {topCategories.map((topCategories) => (
        <TopCategorie topCategories={topCategories} key={topCategories.id} />
      ))}
    </Grid>
    </Grid>
    </Grid>
  );
};

export default TopCategories;
