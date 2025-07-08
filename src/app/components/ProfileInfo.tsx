import { Location } from "@/assets/icons";
import { Avatar, Box, Stack, SvgIcon, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function ProfileInfo() {
  const translate = useTranslations("profile");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          gap: 2,
          justifyContent: "start",
          width: {md:"650px",xs:"100%"},
          px:{xs:4,md:0}
        }}
      >
        <Avatar
          alt="M"
          sx={{
            border: (theme) => `6px solid ${theme.palette.primary.main}`,
            width: 130,
            height: 130,
            bgcolor: "#fff",
          }}
        />
        <Stack spacing={1} alignItems={"start"}>
          <Typography sx={{ fontSize: {md:40,sm:30,xs:30}, fontWeight: 600,textAlign:"start" }}>
            {translate("name")} {translate("lastname")}
          </Typography>
          <Typography color="textSecondary" sx={{}}>
            {translate("workTitle")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 0.5,
            }}
          >
            <SvgIcon
              sx={{
                stroke: (theme) => theme.palette.primary.main,
              }}
            >
              <Location />
            </SvgIcon>

            <Typography color="textSecondary" sx={{}}>
              {translate("location")}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
