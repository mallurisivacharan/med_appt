import React, { useState } from "react";

function Sign_Up() {
  const [user, setUser] = useState({
    role: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      const response = await fetch("https://example-api.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log(data);

      alert("User Registered Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <input type="text" name="role" placeholder="Role" onChange={handleChange} />
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />

      <button onClick={registerUser}>Register</button>
    </div>
  );
}

export default Sign_Up;