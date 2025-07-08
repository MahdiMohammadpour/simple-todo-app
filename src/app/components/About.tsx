import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function About() {
  const translate = useTranslations("profile");
  return (
    <Box sx={{display:"flex",justifyContent:"center",}}>
      <Typography color="textSecondary" sx={{textAlign: "justify",maxWidth:"600px",lineHeight:"1.7" }}>
        {translate("about")}
      </Typography>
    </Box>
  );
}
