const cancelAppointment = (id) => {
  const updatedAppointments = appointments.filter(
    (appointment) => appointment.id !== id
  );

  setAppointments(updatedAppointments);

  localStorage.setItem(
    "appointments",
    JSON.stringify(updatedAppointments)
  );
};
