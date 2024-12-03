"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Showcase from "./Showcase";
import { eventsData } from "./events";
import { ThemeProvider } from "@emotion/react";
import { myTheme } from "../../theme";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
          >
            {eventsData.map((event, index) => (
              <Tab
                sx={{ fontWeight: "600" }}
                label={event.title}
                {...a11yProps(index)}
                key={`tab-${event.title}`}
              />
            ))}
          </Tabs>
        </Box>
        {eventsData.map((event, index) => (
          <CustomTabPanel value={value} index={index} key={event.title}>
            <Showcase
              title={event.title}
              subtitle={event.subtitle}
              tags={event.tags}
              description={event.description}
              imgSrc={event.imgSrc}
              imgAlt={event.imgAlt}
            />
          </CustomTabPanel>
        ))}
      </Box>
    </ThemeProvider>
  );
}
