"use client";
import ChangeLang from "@/components/ChangeLang";
import ChangeTheme from "@/components/ChangeTheme";
import { Box, Container, IconButton } from "@mui/material";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Header() {
  const router = useRouter();
  const isHomePage = usePathname() === "/";
  const currentLocale = Cookies.get("NEXT_LOCALE") || "fa";
  const handleGoBack = () => {
    router.back();
  };

  return (
    <Container sx={{ textAlign: "center", py: 2 }}>
      <Box sx={{position:{md:"relative",xs:"relative"},top:15}}>
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
            <ChangeLang />
          </Box>
          {!isHomePage && (
            <IconButton
              onClick={handleGoBack}
              sx={{
                mr: 1,
                transform: currentLocale !== "fa" ? "rotate(180deg)" : "",
              }}
            >
              <IoMdArrowRoundBack />
            </IconButton>
          )}
        </Box>
      </Box>
    </Container>
  );
}
