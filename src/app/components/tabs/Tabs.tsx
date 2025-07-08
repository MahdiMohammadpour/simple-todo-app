"use client";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ExperincesList from "./ExperincesList";
import PortfoliosList from "./PortofilosList";
import SkillsList from "./SkillsList";

// Custom styled Tab component
const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 500,
  padding: "12px 16px",
  color: theme.palette.text.secondary,
  "&.Mui-selected": {
    backgroundColor: theme.palette.background.default,
    borderRadius: "12px",
    color: theme.palette.text.secondary,
  },
}));

// Custom styled Tabs container
const StyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "20px",
  padding: 15,
  "& .MuiTabs-indicator": {
    display: "none",
  },
  gap: 4,
}));

// Custom styled content area
const TabContent = styled(Box)(() => ({
  // padding: "24px",
  marginTop: "20px",
  borderRadius: "10px",
  minHeight: "200px",
  position: "relative",
  overflow: "hidden",
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function CustomTabs() {
  const [value, setValue] = useState(0);
  const translate = useTranslations("buttons");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", margin: "0 auto", p: 3 }}>
      <Box sx={{ p: 3, borderRadius: "16px" }}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="custom tabs example"
            sx={{ maxWidth: 600, width: "100%" }}
          >
            <StyledTab label={translate("experiences")} />
            <StyledTab label={translate("skills")} />
            <StyledTab label={translate("portfolio")} />
          </StyledTabs>
        </Box>

        <TabContent>
          <CustomTabPanel value={value} index={0}>
            <ExperincesList />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <SkillsList />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <PortfoliosList />
          </CustomTabPanel>
        </TabContent>
      </Box>
    </Box>
  );
}
