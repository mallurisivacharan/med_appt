import React from "react";

function Sign_Up() {
  return (
    <div>
      <h2>Sign Up Form</h2>

      <input type="text" placeholder="Role" />
      <br /><br />

      <input type="text" placeholder="Name" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="text" placeholder="Phone Number" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button>Register</button>
    </div>
  );
}

export default Sign_Up;