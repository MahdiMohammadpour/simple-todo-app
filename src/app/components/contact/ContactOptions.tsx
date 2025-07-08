import { Bale, Telegram } from "@/assets/icons";
import { Box, Button, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const options = [
  {
    name: "mamahdimohammadpour1381@gmail.com",
    icon: "",
    link: "mailto:mamahdimohammadpour1381@gmail.com",
    fullWidth: true,
  },
  { name: "09211412072", icon: "", link: "tel:09211412072", fullWidth: true },
  { name: "", icon: <Telegram />, link: "", fullWidth: false },
  {
    name: "",
    icon: <Bale />,
    link: "",
    fullWidth: false,
  },
];

export default function ContactOptions() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {options?.map(
        (option: {
          name: string;
          icon: ReactNode;
          link: string;
          fullWidth: boolean;
        }) => {
          return (
            <Box
              sx={{
                width: option?.fullWidth ? "100%" : "unset",
                display: "flex",
              }}
              key={option?.name}
            >
              <Link
                href={option?.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "unset",
                  width: option?.fullWidth ? "100%" : "unset",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: option?.fullWidth
                      ? "space-between"
                      : "center",
                    alignItems: "center",
                    p: 2,
                    width: "100%",
                  }}
                  variant="contained"
                  color="secondary"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {option?.icon ? (
                      <SvgIcon viewBox="0 0 20 20">{option?.icon}</SvgIcon>
                    ) : (
                      <Typography>{option?.name}</Typography>
                    )}
                  </Box>
                  {option?.fullWidth && <IoChevronForwardOutline />}
                </Button>
              </Link>
            </Box>
          );
        }
      )}
    </Box>
  );
}
