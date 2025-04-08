import { Grid2 } from "@mui/material";
import React from "react";
import ViewPage from "./ViewPage";

export default function SideBar() {
  return (
    <Grid2
      container
      size={12}
      spacing={2}
      sx={{
        flexDirection: "column",
        flexWrap: "nowrap",
        height: "100%",
        overflow: "auto",
      }}
    >
      <ViewPage title="home" href="/home" />
      <ViewPage title="icon" href="/icon" />
    </Grid2>
  );
}
