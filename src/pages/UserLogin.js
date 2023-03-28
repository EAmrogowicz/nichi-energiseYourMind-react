import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, FormControl } from "@mui/material";
import PageContainer from "../components/PageContainer";
import SubHeading from "../components/Typography/SubHeading";
import StandardBtn from "../components/Button/StandardBtn";
import IconBtn from "../components/Button/IconBtn";
import Heading4 from "../components/Typography/Heading4";
import TextField from "@mui/material/TextField";

export default function UserLogin({ onSubmit }) {
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
    const userData = { username };
    !user && setUser(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    // i tried passing user value, but it doesn't want to work either
    navigate("/", { state: { user } });

    // FIXME: this is a very stupid solution *cry*
    window.location.reload();
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  return (
    <PageContainer>
      <Box sx={{ mb: "4.8rem" }}>
        <SubHeading text={"Hello, stranger!"} />
        <Heading4 text={"What is your name?"} />
      </Box>

      <FormControl className='form'>
        <TextField
          className='inputField'
          id='name'
          label='Name'
          variant='outlined'
          value={username}
          onChange={handleChange}
          ref={inputRef}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
          <Link to={"/"}>
            <IconBtn />
          </Link>
          <StandardBtn
            name={"Login"}
            onClick={handleLogin}
            disabled={!username}
          />
        </Box>
      </FormControl>
    </PageContainer>
  );
}
