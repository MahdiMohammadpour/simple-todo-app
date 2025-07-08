"use client";
//i18n
import { Box, Button, Container } from "@mui/material";
import { useTranslations } from "next-intl";
import { FiDownload } from "react-icons/fi";
import About from "./components/About";
import ProfileInfo from "./components/ProfileInfo";
import Contact from "./components/contact/Contact";
import CustomTabs from "./components/tabs/Tabs";

export default function Home() {
  const t = useTranslations("buttons");

  return (
    <Container sx={{ textAlign: "center", py: 2 }}>
      <Box mt={8}>
        <ProfileInfo />
      </Box>
      <Box mt={6}>
        <About />
      </Box>
      <Box mt={4}>
        <a href="/files/Mahdi-M.pdf" download="Mahdi-M.pdf">
          <Button
            sx={{ p: 2, px: 8, mx: 2 }}
            variant="contained"
            endIcon={<FiDownload fontSize={18} />}
          >
            {t("downloadCv")}
          </Button>
        </a>
        <Contact />
      </Box>
      <Box>
        <CustomTabs />
      </Box>
    </Container>
  );
}