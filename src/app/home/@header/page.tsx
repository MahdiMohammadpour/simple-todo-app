import ChangeLang from "@/components/ChangeLang";
import ChangeTheme from "@/components/ChangeTheme";
import { Grid2 } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Grid2 container spacing={1} sx={{ alignItems: "center", px: 1 }}>
      <ChangeLang />
      <ChangeTheme />
    </Grid2>
  );
}
