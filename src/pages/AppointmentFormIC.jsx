import React, { useState } from "react";

function AppointmentFormIC() {
  const [appointmentData, setAppointmentData] = useState({
    patientName: "",
    doctorName: "",
    appointmentDate: "",
  });

  const handleChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment Booked Successfully");

    console.log(appointmentData);
  };

  return (
    <div>
      <h2>Appointment Booking Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          onChange={handleChange}
        />

        <input
          type="date"
          name="appointmentDate"
          onChange={handleChange}
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentFormIC;
