import CoursesCards from "../components/CoursesCards";
import {
  Container,
  Grid,
  Typography,
  Divider,
  Button,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Courses = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/courses?search=${search}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <Container fullWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            typography={{ xs: "h6", sm: "h5" }}
            textAlign="center"
            color="#505e11"
            mt={2}
          >
            Course Catalog: Your Gateway to Mastery
          </Typography>

          <Typography
            typography={{ xs: "body1", sm: "h6" }}
            textAlign="center"
            gutterBottom
          >
            Embark on a journey of language mastery with our exceptional,
            specialized courses. Refine your grammar, unlock creativity, and
            enjoy the flexibility of booking individual sessions. Your path to
            excellence begins here. Welcome to specialized brilliance!
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6.5}>
              <TextField
                label="search for a specefic course"
                type="search"
                size="small"
                id="search"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                color="mgreen"
                sx={{
                  display: "flex",
                  background: "white",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Divider>
                <Chip label={<Typography variant="body2">OR :</Typography>} />
              </Divider>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3.5}
              sx={{
                display: "flex",
                justifyContent: "center",
                allignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="mgreen"
                sx={{ width: "100%", borderRadius: "12px" }}
                component={Link}
                to="/booking"
              >
                Book A Session
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
        </Grid>
        <Grid item xs={12}>
          <CoursesCards data={data} sm={6} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Courses;
