import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./component/login";
import Signup from "./component/signup";
import LandingPage from "./component/landingPage";
import AllUser from "./component/AllUser";
import Complaints from "./component/Complaints"
import Notices from "./component/Notices";
import HostelDetails from "./component/HostelDetails";
import Profile from './component/Profile'
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/AllUser" element={<AllUser />} />
        <Route path="/Complaints" element={<Complaints />} />
        <Route path="/Notices" element={<Notices />} />
        <Route path="/Complaints" element={<Complaints />} />
        <Route path="/HostelDetails" element={<HostelDetails />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Signup />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
