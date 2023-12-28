import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="BillelChelby.png"
            alt="billel_pic"
            style={{ width: "90%" }}
          ></img>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          typography={{ xs: "h6", md: "h4" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          My name is Billel Chelbi.
        </Typography>
        <Typography
          typography={{ xs: "h6", md: "h4" }}
          textAlign={{ xs: "center", md: "left" }}
          gutterBottom
        >
          I’m a <span style={{ color: "#74d143" }}>certified</span> English
          teacher.
        </Typography>
        <Typography
          typography={{ xs: "body2", md: "h6" }}
          textAlign="justify"
          gutterBottom
        >
          I’m here for one reason – to help you make an impact on the world by
          providing valuable content, remarkable skills, comprehensive training,
          and increased motivation. I’ll assist you in overcoming the barriers
          that have been holding you back. Discover the encouragement and
          support you need!
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            mt: "10px",
          }}
        >
          <Button
            variant="outlined"
            color="dggreen"
            sx={{
              mr: "4px",
              borderRadius: "10px",
              borderWidth: "1px",
            }}
            component={Link}
            to="/courses"
          >
            <Typography textAlign="center">All courses</Typography>
          </Button>
          <Button
            variant="contained"
            color="sgreen"
            sx={{ borderRadius: "10px", color: "#1f3d2b" }}
            component={Link}
            to="/booking"
          >
            <Typography textAlign="center">Book a session</Typography>
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
