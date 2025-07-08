import {
  Box,
  Chip,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { IoLinkSharp } from "react-icons/io5";
import { RiTeamLine, RiUser3Line } from "react-icons/ri";
import { TbBrandNextjs, TbBrandReact } from "react-icons/tb";

interface Experience {
  name: string;
  url: string;
  description: string;
  type: string;
}

export default function PortfoliosList() {
  const data = useTranslations("portfolios").raw("items") as Experience[];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // تابع برای مدیریت کلیک در موبایل
  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        width: "100%",
        display: "flex",
        justifySelf: "center",
        mx: "auto",
      }}
    >
      <Grid container spacing={3}>
        {data?.map((item, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                bgcolor: "secondary.main",
                p: 3,
                gap: 4,
                flexDirection: { xs: "column", md: "row" },
                position: "relative",
                minHeight: 200,
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(index)}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity:
                    hoveredIndex === index || clickedIndex === index ? 0.2 : 1,
                  transition: "opacity 0.3s ease",
                  zIndex: 1,
                  backgroundImage: item.url
                    ? `url(https://api.thumbnail.ws/api/abb9b6988c3f99bca2c2773eb25824512548df4a7fad/thumbnail/get?url=${item.url}&width=800&height=6002F&width=800)`
                    : null,
                }}
              />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 15,
                    zIndex: 2,
                    bgcolor: "rgba(0, 0, 0, 0.6)",
                    px: 1,
                    py: 0.5,
                    borderRadius: "8px",
                    left: 15,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
 
              {/* محتوای اصلی */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  zIndex: 2,
                }}
              >
                
                <Stack
                  spacing={1}
                  sx={{
                    opacity:
                      hoveredIndex === index || clickedIndex === index ? 1 : 0,
                    transform:
                      hoveredIndex === index || clickedIndex === index
                        ? "translateY(0)"
                        : "translateY(10px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    visibility:
                      hoveredIndex === index || clickedIndex === index
                        ? "visible"
                        : "hidden",
                    height:
                      hoveredIndex === index || clickedIndex === index
                        ? "100%"
                        : 0,
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  <Chip
                    label={item.type}
                    sx={{
                      // color: "#575757",
                      bgcolor: "background.paper",
                    }}
                    icon={
                      item.type === "team" ? (
                        <RiTeamLine fontSize={20} />
                      ) : (
                        <RiUser3Line fontSize={20} />
                      )
                    }
                  />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                  {item.url && (
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        paddingBottom: "5px",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <IconButton
                        color="error"
                        aria-label={`Visit ${item.name} website`}
                      >
                        <IoLinkSharp />
                      </IconButton>
                    </Link>
                  )}
                                 <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "primary.main",
                    position: "absolute",
                    bottom: 15,
                    zIndex: 2,
                    px: 1,
                    py: 0.5,
                    borderRadius: "8px",
                    right: 15,
                  }}
                >
                  <Tooltip title="React.js">
                    <TbBrandReact fontSize={20} />
                  </Tooltip>
                  +
                  <Tooltip title="Next.js">
                    <TbBrandNextjs fontSize={20} />
                  </Tooltip>
                </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
