import React from "react";

function ProfileCard() {
  return (
    <div>
      <h2>Patient Profile</h2>

      <p>Name: Cherry</p>

      <form>
        <input type="text" placeholder="Edit Name" />

        <button>Edit Profile</button>
      </form>
    </div>
  );
}

export default ProfileCard;