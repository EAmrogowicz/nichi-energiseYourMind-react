// import { Route, Routes } from "react-router-dom";
import StandardBtn from "../components/general/StandardBtn";
import IconBtn from "../components/general/IconBtn";
// import UserLogin from "./UserLogin";
import Title from "../components/general/typography/title";

export default function Home() {
  return (
    <div className="hero">
      <Title text="Nitchi" />
      {/* <TitleCaption text="Energise your Mind" /> */}
      <StandardBtn name="Get Started" classCss="btnPill">
        {/* <Routes>
          <Route path="/user-login" element={<UserLogin />} />
        </Routes> */}
      </StandardBtn>
      <br />
      <IconBtn name="Get Started" classCss="btnPill">
        {/* <Routes>
          <Route path="/user-login" element={<UserLogin />} />
        </Routes> */}
      </IconBtn>
    </div>
  );
}
