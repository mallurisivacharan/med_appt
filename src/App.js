import './App.css';

import Navbar from './components/Navbar';
import FindDoctorSearch from './components/FindDoctorSearch';
import DoctorCard from './components/DoctorCard';
import GiveReviews from './components/GiveReviews';
import ProfileCard from './components/ProfileCard';

import Login from './pages/Login';
import Sign_Up from './pages/Sign_Up';
import AppointmentForm from './pages/AppointmentForm';
import AppointmentformIC from './pages/AppointmentformIC';

function App() {
  return (
    <div>

      <Navbar />

      <h1>StayHealthy</h1>

      <Login />

      <Sign_Up />

      <AppointmentForm />

      <AppointmentformIC />

      <FindDoctorSearch />

      <DoctorCard />

      <GiveReviews />

      <ProfileCard />

    </div>
  );
}

export default App;