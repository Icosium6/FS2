import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SpeedIcon from "@mui/icons-material/Speed";
import Divider from "@mui/material/Divider";

import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import Chip from "@mui/material/Chip";

const Navbar = () => {
  const { setAuth } = useContext(AuthContext); //for the logout
  const { auth } = useAuth(); //for showing the user
  const navigate = useNavigate();

  const logout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/logout", { withCredentials: true });
      setAuth((prevAuth) => undefined);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElNav2, setAnchorElNav2] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  useEffect(() => {
    setAnchorElUser(null);
  }, [auth]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenNavMenu2 = (event) => {
    setAnchorElNav2(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseNavMenu2 = () => {
    setAnchorElNav2(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ background: "#1f3d2b", color: "black" }}>
      <Toolbar disableGutters>
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          component={Link}
          to="/"
        >
          <img src="beosNav.png" alt="BeosLogo" height="90vw"></img>
        </Box>
        {/**********************************************links menu for small screen *************************************************/}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem
              component={Link}
              to="/courses"
              onClick={handleCloseNavMenu}
            >
              Courses
            </MenuItem>
            <MenuItem
              component={Link}
              to="/contact"
              onClick={handleCloseNavMenu}
            >
              Contact
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleCloseNavMenu}>
              About me
            </MenuItem>
          </Menu>
        </Box>

        {/**********************************************links menu for big screen *************************************************/}
        <Box
          sx={{ display: { xs: "flex", md: "none" } }}
          component={Link}
          to="/"
        >
          <img src="beosNav.png" alt="BeosLogo" height="50vw"></img>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={handleCloseNavMenu}
            color="mgreen"
            sx={{ my: 2, display: "block" }}
            component={Link}
            to="/courses"
          >
            Courses
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
            component={Link}
            to="/contact"
          >
            Contact
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
            component={Link}
            to="/about"
          >
            About me
          </Button>
        </Box>
        {/********************************************** 3fayes left side *************************************************/}
        {auth ? (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Chip
              label={auth.user.username}
              variant="filled"
              icon={<AccountCircleIcon />}
              color="primary"
              onClick={handleOpenUserMenu}
              sx={{ p: 0 }}
            />

            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={handleCloseUserMenu}
                component={Link}
                to="/dashboard"
              >
                <ListItemIcon>
                  <SpeedIcon fontSize="small" />
                </ListItemIcon>
                Dashboard
              </MenuItem>
              <MenuItem
                onClick={handleCloseUserMenu}
                component={Link}
                to="/change-pwd"
              >
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                Change Password
              </MenuItem>
              {!auth?.user?.verified ? (
                <MenuItem
                  onClick={handleCloseUserMenu}
                  component={Link}
                  to="/activate"
                >
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                  Activate account
                </MenuItem>
              ) : null}
              <Divider />
              <MenuItem onClick={logout} variant="warning">
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu2}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav2)}
                onClose={handleCloseNavMenu2}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/signup"
                  onClick={handleCloseNavMenu2}
                >
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Sign Up
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/login"
                  onClick={handleCloseNavMenu2}
                >
                  <ListItemIcon>
                    <Login fontSize="small" />
                  </ListItemIcon>
                  Login
                </MenuItem>
              </Menu>
            </Box>
            {/**********************************************links menu for big screen *************************************************/}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                px: "20px",
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, display: "block", borderRadius: "10px" }}
                component={Link}
                variant="outlined"
                color="sgreen"
                to="/login"
              >
                Log In
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  borderRadius: "10px",
                  color: "#1f3d2b",
                }}
                component={Link}
                to="/signup"
                variant="contained"
                color="sgreen"
              >
                Sign Up
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
