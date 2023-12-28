import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Facebook, Email, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SocialLinks = ({ socialLinks }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        background: "#e0e0e0",
        borderColor: "#66bb6a",
        borderWidth: "2px",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: "#505e11" }}
        >
          Social Links
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          display="flex"
          flexDirection="column"
        >
          {socialLinks.map((item, index) => (
            <Grid item key={index} display="flex" flexDirection="row">
              <Link to={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </Link>
              <Typography marginLeft={2}>{item.link}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const BookSessionCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        background: "#e0e0e0",
        borderColor: "#66bb6a",
        borderWidth: "2px",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: "#505e11" }}
        >
          Book a Session
        </Typography>
        <Typography paragraph>
          Embark on a personalized English language journey with us! Elevate
          your skills through tailored learning experiences designed just for
          you. Whether you're here to refine your communication or conquer
          complex grammar, your path to mastery begins with personalized
          sessions.
        </Typography>
        <Button
          variant="contained"
          color="mgreen"
          fullWidth
          component={Link}
          to="/booking"
        >
          Book a session
        </Button>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  const socialLinks = [
    { icon: <Facebook />, link: "#" },
    { icon: <Instagram />, link: "#" },
    { icon: <Email />, link: "mailto:yourteacher@example.com" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission (e.g., send email or store data)
  };

  return (
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <SocialLinks socialLinks={socialLinks} />
            </Grid>
            <Grid item xs={12}>
              <BookSessionCard />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{
              background: "#e0e0e0",
              borderColor: "#66bb6a",
              borderWidth: "2px",
              borderRadius: "12px",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="grey" textAlign="center">
                Got Questions? Need Assistance?
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                textAlign="center"
                sx={{ color: "#505e11" }}
              >
                Reach Out!
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ background: "white" }}
                  required
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  color="mgreen"
                />
                <TextField
                  sx={{ background: "white" }}
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  color="mgreen"
                />
                <TextField
                  sx={{ background: "white" }}
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  color="mgreen"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="mgreen"
                  fullWidth
                >
                  Leave me a message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
