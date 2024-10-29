import React, { useContext, useState, useEffect } from 'react';
import doc1 from '../assets/doc1.png';
import { AppContext } from '../context/AppContext';
import DoctorAppointments from '../components/DoctorAppointments';

export default function DoctorDashboard() {
  const [doctor, setDoctor] = useState({});
  const [appointments, setAppointments] = useState([]);
  const { getCurrDoctor, getDoctorAppointments, cancelAppointment, confirmAppointment } = useContext(AppContext);

  // Fetch current doctor details and appointments when doctor is loaded
  useEffect(() => {
    const fetchDoctorAndAppointments = async () => {
      const doctorRes = await getCurrDoctor();
      setDoctor(doctorRes);
      if(doctorRes._id) {
        const appointmentsRes = await getDoctorAppointments(doctorRes._id);
        setAppointments(appointmentsRes);
      }
    };
    fetchDoctorAndAppointments();
  }, [getCurrDoctor, getDoctorAppointments]);

  // Function to handle confirming and canceling appointments
  const handleAppointmentUpdate = async (appointmentId, action) => {
    if(action === 'confirm') {
      await confirmAppointment(appointmentId);
    } else if(action === 'cancel') {
      await cancelAppointment(appointmentId);
    }
    const updatedAppointments = await getDoctorAppointments(doctor._id);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="p-2 w-full">
      {/* Doctor info */}
      {doctor && doctor.name && (
        <div className="flex gap-6 items-center text-lg text-slate-700">
          <img src={doctor.image || doc1} alt="" className="bg-blue-400 rounded-full w-20 h-20" />
          <p>{doctor.name}</p>
        </div>
      )}

      <br />
      <p>My Appointments</p>
      <br />

      {/* Appointments List */}
      <DoctorAppointments appointments={appointments} handleAppointmentUpdate={handleAppointmentUpdate} />
    </div>
  );
}
