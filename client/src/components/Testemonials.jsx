import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Container,
  Box,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const courseReviews = [
  {
    name: "Ruslan",
    review:
      "An excellent tutor. He always selects topics based on your interests. You discuss the subjects that specifically interest you. He is fully engaged in the conversation and attentive to you. He points out your mistakes without interrupting you, analyzes your speech, and gives recommendations. It's a pleasure to work with a professional.",
  },
  {
    name: "Olga",
    review:
      "Bilel is a qualified and dedicated teacher. My learning experience with him is pure pleasure! He encourages open discussion and recommends helpful vocabulary. He is patient, kind and charismatic 😇",
  },
  {
    name: "Gabrielle",
    review:
      "Bilel is a very nice tutor! He help me a lot to be more confident with my English conversation. He is patient, charismatic and invested! Its easy to feel confortable with him. He take the time to make sure your understanding is good. Its always interesting to talk with him and i can improve my English without pressure ! 😊",
  },
  {
    name: "Natali",
    review:
      "Thank you Bilel for unforgettable lessons! I’m really started to communicate English with pleasure.Bilel helped me to interpret a lot of words in different ways and understand native speakers with ease.Also in our lessons we united grammar rules and speaking practice.Tutor was very charismatic and easygoing in our classes! 💚",
  },
];

const Testemonials = () => {
  return (
    <Paper
      sx={{
        borderRadius: "0 12px 12px 0 ",
        background: "#1f3d2b",
        width:"90%"
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
          <Container
            width="100%"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              typography={{ xs: "body1", sm: "h6" }}
              mt={3}
              // ml={24}
              sx={{ color: "#74d143" }}
            >
              TESTIMONIALS
            </Typography>
            <img src="chalta.png" alt="chalta" width="20%"></img>
          </Container>
          <Typography
            sx={{ color: "white" }}
            // ml={24}
            typography={{ xs: "h5", sm: "h4" }}
            gutterBottom
          >
            Why Do People Love Classes with Me?
          </Typography>

          <Typography
            //ml={24}
            mr={2}
            typography="body1"
            sx={{ color: "white" }}
            gutterBottom
          >
            Possibilities suddenly appear with the support and encouragement of
            someone you trust. I see the best in you, and as your teacher, I
            will help you stay on track, do the work, and make lasting changes.
            Read some reviews of my students who have worked with me.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          mb={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            my: 1,
          }}
        >
          <Carousel
            animation="slide"
            navButtonsAlwaysVisible
            interval={4 * 1000}
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
                    width: "80%",

                    allignSelf: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Container
                    sx={{
                      my: 2,
                    }}
                  >
                    <Typography variant="body2" textAlign="center">
                      "{review.review}"
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {review.name}
                    </Typography>
                  </Container>
                </Card>
              </Container>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Testemonials;
