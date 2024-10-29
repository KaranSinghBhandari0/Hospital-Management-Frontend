import React, { useContext, useState } from 'react'
import dashboard_Doctor from '../assets/dashboard_Doctor.svg'
import dashboard_Appointments from '../assets/dashboard_Appointments.svg'
import dashboard_Patient from '../assets/dashboard_Patients.svg'
import { AppContext } from '../context/AppContext'
import { useEffect } from 'react'

export default function Dashboard() {

  const [allDoctors , setAllDoctors] = useState(0);
  const [allUsers , setAllUsers] = useState(0);
  const [allAppointments , setAllAppointments] = useState(0);

  const { getAllAppointments, getAllDoctors, getAllUsers } = useContext(AppContext);

  useEffect(()=> {
    const func = async () => {
      const fetchAllDoctors = await getAllDoctors();
      setAllDoctors(fetchAllDoctors);
      const fetchAllUsers = await getAllUsers();
      setAllUsers(fetchAllUsers);
      const fetchAllAppointments = await getAllAppointments();
      setAllAppointments(fetchAllAppointments.length);
    }
    func();
  },[])

  return (
    <div className="px-4 pt-2">
      <p className='mt-4 text-xl font-medium'>Dashboard</p>
      <div className="flex flex-wrap gap-3 mt-3">
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
          <img className="w-14" src={dashboard_Doctor} />
          <div>
            <p className="text-xl font-semibold text-gray-600">{allDoctors}</p>
            <p className="text-gray-400">Doctors</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
          <img className="w-14" src={dashboard_Appointments} />
          <div>
            <p className="text-xl font-semibold text-gray-600">{allAppointments}</p>
            <p className="text-gray-400">Appointments</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
          <img className="w-14" src={dashboard_Patient} />
          <div>
            <p className="text-xl font-semibold text-gray-600">{allUsers}</p>
            <p className="text-gray-400">Users</p>
          </div>
        </div>
      </div>
    </div>
  )
}
