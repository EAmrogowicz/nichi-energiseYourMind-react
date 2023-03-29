import { Route, Routes, useLocation } from "react-router-dom";
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
import UserDataGenerator from "./userData";

export default function App() {
  const location = useLocation();
  return (
    <StyledEngineProvider injectFirst>
      <UserDataGenerator />
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
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/meditation' element={<Meditation />} />
            <Route path='/mood-tracker' element={<MoodTracker />} />
            <Route path='/activity-log' element={<ActivityLog />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </StyledEngineProvider>
  );
}
