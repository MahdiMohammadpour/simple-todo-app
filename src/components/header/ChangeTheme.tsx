"use client";
import { useContext } from "react";
// i18n
// mui
import { Box, IconButton, SvgIcon, Typography, useTheme } from "@mui/material";
// react-icons
// context
import { Theme } from "@/assets/icons";
import { ColorModeContext } from "@/config/MUI/Provider";

export default function ChangeTheme() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <Box
      component={"header"}
      sx={{
        bgcolor: "primary.main",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        borderRadius: "0 0 25px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1.6,
        px: 3,
      }}
    >
      <Typography
        sx={{ color: "#fff", fontSize: 24, fontWeight: 700 }}
        variant="h1"
      >
        My Todo List
      </Typography>
      <IconButton
        sx={{
          bgcolor: mode === "dark" ? "#171F26" : "#FFFFFF",
          // border: mode === "dark" ? "none" : "1px solid #E7E7E7",
          width: "56px",
          height: "56px",
          "&:hover": {
            bgcolor: mode === "dark" ? "#131b22ff" : "#e9e9e9ff",
          },
        }}
        onClick={toggleColorMode}
        color="inherit"
      >
        <SvgIcon
          sx={{
            "& path": { fill: mode === "dark" ? "#A3ABB2" : "#3D3D3D" },
          }}
          viewBox=" 0 0 40 40"
        >
          <Theme />
        </SvgIcon>
      </IconButton>
    </Box>
  );
}
