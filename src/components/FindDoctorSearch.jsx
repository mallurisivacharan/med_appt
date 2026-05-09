import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FindDoctorSearch() {
  const [specialty, setSpecialty] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (specialty !== "") {
      navigate(`/search/${specialty}`);
    }
  };

  return (
    <div>
      <h2>Find Doctors</h2>

      <select
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      >
        <option value="">Select Specialty</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Orthopedic">Orthopedic</option>
      </select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default FindDoctorSearch;
