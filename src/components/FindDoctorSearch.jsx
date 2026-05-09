import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// doctor search functionality

function FindDoctorSearch() {
  const navigate = useNavigate();

  const [specialty, setSpecialty] = useState("");

  const doctorSpecialties = [
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic",
    "Pediatrician",
  ];

  const handleSearch = () => {
    if (specialty !== "") {
      navigate(`/search-results/${specialty}`);
    } else {
      alert("Please select a specialty");
    }
  };

  return (
    <div>
      <h2>Find Doctor</h2>

      <select
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      >
        <option value="">Select Doctor Specialty</option>

        {doctorSpecialties.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button onClick={handleSearch}>Search Doctor</button>
    </div>
  );
}

export default FindDoctorSearch;
