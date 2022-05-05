import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import InfoCard from "../InfoCard/InfoCard";

// const infoCards=[
//   {
//     "id": "01",
//     "title": "Free Delivery",
//     "title2": "free shopping on all order",
//     "img": "https://i.ibb.co/0K3YMnS/img1.png"
//   },
//   {
//     "id": "02",
//     "title": "Online Support 24/7",
//     "title2": "Support online 24 hour",
//     "img": "https://i.ibb.co/vJknMwH/img2.png"
//   },
//   {
//     "id": "03",
//     "title": "Money Return",
//     "title2": "Back guarantee under 7 days",
//     "img": "https://i.ibb.co/qsBZZD4/img3.png"
//   },
//   {
//     "id": "04",
//     "title": "Member Discount",
//     "title2": "Onevery order over $30.00",
//     "img": "https://i.ibb.co/cYnkGWZ/img4.png"
//   }
// ]

const InfoCards = () => {
  const [webInfo, setWebInfo] = useState([]);
  // console.log(webInfo);

  useEffect(() => {
    fetch("/webInfo.json")
      .then((res) => res.json())
      .then((data) => setWebInfo(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {webInfo.map((webInfo) => (
          <InfoCard key={webInfo.name} webInfo={webInfo}></InfoCard>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoCards;
