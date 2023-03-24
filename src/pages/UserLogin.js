import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Input, FormControl } from "@mui/material";
import PageContainer from "../components/PageContainer";
import SubHeading from "../components/Typography/SubHeading";
import StandardBtn from "../components/Button/StandardBtn";
import IconBtn from "../components/Button/IconBtn";
import Heading4 from "../components/Typography/Heading4";

export default function UserLogin() {
  const [user, setUser] = useState(
    localStorage.getItem("userData") !== null
      ? JSON.parse(localStorage.getItem("userData"))
      : []
  );
  const [username, setUsername] = useState("");

  const inputRef = useRef();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    console.log(username);
    const userData = { username };
    localStorage.setItem("userData", JSON.stringify(userData));
    !user && setUser(userData);
    navigate("/");
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  return (
    <PageContainer>
      <Box>
        <SubHeading text={"Hello, stranger!"} />
        <Heading4 text={"What is your name?"} />
      </Box>
      <FormControl>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <Input
            id="name"
            label="Name"
            variant="outlined"
            value={username}
            onChange={handleChange}
            ref={inputRef}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <IconBtn />
            </Link>
            <StandardBtn name={"Login"} onClick={handleLogin} />
          </Box>
        </Box>
      </FormControl>
    </PageContainer>
  );
}
