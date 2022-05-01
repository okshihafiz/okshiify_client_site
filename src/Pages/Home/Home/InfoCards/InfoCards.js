import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const InfoCards = () => {
  const [webInfo, setWebInfo] = useState([]);
  // console.log(webInfo);

  useEffect(() => {
    fetch("/webInfo.json")
      .then((res) => res.json())
      .then((data) => setWebInfo(data));
  }, []);

  return <Box></Box>;
};

export default InfoCards;
