import { Grid2 } from "@mui/material";
import React from "react";

export default function layout({
  children,
  sidebar,
  header,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <Grid2 container sx={{ width: "100%", height: "100vh" }}>
      <Grid2
        container
        size={2}
        sx={{
          height: "100%",
          alignItems: "center",
          px: 2,
          bgcolor: "#1b4965",
        }}
      >
        {sidebar}
      </Grid2>
      <Grid2
        container
        size={"grow"}
        sx={{
          height: "100%",
        }}
      >
        <Grid2
          container
          size={12}
          sx={{
            height: "60px",
            alignItems: "center",
            flexDirection: "row-reverse",
            bgcolor: "#62b6cb",
          }}
        >
          {header}
        </Grid2>
        <Grid2
          container
          size={12}
          sx={{
            height: "calc(100% - 60px)",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          {children}
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
