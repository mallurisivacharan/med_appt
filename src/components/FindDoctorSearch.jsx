import React, { useState } from "react";

function FindDoctorSearch() {

  const [search, setSearch] = useState("");

  return (
    <div>
      <h2>Find Doctor</h2>

      <input
        type="text"
        placeholder="Search doctor"
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Searching for: {search}</p>
    </div>
  );
}

export default FindDoctorSearch;