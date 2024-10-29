import React from 'react'

export default function AppointmentSlots({docSlots, getDayOfWeek, selectedDay, selectedTime, setSelectedTime,   setSelectedDay, BookAppointment, id}) {
  return (
    <div className="my-20">
        <p className='font-medium text-slate-700'>Booking slots</p>
        <div className="flex gap-2 flex-wrap my-4">
            {Array.from({ length: 7 }).map((_, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 rounded-lg ${selectedDay === index ? 'bg-blue-700 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setSelectedDay(index)}
                >
                    {getDayOfWeek(index)}
                </button>
            ))}
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {docSlots[selectedDay] && docSlots[selectedDay].map((slot, slotIndex) => (
                <button
                    key={slotIndex}
                    className={`border text-sm font-light px-4 rounded-xl my-2 ${selectedTime === slotIndex ? 'bg-blue-700 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setSelectedTime(slotIndex)}
                >
                    {slot.time}
                </button>
            ))}
        </div>

        <button 
            className="bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-full my-6 mx-auto block"
            onClick={() => {
                if (selectedTime !== null) {
                    const today = new Date();
                    const selectedDate = new Date(today);
                    selectedDate.setDate(today.getDate() + selectedDay);
                    const formattedDay = getDayOfWeek(selectedDay);
                    const formattedTime = docSlots[selectedDay][selectedTime].time;
                    const formattedDate = selectedDate.toLocaleDateString();
                    BookAppointment(id, formattedDay, formattedTime, formattedDate);
                }
            }}
        >
            Book an appointment
        </button>
    </div>
  )
}
