import { Box, Grid, Paper, Typography } from "@mui/material";

interface Skill {
  name: string;
  range: number;
}

export default function SkillsList() {
  const data: Skill[] = [
    { name: "React.js", range: 5 },
    { name: " Next.js", range: 4 },
    { name: "Redux ToolKit & RTK Query", range: 4 },
    { name: " Material UI", range: 5 },
    { name: "Tailwind", range: 4 },
    { name: "MDB", range: 4 },
    { name: "JavaScript", range: 4 },
    { name: "Figma", range: 3 },
    { name: "Adobe Photoshop", range: 3 },
    { name: "HTML", range: 5 },
    { name: "CSS", range: 5 },
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}
    >
      <Grid container spacing={2}>
        {data?.map((item, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Paper
              sx={{
                boxShadow: 0,
                borderRadius: "12px",
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2.5,
              }}
            >
              <Typography sx={{textAlign:"start"}}>{item?.name}</Typography>
              {RangeCircles(item?.range)}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function RangeCircles(num: number) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        direction:"rtl"
      }}
    >
      {Array.from(Array(5)).map((_, index) => {
        return (
          <Box
            key={index}
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              bgcolor: index + 1 <= num ? "primary.main" : "background.default",
            }}
          />
        );
      })}
    </Box>
  );
}