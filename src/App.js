import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MoodTracker from "./pages/MoodTracker";
import UserLogin from "./pages/UserLogin";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Meditation from "./pages/Meditation";
import ActivityLog from "./pages/ActivityLog";
import { StyledEngineProvider } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";

// can navigate to '/' instead of /user-login??
// note: passing userData as a prop to logged pages doesn't work
const LoggedInRoute = (Component) => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  return (props) => (
    <>
      {!userData?.username && <Navigate to='/user-login' replace={true} />}
      <Component {...props} />
    </>
  );
};

const LoggedMoodTracker = LoggedInRoute(MoodTracker);
const LoggedDashboard = LoggedInRoute(Dashboard);
const LoggedMeditation = LoggedInRoute(Meditation);
const LoggedActivityLog = LoggedInRoute(ActivityLog);

export default function App() {
  const location = useLocation();
  return (
    <StyledEngineProvider injectFirst>
      <main
        style={{
          minHeight: "100%",
          overflow: "hidden",
        }}>
        <Nav />
        <AnimatePresence>
          <Routes key={location.path} location={location}>
            <Route exact path='/' element={<Home />} />
            <Route path='/user-login' element={<UserLogin />} />
            <Route path='/mood-tracker' element={<LoggedMoodTracker />} />
            <Route path='/dashboard' element={<LoggedDashboard />} />
            <Route path='/meditation' element={<LoggedMeditation />} />
            <Route path='/activity-log' element={<LoggedActivityLog />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </StyledEngineProvider>
  );
}
