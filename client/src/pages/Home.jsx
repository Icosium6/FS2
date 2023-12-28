import React from "react";
import { Container, Box ,Grid,Divider} from "@mui/material";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import ThirdSection from "../components/ThirdSection";
import VideoSection from "../components/VideoSection";
import CoursesSection from "../components/CoursesSection";
import Testemonials from "../components/Testemonials";

const Home = () => {
  return (
    <>
      <Container sx={{ mt: "10px" }} maxWidth="lg">
        <br />
        <HeroSection />
      </Container>
      <Container style={{margin:"10px"}}></Container>
      <Grid container justifyContent="flex-start" >
      <Grid item xs={12} lg={12}>
        <WelcomeSection /></Grid>
      </Grid>
      <Container style={{margin:"10px"}}></Container>
      <Container maxWidth="lg">
        <ThirdSection />
      </Container>
      <Container style={{margin:"10px"}}></Container>
      <Grid container justifyContent="flex-end">
        <Grid item xs={12} lg={12}>
          <VideoSection />
        </Grid>
      </Grid>
      <Container style={{margin:"10px"}}></Container>
      <Container maxWidth="lg">
        <CoursesSection />
      </Container>
      <Container style={{margin:"10px"}}></Container>
      <Grid container justifyContent="flex-start" >
      <Grid item xs={12} lg={12}>
        <Testemonials /></Grid>
      </Grid>
    </>
  );
};

export default Home;
