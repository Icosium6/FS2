import React from "react";
import { Container, Typography, Box, Button, Grid,Avatar} from "@mui/material";

const AboutMe = () => {
  return (
   <Grid container spacing={1.5} mt={1}>
     <Grid item xs={12}><Typography typography={{ xs: "h6", md: "h4" }} textAlign="center">Meet Your Instructor</Typography></Grid>
     <Grid item xs={12} md={4}>
      <Avatar
              alt="Bilel_Chelbi"
              src="bilelpfp.jpg"
              sx={{
                width: "100%",
                height:"100%",
              }}
            /></Grid>
            <Grid item xs={12} md={8}>
              
              <Typography typography={{ xs: "body2", md: "h6" }}>Certified & Experienced Native English Teacher with 5+ years of experience ⭐️ </Typography>
              <Typography typography={{ xs: "body2", md: "h6" }}>Improve your SPEAKING skills & confidence for career/business ✅</Typography>
            <br />
            <Grid container spacing={1}>
              <Grid item sx={1}><img src="medal.png" alt="medalIcon" width="20px" style={{marginRight:"5px"}} /></Grid>
              <Grid item sx={11}><Typography typography={{ xs: "body2", md: "h6" }}> A highly rated and experienced tutor.</Typography></Grid>
            </Grid> 
            <Grid container spacing={1}>
              <Grid item sx={1}><img src="haticon.png" alt="hatIcon" width="20px" style={{marginRight:"5px"}} /></Grid>
              <Grid item sx={11}><Typography typography={{ xs: "body2", md: "h6" }}> Speaks English (Native), Arabic (C2), French (Native)</Typography></Grid>
            </Grid>  
            <Grid container spacing={1}>
              <Grid item sx={1}><img src="perso.png" alt="persoIcon" width="20px" style={{marginRight:"5px"}} /></Grid>
              <Grid item sx={11}><Typography typography={{ xs: "body2", md: "h6" }}> +1100 lessons taught</Typography></Grid>
            </Grid>        
            
            </Grid></Grid>
   
  );
};

export default AboutMe;
