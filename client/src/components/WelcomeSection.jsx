import { Grid, Paper, Typography } from "@mui/material";

const WelcomeSection = () => {
  return (
    <Paper
      sx={{
        borderRadius: "0 12px 12px 0 ",
        background: "#1f3d2b",
        width: "90%",
        
    
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={2} sm={1}></Grid>
        <Grid
          item
          xs={10}
          sm={5}
          sx={{
            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
          }}
        >
          <Typography
            typography={{ xs: "h6", md: "h4" }}
            mt={3}
            // ml={24}
            gutterBottom
            sx={{ color: "#74d143" }}
          >
            WELCOME TO BEOS
          </Typography>
          <Typography
            // ml={24}
            color="white"
            typography={{ xs: "h6", md: "h4" }}
            gutterBottom
          >
            Guiding You to Unlock Your{" "}
            <span style={{ color: "#74d143" }}>Full</span> Potential
          </Typography>

          <Typography
            //ml={24}
            color="white"
            mr={2}
            gutterBottom
            textAlign="justify"
            typography={{ xs: "body2", md: "h6" }}
          >
            Studying is a lifelong journey. And the beautiful thing about
            learning is that nobody can take it away from you. Stop searching,
            enjoy the process.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "right",
          }}
        >
          <img
            height="100%"
            src="welcomSec.png"
            alt="WelcomePic"
            width="75%"
            style={{ borderRadius: "0 12px 12px 0 " }}
          ></img>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WelcomeSection;
