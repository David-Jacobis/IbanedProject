import * as React from "react";
import { Grid } from "@mui/material";
import "../gridM/gridM.css";

export default function GridCard(props) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      className="grid-card-container"
    >
      <Grid item xs={12} sm={12} md={12}>
        <h1 className="grid-card-title">{props.title}</h1>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img src={props.image} alt="Imagem 1" className="grid-card-image" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <p className="grid-card-text">{props.text}</p>
      </Grid>
    </Grid>
  );
}
