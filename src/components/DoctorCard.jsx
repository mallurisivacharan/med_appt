import React from "react";

function DoctorCard() {

  const cancelAppointment = () => {
    alert("Appointment Cancelled");
  };

  return (
    <div>
      <h2>Dr. John Smith</h2>

      <p>Cardiologist</p>

      <button onClick={cancelAppointment}>
        Cancel Appointment
      </button>
    </div>
  );
}

export default DoctorCard;