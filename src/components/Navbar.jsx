import React from "react";

function Navbar() {
  return (
    <nav>
      <h2>StayHealthy</h2>

      <ul>
        <li>Home</li>
        <li>Appointments</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>

      <button>Logout</button>
    </nav>
  );
}

export default Navbar;