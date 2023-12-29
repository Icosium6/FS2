import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Rating,
  Avatar,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import ServicesTabs from "./ServiceTabs";
import IntroVid from "./IntroVid";

import Carousel from "react-material-ui-carousel";

const Home = () => {
  const courseReviews = [
    {
      name: "John Doe",
      review:
        "Billy's teaching method is fantastic! I've learned so much and my confidence in speaking English has greatly improved.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review:
        "I highly recommend Billy's courses. The content is relevant, and the live sessions are engaging and interactive.",
      rating: 4.5,
    },
    {
      name: "Spincha",
      review: "indeed",
      rating: 4,
    },
    // Add more reviews here...
  ];

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
      {/* Hero Section */}
      <div style={{ backgroundColor: "#e0e0e0", width: "100vw" }}>
        <Container
          maxWidth={false}
          style={{
            padding: "24px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h2"
            style={{
              marginBottom: "16px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "32px", // Default font size for larger screens
            }}
          >
            Welcome to /websiteName/
          </Typography>
          <Typography
            variant="h5"
            style={{
              marginBottom: "32px",
              textAlign: "center",
              fontSize: "18px",
            }} // Smaller font size for small screens
          >
            Learn English at your own pace with personalized courses and live
            sessions.
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "32px",
            }}
          ></div>
        </Container>
      </div>
      <ServicesTabs />
      {/* About Me Section */}
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
      {/*  Video Section */}

      <IntroVid />
      {/* Popular Courses Section */}
      <div style={{ backgroundColor: "#e0e0e0", width: "100vw" }}>
        <Container
          maxWidth={false}
          style={{
            padding: "24px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              marginBottom: "24px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "28px", // Default font size for larger screens
            }}
          >
            Popular Courses
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{
                      marginBottom: "16px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Course 1
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "center" }}>
                    Course description goes here. Learn new skills and improve
                    your English fluency.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ padding: "8px 16px", marginTop: "16px" }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{
                      marginBottom: "16px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Course 2
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "center" }}>
                    Another engaging course description. Enhance your language
                    skills with our expert instructors.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ padding: "8px 16px", marginTop: "16px" }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{
                      marginBottom: "16px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Course 3
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "center" }}>
                    This course offers valuable knowledge and interactive
                    learning experiences.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ padding: "8px 16px", marginTop: "16px" }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Reviews Section */}

      <Container
        maxWidth={false}
        style={{
          padding: "24px",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        <Typography
          variant="h4"
          style={{
            marginBottom: "24px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "28px", // Default font size for larger screens
          }}
        >
          What my students say
        </Typography>

        <Carousel
          animation="slide"
          navButtonsAlwaysVisible
          interval={10 * 1000}
          autoPlay
          cycleNavigation
        >
          {courseReviews.map((review, index) => (
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Card
                variant="outlined"
                key={index}
                sx={{
                  width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
                  background: "#e0e0e0",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body2"
                    style={{ marginBottom: "16px", textAlign: "center" }}
                  >
                    "{review.review}"
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    - {review.name}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "16px",
                    }}
                  >
                    <Rating
                      name={`rating-${review.name}`}
                      value={review.rating}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </CardContent>
              </Card>
            </Container>
          ))}
        </Carousel>
      </Container>

      {/* Discount and Sign Up Section */}
      <div style={{ backgroundColor: "#e0e0e0", width: "100vw" }}>
        <Container
          maxWidth={false}
          style={{
            padding: "24px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              marginBottom: "24px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "28px", // Default font size for larger screens
            }}
          >
            Sign up now and get a discount on your first session!
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "32px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "16px 32px" }}
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
