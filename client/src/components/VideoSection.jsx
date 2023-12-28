import {
  Grid,
  Paper,
  Typography,
  Container,
  CardMedia,
  Box,
} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState,useRef } from "react";

const VideoSection = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  return (
    <Paper
      sx={{
        borderRadius: "12px 0 0 12px",
        background: "#1f3d2b",
        width: "90%",
        position: 'relative',
        left: '9%',
        
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={2} sm={1} ></Grid>
        <Grid
          item
          xs={10}
          sm={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            // mr={24}
            mt={1}
            typography={{ xs: "h5", sm: "h4" }}
            gutterBottom
            color="white"
          >
            Check out a short{" "}
            <span style={{ color: "#74d143" }}>video presentation</span>
          </Typography>

          <Typography
            //ml={24}
            mr={2}
            typography="body1"
            gutterBottom
            color="white"
            textAlign="justify"
          >
            I am sure that we all have far more potential than we believe or
            use, and I enjoy the process of helping my students bring that
            potential to the fore. I love seeing people happy and fulfilled in
            both their lives and business or career after acquiring new skills
            with me.
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
            }}
          >
            <img src="arrow.png" alt="arrow" width="35%"></img>
          </Box>
        </Grid>
        <Grid
          my={1}
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container >

          {videoPlaying ? (
        <CardMedia
        sx={{borderRadius:"12px"}}
          component="video"
          controls
          autoPlay
          src="pres.mp4"
          title="Video Title"
          ref={videoRef}
          
          onPlaying={() =>{ setVideoPlaying(true);}}
          onEnded={() => setVideoPlaying(false)}
        />
      ) : (
        <div style={{ position: 'relative' }}>
          <CardMedia
          sx={{borderRadius:"12px"}}
            component="img"
            image="VideoThumbnail.png"
            title="Thumbnail"
            
            onClick={() => setVideoPlaying(true)}
            style={{ cursor: 'pointer' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
            onClick={() => setVideoPlaying(true)}
          >
            <PlayArrowIcon style={{ fontSize: 64, color: 'white' }} />
          </div>
        </div>
      )}

          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VideoSection;
