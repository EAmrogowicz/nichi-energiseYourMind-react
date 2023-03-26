import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
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

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <main
        style={{
          minHeight: "100%",
        }}>
        <Nav />
        <AnimatePresence>
          <Router
          // basename='/EAmrogowicz/nichi-energiseYourMind-react'
          >
            <Routes
            // key={useLocation().path}
            >
              <Route path='/' element={<Home />} />
              <Route path='/mood-tracker' element={<MoodTracker />} />
              <Route path='/user-login' element={<UserLogin />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/meditation' element={<Meditation />} />
              <Route path='/activity-log' element={<ActivityLog />} />
            </Routes>
          </Router>
        </AnimatePresence>
        <Footer />
      </main>
    </StyledEngineProvider>
  );
}
