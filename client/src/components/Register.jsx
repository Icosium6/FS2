import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { RadioGroup, Radio, FormLabel, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Stepper, Step, StepLabel, Button, FormControl } from "@mui/material";
import axios from "../api/axios";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Register = () => {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [match, setMatch] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user, mail, password, match]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validMail || !validPwd || !validMatch) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      await axios.post(
        "/signup",
        JSON.stringify({
          email: mail,
          username: user,
          password: password,
          role: role,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setActiveStep(2);
      //good place to reset the input fields
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else {
        const { status } = err.response;
        if (status === 409) {
          console.log(err);
          setErrMsg(err.response.data.message);
        } else {
          setErrMsg("Registration Failed");
          console.log(err);
        }
      }
      setActiveStep(1);
    }
  };

  //validate email :
  useEffect(() => {
    setValidMail(MAIL_REGEX.test(mail));
  }, [mail]);

  //validate pwd
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === match);
  }, [password, match]);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "green" }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {errMsg ? (
            <Alert severity="error" sx={{ marginBottom: "12px" }}>
              {errMsg}
            </Alert>
          ) : null}
          {activeStep === 2 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">
                Account Created Successfully !
              </Typography>
              <Typography>
                A verification link has been sent to your email at :{" "}
              </Typography>
              <Typography>
                <strong>{mail}</strong>
              </Typography>
              <Typography>
                Please check your inbox to verify your account
              </Typography>
            </Box>
          ) : (
            <>
              {activeStep === 1 ? (
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        value={user}
                        id="username"
                        label={
                          role === "corp" ? "corporation name" : "Username"
                        }
                        name="username"
                        autoComplete="username"
                        onChange={(e) => setUser(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        value={mail}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setMail(e.target.value)}
                      />
                      {mail && !validMail && (
                        <Grid item xs={12}>
                          <Alert severity="warning">
                            Please enter a valid Email!
                          </Alert>
                        </Grid>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        value={password}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        value={match}
                        required
                        fullWidth
                        name="password-confirm"
                        label="Re-enter Password"
                        type="password"
                        id="password-confirm"
                        onChange={(e) => setMatch(e.target.value)}
                      />
                    </Grid>
                    {password && !validPwd ? (
                      <Grid item xs={12}>
                        <Alert severity="warning">
                          8 to 24 characters.
                          <br />
                          Must include uppercase and lowercase letters, a number
                          and a special character.
                          <br />
                          Allowed special characters: ! @ # $ %
                        </Alert>
                      </Grid>
                    ) : match && !validMatch ? (
                      <Grid item xs={12}>
                        <Alert severity="warning">
                          Must match the first password input field
                        </Alert>
                      </Grid>
                    ) : null}
                  </Grid>
                  <br />
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="#" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend" sx={{ marginBottom: 1 }}>
                        Choose an account type:
                      </FormLabel>
                      <RadioGroup
                        row
                        name="role"
                        defaultValue="individual"
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <FormControlLabel
                          sx={{
                            marginBottom: 1,
                            bgcolor: "#8bc34a",
                            borderRadius: "16px",
                          }}
                          value="corp"
                          control={<Radio />}
                          label={
                            <Box>
                              <Typography variant="h5" color="primary">
                                Corporation
                              </Typography>
                              <Typography variant="body1">
                                Ideal for businesses and organizations. Book
                                sessions for multiple employees and access
                                exclusive courses tailored for corporate users.
                                Enjoy special pricing and volume discounts to
                                optimize learning opportunities for your
                                workforce.
                              </Typography>
                            </Box>
                          }
                        />
                        <FormControlLabel
                          sx={{
                            marginBottom: 1,
                          }}
                          value="default"
                          control={<Radio />}
                          label={
                            <Box>
                              <Typography variant="h5" color="primary">
                                Individual
                              </Typography>
                              <Typography variant="body1">
                                Designed for personal use. personalized learning
                                with a diverse course catalog. Book individual
                                private sessions for personalized guidance and
                                explore topics of interest at your own pace.
                              </Typography>
                            </Box>
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              )}

              <br />
            </>
          )}
        </Box>
      </Box>
      {!(activeStep === 2) ? (
        <Box>
          <Grid container justifyContent="space-around">
            <Grid item>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                disabled={
                  (activeStep === 0 &&
                    (!validMail || !validPwd || !validMatch)) ||
                  (activeStep === 1 && !role)
                }
                onClick={activeStep === 1 ? handleSubmit : handleNext}
              >
                {activeStep === 1 ? "Signup" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : null}
      <br />
      <Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          <Step>
            <StepLabel>Account Informations</StepLabel>
          </Step>
          <Step>
            <StepLabel>Choose an account type</StepLabel>
          </Step>
        </Stepper>
      </Box>
    </Container>
  );
};

export default Register;
