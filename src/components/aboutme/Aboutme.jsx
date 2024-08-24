import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="img" height="400px" image={props.img} />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
