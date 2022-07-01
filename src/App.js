import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ForgotPasswod from "./Components/ForgotPasswod";
import Appointment from "./Components/Appointment";

import PatientDetails from "./Components/PatientDetails";
import ProtectedRoute from "./Components/Routes/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/book-appointment" element={<Appointment />} />
          </Route>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgotPasswod />} />

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
