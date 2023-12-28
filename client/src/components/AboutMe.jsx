import React from "react";
import { Container, Typography, Avatar, Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {/* 1st Section */}
      <div style={{ backgroundColor: "#e0e0e0", width: "100vw" }}>
        <Container
          maxWidth={false}
          sx={{
            width: { xs: "100vw", sm: "80vw", md: "70vw" },
            padding: "24px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <Card
            sx={{
              padding: "6px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Responsive flex-direction
              alignItems: "center", // Responsive align-items
              justifyContent: "center",
            }}
          >
            {/* Avatar */}
            <Avatar
              alt="Chelboub"
              src="9ouba3.jpg"
              sx={{
                width: 150,
                height: 150,
                marginRight: { xs: "0", sm: "24px" }, // Responsive margin for right side spacing
                marginBottom: { xs: "12px", sm: "0" }, // Responsive margin for bottom spacing
              }}
            />

            {/* Introduction Paragraph */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  marginBottom: "24px",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                Meet your Instructor
              </Typography>

              <Typography variant="body1">
                Add your introduction paragraph here. You can describe yourself,
                your interests, and anything you'd like to share with your
                audience.
              </Typography>
            </Box>
          </Card>
        </Container>
      </div>
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "100vw", sm: "80vw", md: "70vw" },
          padding: "24px",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        <Card
          sx={{
            padding: "6px",
            background: "#e0e0e0",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: "24px",
              fontWeight: "bold",
              fontSize: "28px",
            }}
          >
            Background And Experience
          </Typography>

          <Typography variant="body1">Bacckground paraghraph</Typography>
        </Card>
      </Container>

      {/* 2nd Section */}
      <div style={{ backgroundColor: "#e0e0e0", width: "100vw" }}>
        <Container
          maxWidth={false}
          sx={{
            width: { xs: "100vw", sm: "80vw", md: "70vw" },
            padding: "24px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <Card
            sx={{
              padding: "6px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                marginBottom: "24px",
                fontWeight: "bold",
                fontSize: "28px",
              }}
            >
              Teaching method ?? idk
            </Typography>

            <Typography variant="body1">another p tag</Typography>
          </Card>
        </Container>
      </div>
      <Container
        maxWidth={false}
        sx={{
          width: { xs: "100vw", sm: "80vw", md: "70vw" },
          padding: "24px",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        <Card
          sx={{
            padding: "6px",
            background: "#e0e0e0",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginBottom: "24px",
              fontWeight: "bold",
              fontSize: "28px",
            }}
          >
            Call to action
          </Typography>

          <Typography variant="body1">
            karha tebda te9ra, wela at least eb3et message
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-evenly",
            }}
          >
            <Button
              sx={{ marginBlock: "5px" }}
              variant="contained"
              color="success"
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
            <Button
              sx={{ marginBlock: "5px" }}
              variant="contained"
              color="primary"
              component={Link}
              to="/contact"
            >
              Contact me
            </Button>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default AboutMe;
