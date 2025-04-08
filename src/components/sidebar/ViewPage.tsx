"use client";

import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function ViewPage({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Box
      component={Link}
      href={href}
      sx={{
        display: "flex",
        height: "50px",
        width: "100%",
        bgcolor: isActive ? "primary.main" : "background.default",
        borderRadius: "16px",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: isActive ? "primary.contrastText" : "text.primary",
        fontWeight: isActive ? "800" : "400",
        "&:hover": {
          bgcolor: isActive ? "primary.dark" : "background.paper",
          cursor: "pointer",
        },
      }}
    >
      {t(title)}
    </Box>
  );
}
