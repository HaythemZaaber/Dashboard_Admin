import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Overview from "./Pages/Overview";
import ProfilesManagement from "./Pages/profilesManagement";
import Payment from "./Pages/Payment";
import Requests from "./Pages/Requests";
import ServicesManagement from "./Pages/servicesManagement";
import Reviews from "./Pages/Reviews";
import Settings from "./Pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="overview" element={<Overview />} />
        <Route path="profilesManagement" element={<ProfilesManagement />} />
        <Route path="payment" element={<Payment />} />
        <Route path="requests" element={<Requests />} />
        <Route path="servicesManagement" element={<ServicesManagement />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
