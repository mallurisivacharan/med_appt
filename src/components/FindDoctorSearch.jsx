import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FindDoctorSearch() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const navigate = useNavigate();

  const specialties = [
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic",
  ];

  const handleSearch = () => {
    if (selectedSpecialty) {
      navigate(`/doctors/${selectedSpecialty}`);
    }
  };

  return (
    <div>
      <h2>Find Doctor</h2>

      <select
        value={selectedSpecialty}
        onChange={(e) => setSelectedSpecialty(e.target.value)}
      >
        <option value="">Select Specialty</option>

        {specialties.map((specialty, index) => (
          <option key={index} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default FindDoctorSearch;
