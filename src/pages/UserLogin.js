import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Input, FormControl } from "@mui/material";
import PageContainer from "../components/General/PageContainer";
import SubHeading from "../components/General/Typography/SubHeading";
import StandardBtn from "../components/General/Button/StandardBtn";
import IconBtn from "../components/General/Button/IconBtn";

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
        <SubHeading text={"What is your name?"} />
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
