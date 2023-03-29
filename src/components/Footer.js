import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import ParagraphSm from "./Typography/ParagraphSm";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const ButtonMailto = ({ mailto }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <EmailIcon className="footerIcon" />
    </Link>
  );
};

export default function Footer() {
  return (
    <Box
      className="footerSection"
      padding={{ xs: "0 1.2rem", sm: "0 2.4rem", md: "0 3.2rem" }}
      marginBottom={{ xs: "4rem", sm: "4rem", md: "1rem" }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <ParagraphSm
          classCss={"footer"}
          text={"Copyright ©2023 by NICHI. All right reserved."}
        />
        <Box>
          <ButtonMailto mailto="mailto:contact@amrogowicz.com" />
          <Link
            to="https://github.com/EAmrogowicz/nichi-energiseYourMind-react"
            target="_blank"
          >
            <GitHubIcon className="footerIcon" />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
