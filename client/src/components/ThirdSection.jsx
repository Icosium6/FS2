import { Grid, Typography } from "@mui/material";
import React from "react";

const ThirdSection = () => {
  return (
    <Grid container spacing={{ sm: 0, md: 1, lg: 2 }}>
      <Grid
        item
        sm={12}
        md={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          typography={{ xs: "body1", sm: "h6" }}
          textAlign="center"
          color="grey"
        >
          EDUCATION FOR EVERYONE
        </Typography>
        <Typography
          typography={{ xs: "h5", sm: "h4" }}
          textAlign="center"
          gutterBottom
        >
          Online Lessons For Remote Learning
        </Typography>
      </Grid>
      <Grid
        item
        sm={12}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ height: "250px" }} src="tableau2.png"></img>
        <Typography typography={{ xs: "h5", sm: "h4" }} textAlign="center">
          Personalized Approach
        </Typography>
        <Typography variant="body1" textAlign="justify" mx={1} gutterBottom>
          You’ll receive the benefit of having professional advice, exclusive
          training, and personalized feedback, focussing on you entirely to
          reach your goals.
        </Typography>
      </Grid>
      <Grid
        item
        sm={12}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ height: "250px" }} src="book2.png"></img>
        <Typography typography={{ xs: "h5", sm: "h4" }} textAlign="center">
          Certified Instructor
        </Typography>
        <Typography variant="body1" textAlign="justify" mx={1} gutterBottom>
          As a qualified teacher, I continually work on my professional
          development to build a repertoire of skills that will prepare you for
          the real world.
        </Typography>
      </Grid>
      <Grid
        item
        sm={12}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ height: "250px" }} src="phone2.png"></img>
        <Typography typography={{ xs: "h5", sm: "h4" }} textAlign="center">
          Multiple Platforms
        </Typography>
        <Typography variant="body1" textAlign="justify" mx={1} gutterBottom>
          Instructing takes place via the platform that is most comfortable for
          you, such as Skype, Zoom, etc. We’ll also agree on the time that suits
          you best.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ThirdSection;
