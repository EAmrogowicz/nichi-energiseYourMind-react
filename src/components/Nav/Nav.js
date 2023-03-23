import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import SettingsIcon from "@mui/icons-material/Settings";

import Typography from "@mui/material/Typography";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <nav>
        <AppBar
          color="inherit"
          position="fixed"
          className="navBar"
          sx={{
            "@media (max-width:900px)": { top: "auto", bottom: 0 },
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              ml: 2,
            }}
          >
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "Vidaloka",
                letterSpacing: ".3rem",
                color: "white",
                fontWeight: 700,
                textDecoration: "none",
                textShadow: "0px 1px 1px #35444b",
              }}
            >
              NICHI
            </Typography>
            <Box sx={{ gap: 1 }}>
              <Link to="/">
                <HomeOutlinedIcon
                  edge="start"
                  color="inherit"
                  aria-label="home"
                  sx={{ mr: 4 }}
                  className="navIcon"
                />
              </Link>
              <Link to="/mood-tracker">
                <AddReactionOutlinedIcon
                  edge="start"
                  color="inherit"
                  aria-label="mood"
                  sx={{ mr: 4 }}
                  className="navIcon"
                />
              </Link>
              <Link to="/meditation">
                <PersonOutlineOutlinedIcon
                  edge="start"
                  color="inherit"
                  aria-label="user"
                  sx={{ mr: 4 }}
                  className="navIcon"
                />
              </Link>
            </Box>

            {/* <SettingsIcon
              size="large"
              edge="start"
              color="inherit"
              aria-label="settings"
              sx={{ mr: 4 }}
            /> */}
          </Toolbar>
        </AppBar>
      </nav>
    </Box>
  );
}
