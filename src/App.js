import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useLocation,
} from "react-router-dom";
import Start from "./pages/Start";
import MoodTracker from "./pages/MoodTracker";
import UserLogin from "./pages/UserLogin";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

export default function App() {
  // const location = useLocation();

  // should default page be user dashboard or start?
  return (
    <Router>
      <Nav />
      <main>
        <Routes
        // key={location.path} location={location}
        >
          <Route exact path='/' element={<Start />} />
          <Route path='/mood-tracker' element={<MoodTracker />} />
          <Route path='/user-login' element={<UserLogin />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
