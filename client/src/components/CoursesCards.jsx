import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
  CircularProgress,
  Divider,
} from "@mui/material";

import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  if (data.length === 0) {
    return <p style={{ textAlign: "center" }}>No Courses to show</p>;
  }
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: "1px",
        mb: "10px",
        justifyContent: "left",
      }}
    >
      {data.map((item) => (
        <Grid item key={item._id} xs={12} sm={6} md={4}>
          <Card
            variant="outlined"
            sx={{
              ":hover": {
                boxShadow: 16,
                borderColor: "#acf460",
                borderWidth: "3px",
              },
              borderColor: "#58749c",
              borderRadius: "10px",
              height: "100%", // Set a fixed height for the Card
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardActionArea
              component={Link}
              to={"/courses/" + item._id}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                sx={{
                  objectFit: "cover", // Maintain aspect ratio
                  height: "250px",
                }}
                image={`http://localhost:8000/${item.thumbnail.replace(
                  "public\\",
                  ""
                )}`}
                title={item.title}
                alt={item.title}
              />

              <CardContent>
                <Typography variant="h6" textAlign="center">
                  {item.title}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body1" textAlign="start">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCard;
