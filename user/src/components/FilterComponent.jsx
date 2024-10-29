import React from 'react';

export default function FilterComponent({ handleSpecialist, showFilters, setShowFilters, id }) {
  const filters = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="px-4">
      <button
        className="py-1 px-3 border rounded text-sm transition-all sm:hidden mt-2"
        onClick={() => setShowFilters(!showFilters)}
      >
        Filters
      </button>

      {showFilters && (
        <div className="flex flex-col gap-4 text-sm text-gray-600 overflow-x-scroll scrollbar-hide mt-2">
          {filters.map((speciality) => (
            <p
              key={speciality}
              className={`sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                id === speciality ? 'bg-blue-400' : ''
              }`}
              onClick={() => handleSpecialist(speciality)}
            >
              {speciality}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
