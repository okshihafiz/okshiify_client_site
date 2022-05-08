import React from "react";
import { Box, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
const Advicement = ({ adviceMent }) => {
  const { title, title2, title3, img } = adviceMent;
  const useStyles = makeStyles({
    CardBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "35px 25px",
    },
  });
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card  sx={{ background: "#5AB3E6" }} className={classes.CardBox}>
        <Grid>
          <Box>
            <CardContent >
              <Typography sx={{color:"#fff"}}  gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography sx={{color:"#fff"}} variant="body2" >
                {title2}
              </Typography>
              <Typography variant="body2" sx={{color:"#fff"}}>
                {title3}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid>
          <CardMedia
            style={{ width: "75%", height: "35%" }}
            component="img"
            image={img}
            alt="service talk"
          />
        </Grid>
      </Card>
    </Grid>
  );
};

export default Advicement;
