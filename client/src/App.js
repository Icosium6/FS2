import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Unauthorized from "./components/Unauthorized";
import Missing from "./components/Missing";
import Home from "./pages/Home";
import Admin from "./components/Admin";
import PwdReset from "./components/PwdReset";

import RequireAuth from "./components/RequireAuth";
import EmailVerify from "./components/EmailVerify";
import Activate from "./components/Activate";
import PwdVerify from "./components/PwdVerify";
import ChangePwd from "./components/ChangePwd";
import Navbar from "./components/Navbar";
import { CssBaseline } from "@mui/material";
import "./app.css";
import AboutMe from "./components/AboutMe";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Playfair Display", "serif"].join(","),
      fontFamily: ["Young Serif", "serif"].join(","),
    },
    palette: {
      mgreen: {
        main: "#acf460",
      },
      sgreen: {
        main: "#74d143",
      },
      dgreen: {
        main: "#00701d",
      },
      dggreen: {
        main: "#1f3d2b",
      },
      ddgreen: {
        main: "#082315",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }} //pushed footer stuff
      >
        <Navbar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public */}
              <Route path="courses" element={<Courses />}></Route>
              <Route path="about" element={<AboutMe />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="signup" element={<Register />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="unauthorized" element={<Unauthorized />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/users/:id/verify/:token/"
                element={<EmailVerify />}
              ></Route>
              <Route
                path="/users/:id/reset/:token/"
                element={<PwdVerify />}
              ></Route>
              <Route path="reset-pwd" element={<PwdReset />}></Route>
              {/* Private (role based) */}

              <Route element={<RequireAuth allowedRoles={"admin"} />}>
                <Route path="admin" element={<Admin />}></Route>
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={["default", "admin", "corp"]} />
                }
              >
                <Route path="activate" element={<Activate />}></Route>
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={["default", "admin", "corp"]} />
                }
              >
                <Route path="change-pwd" element={<ChangePwd />}></Route>
              </Route>

              {/* else */}
              <Route path="*" element={<Missing />}></Route>
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
