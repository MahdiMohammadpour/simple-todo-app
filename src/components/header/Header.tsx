"use client";

import ChangeTheme from "@/components/header/ChangeTheme";
import { Box, Container } from "@mui/material";

export default function Header() {
  return (
    <Container sx={{ textAlign: "center", py: 2 }}>
      <Box sx={{ position: { md: "relative", xs: "relative" }, top: 15 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 1,
            }}
          >
            <ChangeTheme />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
