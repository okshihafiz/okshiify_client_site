import React from "react";
import { Box, Button, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const TopCategorie = ({ topCategories }) => {
  const { title, title2, img } = topCategories;
  return (
    <Grid item xs={12} sm={12} md={3}>
      <Paper elevation={0}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardMedia
            style={{ width: "16%", height: "16%", marginLeft: "10px" }}
            component="img"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title2}
            </Typography>
            <Button sx={{ height: "40px", width: "80px" }} variant="outlined">
              Viwe 
            </Button>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default TopCategorie;
