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
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import Meditation from "./pages/Meditation";
import ActivityLog from "./pages/ActivityLog";
import { StyledEngineProvider } from "@mui/material/styles";

export default function App() {
  // const location = useLocation();

  // should default page be user dashboard or start?
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Nav />
        <main>
          <Routes
          // key={location.path} location={location}
          >
            <Route path='/' element={<Home />} />
            <Route path='/mood-tracker' element={<MoodTracker />} />
            <Route path='/user-login' element={<UserLogin />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/meditation' element={<Meditation />} />
            <Route path='/activity-log' element={<ActivityLog />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </StyledEngineProvider>
  );
}
