import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav>
      <h2>Medical Appointment Booking</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/appointments">Appointments</Link> |{" "}
      <Link to="/signup">Sign Up</Link> |{" "}
      <Link to="/login">Login</Link>

      {isLoggedIn && (
        <>
          {" | "}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
