import React, { useState } from "react";

function ProfileCard() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);

    alert("Profile Updated Successfully");
  };

  return (
    <div>
      <h2>Profile Card</h2>

      {!isEditing ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>

          <button onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <br />
          <br />

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <br />
          <br />

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <br />
          <br />

          <button onClick={handleSave}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
