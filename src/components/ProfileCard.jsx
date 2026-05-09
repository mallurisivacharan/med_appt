import { useState } from "react";

export default function ProfileCard() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
  });

  const [editData, setEditData] = useState(profile);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(editData);
  };

  return (
    <div>
      <h2>Profile Card</h2>

      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>

      <h3>Edit Profile</h3>

      <input name="name" value={editData.name} onChange={handleChange} />
      <input name="email" value={editData.email} onChange={handleChange} />
      <input name="phone" value={editData.phone} onChange={handleChange} />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
