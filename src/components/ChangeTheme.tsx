"use client";
import { useContext } from "react";
// i18n
// mui
import { IconButton, SvgIcon, useTheme } from "@mui/material";
// react-icons
// context
import { Theme } from "@/assets/icons";
import { ColorModeContext } from "@/config/MUI/Provider";

export default function ChangeTheme() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <IconButton
      sx={{
        bgcolor: mode === "dark" ? "#171F26" : "#FFFFFF",
        border: mode === "dark" ? "none" : "1px solid #E7E7E7",
        width: "56px",
        height: "56px",
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
        <Theme  />
      </SvgIcon>
    </IconButton>
  );
}
