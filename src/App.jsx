import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Notification from "./components/Notification";

import Login from "./pages/Login";
import Sign_Up from "./pages/Sign_Up";
import AppointmentForm from "./pages/AppointmentForm";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Notification component for application-wide visibility */}
        <Notification />

        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/appointment" element={<AppointmentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
