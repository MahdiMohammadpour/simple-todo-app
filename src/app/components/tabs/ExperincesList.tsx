import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Chip, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Experience {
  company: string;
  url: string;
  position: string;
  start: string;
  end: string;
  description: string;
  type: string;
}

export default function ExperincesList() {
  const data = useTranslations("experiences").raw("items") as Experience[];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}
    >
      {data?.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            bgcolor: "secondary.main",p: 3,gap:4,
            flexDirection:{xs:"column",md:"row"}
          }}
        >
          {/* Header */}
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              p: 3,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "start",
              width: {xs:"100%",md:"25%"},borderRadius:"16px"
            }}
          >
            <Link
              href={item.url}
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom:"1px solid #575757",
                paddingBottom:"5px"
              }}
            >
              <Typography
                variant="h5"
                fontSize={"20px"}
                fontWeight="bold"
                color="#3D3D3D"
              >
                {item.company}
              </Typography>
              <OpenInNewIcon fontSize="small" sx={{color: "#575757",}}/>
            </Link>
            <Typography variant="h6" fontSize={"16px"} color="#3D3D3D">
              {item.position}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#575757",
              }}
            >
              <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">
                {item.start} - {item.end}
              </Typography>
            </Box>
            <Chip label={item.type} sx={{ color: "#575757" }} />
          </Box>

          {/* Body */}
          <Box sx={{  width:{xs:"100%",md:"75%"},textAlign:"start"}}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 2,textAlign:"justify" }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
