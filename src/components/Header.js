import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import logo from "../assets/images/logo.png";
import SupplierPlatform from './modals/SupplierPlatform'

const Header = ({setCoffee, coffee}) => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{backgroundColor: "#103037"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img src={logo} alt="logo" />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link
                component="button"
                variant="body2"
                underline="none"
                sx={{ my: 2, mx: 5, color: "white", display: "block" }}
              >
                Home
              </Link>
              
              <Link
                component="button"
                variant="body2"
                underline="none"
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                About Us
              </Link>
              <Link
                component="button"
                variant="body2"
            
                underline="none"
                sx={{my: 2, mx: 2, color: "white", display: "block" }}
              >
                Contact Us
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <SupplierPlatform setCoffee={setCoffee} coffee={coffee} />
            </Box>

            {/* small size */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <img src={logo} alt="logo" />
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact Us</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <SupplierPlatform setCoffee={setCoffee} coffee={coffee} />
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
