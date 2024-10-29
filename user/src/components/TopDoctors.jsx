import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function TopDoctors() {
  const {doctors} = useContext(AppContext)
  const navigate = useNavigate();

  return (
    <div className='my-24 flex flex-col items-center gap-4'>
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm text-center">Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3'>
        {doctors.slice(0,10).map((item,index)=>(
            <div key={item._id} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500' onClick={() => {navigate(`/doctor/${item._id}`); scrollTo(0,0)}}>
                <img src={item.image} alt="" className='bg-blue-50' />
                <div className='p-4'>
                    <p className='font-medium'>{item.name}</p>
                    <p className='text-sm'>{item.speciality}</p>
                  <div className="mt-2 flex items-center gap-1 text-sm">
                    <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-red-500'}`}></p>
                    <p>{item.available ? 'Available' : 'Unavailable'}</p>
                  </div>
                </div>
            </div>
        ))}
      </div>
      <button className='bg-blue-600 text-white px-6 rounded-3xl py-2 mt-4' onClick={() => {navigate('/doctors/all'); scrollTo(0,0)}} >more</button>
    </div>
  )
}