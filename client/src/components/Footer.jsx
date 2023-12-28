import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "72px",
        backgroundColor: " #333333",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography
              variant="h5"
              gutterBottom
              color="#74d143"
              as={Link}
              to="/"
              sx={{ textDecoration: "none" }}
            >
              BE-OS
            </Typography>
            <Typography variant="body2" color="white">
              Start a personalized journey to success. Dive into tailored
              guidance that brings your goals to life. Unleash your potential
              with us!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: { xs: "none", md: "block" } }}
            textAlign="center"
          >
            <Typography variant="h6" gutterBottom color="#74d143">
              Links
            </Typography>
            <Typography
              as={Link}
              to="/"
              sx={{ textDecoration: "none", color: "white" }}
            >
              Home page
            </Typography>
            <br />
            <Typography
              as={Link}
              to="/courses"
              sx={{ textDecoration: "none", color: "white" }}
            >
              All Courses
            </Typography>
            <br />
            <Typography
              as={Link}
              to="/contact"
              sx={{ textDecoration: "none", color: "white" }}
            >
              Contact me
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography
              variant="h6"
              color="#74d143"
              as={Link}
              to="/contact"
              sx={{ textDecoration: "none" }}
            >
              Get in touch
            </Typography>
            <Typography color="white">Email: info@example.com</Typography>
            <Typography color="white">Phone: (123) 456-7890</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
