"use client";

import { useTranslations } from "next-intl";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const t = useTranslations("HomePage");

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        background: "linear-gradient(135deg, #5fa8d3, #cae9ff)",
        color: "#fff",
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" fontWeight={700} mb={2}>
          {t("welcome")}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Typography variant="h6" mb={4}>
          {t("description")}
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={Link}
          href="/home"
          sx={{ backgroundColor: "#fff", color: "#2196F3", fontWeight: 600 }}
        >
          {t("home")}
        </Button>
      </motion.div>
    </Box>
  );
}
