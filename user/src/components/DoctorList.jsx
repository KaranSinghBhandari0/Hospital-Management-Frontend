import React from 'react';
import DoctorCard from './DoctorCard';

export default function DoctorList({ doctors, navigate }) {
  return (
    <div className="w-full grid grid-cols-auto gap-4 gap-y-6 px-2">
      {doctors.length === 0 ? (
        <p className="w-full ml-6">No Doctors Available</p>
      ) : (
        doctors.map((doctor) => (
          <DoctorCard
            key={doctor._id}
            doctor={doctor}
            onClick={() => {
              navigate(`/doctor/${doctor._id}`);
              scrollTo(0, 0);
            }}
          />
        ))
      )}
    </div>
  );
}
