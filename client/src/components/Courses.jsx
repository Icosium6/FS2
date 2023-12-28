import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";

const Courses = () => {
  // Dummy data for handpicked courses
  const handpickedCourses = [
    {
      title: "Course 1",
      description: "Description for Course 1",
      image: "course_image_1.jpg", // Replace with image URL or import image file
    },
    {
      title: "Course 2",
      description: "Description for Course 2",
      image: "course_image_2.jpg", // Replace with image URL or import image file
    },
    {
      title: "Course 3",
      description: "Description for Course 3",
      image: "course_image_3.jpg", // Replace with image URL or import image file
    },
  ];

  // Dummy data for all other courses
  const allCourses = [
    {
      title: "Course 1",
      description: "Description for Course 1",
      image: "course_image_1.jpg", // Replace with image URL or import image file
    },
    {
      title: "Course 2",
      description: "Description for Course 2",
      image: "course_image_2.jpg", // Replace with image URL or import image file
    },
    {
      title: "Course 3",
      description: "Description for Course 3",
      image: "course_image_3.jpg", // Replace with image URL or import image file
    },
    ,
    {
      title: "Course 3",
      description: "Description for Course 3",
      image: "course_image_3.jpg", // Replace with image URL or import image file
    },
    ,
    {
      title: "Course 3",
      description: "Description for Course 3",
      image: "course_image_3.jpg", // Replace with image URL or import image file
    },
  ];

  return (
    <div>
      {/* Welcome message */}
      <Typography variant="h4" gutterBottom>
        Welcome! Choose from a wide variety of courses.
      </Typography>

      {/* Carousel for handpicked courses */}
      <Grid container spacing={2}>
        {handpickedCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Grid for all other courses */}
      <Grid container spacing={2}>
        {allCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              {/* You can customize the card content for all other courses here */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Courses;
