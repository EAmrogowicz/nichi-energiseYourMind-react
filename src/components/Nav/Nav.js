import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        sx={{ "@media (max-width:768px)": { top: "auto", bottom: 0 } }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ gap: "1rem" }}>
            <Link to='/'>
              <HomeIcon
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
              />
            </Link>
            <Link to='/mood-tracker'>
              <EmojiEmotionsIcon
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
              />
            </Link>
            <Link to='/user-login'>
              <PersonIcon
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
              />
            </Link>
          </Box>
          <Button color='inherit'>Settings</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
