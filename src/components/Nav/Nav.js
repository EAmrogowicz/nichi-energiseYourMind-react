import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <nav>
        <AppBar
          position='fixed'
          sx={{
            "@media (max-width:768px)": { top: "auto", bottom: 0 },
            background: "white",
          }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ gap: "1rem" }}>
              <Link to='/'>
                <HomeIcon
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='home'
                  sx={{ mr: 2 }}
                />
              </Link>
              <Link to='/mood-tracker'>
                <EmojiEmotionsIcon
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='mood'
                  sx={{ mr: 2 }}
                />
              </Link>
              <Link to='/user-login'>
                <PersonIcon
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='user'
                  sx={{ mr: 2 }}
                />
              </Link>
            </Box>
            <SettingsIcon
              size='large'
              edge='start'
              color='inherit'
              aria-label='settings'
              sx={{ mr: 2 }}
            />
          </Toolbar>
        </AppBar>
      </nav>
    </Box>
  );
}
