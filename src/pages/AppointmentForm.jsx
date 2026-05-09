import React from "react";

function AppointmentForm() {
  return (
    <div>
      <h2>Appointment Booking</h2>

      <input type="text" placeholder="Name" />
      <br /><br />

      <input type="text" placeholder="Phone Number" />
      <br /><br />

      <input type="date" />
      <br /><br />

      <input type="time" />
      <br /><br />

      <button>Book Appointment</button>
    </div>
  );
}

export default AppointmentForm;