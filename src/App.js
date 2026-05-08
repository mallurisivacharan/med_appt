import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Sign_Up from "./pages/Sign_Up";
import AppointmentForm from "./pages/AppointmentForm";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/appointments" element={<AppointmentForm />} />
      </Routes>
    </Router>
  );
}

export default App;