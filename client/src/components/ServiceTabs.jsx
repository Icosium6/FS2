import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const individualServices = [
    "Personalized Language Lessons",
    "Conversation Practice",
    "Grammar and Vocabulary Training",
    // Add more individual services here...
  ];

  const corporationServices = [
    "Business English Workshops",
    "Professional Communication Training",
    "Language Assessment and Consultation",
    // Add more corporation services here...
  ];

  return (
    <Container
      maxWidth="md"
      style={{ padding: "24px", borderRadius: "8px", marginBottom: "10px" }}
    >
      <Typography
        variant="h4"
        style={{
          marginBottom: "16px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "32px", // Default font size for larger screens
        }}
      >
        Services
      </Typography>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        sx={{ background: "#3f51b5", borderRadius: "4px" }}
      >
        <Tab
          label={
            <Typography
              variant="body1"
              fontWeight={activeTab === 0 ? "bold" : "regular"}
              color="white"
            >
              For Individuals
            </Typography>
          }
        />
        <Tab
          label={
            <Typography
              color="white"
              variant="body1"
              fontWeight={activeTab === 1 ? "bold" : "regular"}
            >
              For Corporations
            </Typography>
          }
        />
      </Tabs>
      <Container
        sx={{
          backgroundColor: "#e0e0e0",
        }}
      >
        {activeTab === 0 && (
          <List>
            {individualServices.map((service, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={service}
                  style={{ textAlign: "center" }}
                />
              </ListItem>
            ))}
          </List>
        )}
        {activeTab === 1 && (
          <List>
            {corporationServices.map((service, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={service}
                  style={{ textAlign: "center" }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </Container>
  );
};

export default ServicesTabs;
