import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState("");
  const resetErr = () => {
    setErrMsg("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await axios.post(
        LOGIN_URL,
        {
          email: data.get("email"),
          password: data.get("password"),
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const user = response?.data?.user;
      setAuth({ user });
      navigate("/", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 404) {
        setErrMsg(err.response.data);
      } else if (err.response?.status === 409) {
        setErrMsg(err.response.data);
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            onChange={resetErr}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={resetErr}
          />
          {errMsg ? <Alert severity="error">{errMsg}</Alert> : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography component={Link} to="/reset-pwd" variant="body2">
                Forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Typography component={Link} to="/signup" variant="body2">
                Don't have an account? Sign Up!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
