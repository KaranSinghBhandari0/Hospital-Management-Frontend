import React, { useState, useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import DoctorInfo from '../components/DoctorInfo';
import RelatedDoctors from '../components/RelatedDoctors';
import AppointmentSlots from '../components/AppointmentSlots';

export default function Doctor() {
    const { id } = useParams();
    const {docInfo, docSlots, fetchDoctorInfo, BookAppointment, getDayOfWeek, filterDoctors } = useContext(AppContext);

    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedTime, setSelectedTime] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDoctorInfo(id);
    }, [id]);

    return (
        <div className="p-4">
            {/* Doctor Info */}
            <DoctorInfo assets={assets} docInfo={docInfo} />
    
            {/* Appointment Booking */}
            <AppointmentSlots docSlots={docSlots} getDayOfWeek={getDayOfWeek} selectedDay={selectedDay} selectedTime={selectedTime} setSelectedTime={setSelectedTime} setSelectedDay={setSelectedDay} BookAppointment={BookAppointment} id={id} />
    
            {/* Related Doctors Section */}
            <RelatedDoctors navigate={navigate} filterDoctors={filterDoctors} />
        </div>
    );
}
