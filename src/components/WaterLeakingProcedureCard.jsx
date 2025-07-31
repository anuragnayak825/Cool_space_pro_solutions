import React from 'react';
import { FaSearch, FaTools, FaTint, FaCheckCircle } from 'react-icons/fa';

export default function WaterLeakingProcedureCard() {
  const steps = [
    {
      icon: <FaSearch className="text-blue-600 text-2xl" />,
      title: 'Leak Source Inspection',
      description: 'Our technician inspects drain pipes, coils, and filters to identify the exact leakage point.',
    },
    {
      icon: <FaTools className="text-green-600 text-2xl" />,
      title: 'Drain Pipe Clearing',
      description: 'Clogged drain pipes are cleaned or flushed to ensure smooth water flow.',
    },
    {
      icon: <FaTint className="text-indigo-600 text-2xl" />,
      title: 'Coil Cleaning & Filter Check',
      description: 'Evaporator coils are cleaned and filters checked to avoid water condensation build-up.',
    },
    {
      icon: <FaCheckCircle className="text-emerald-600 text-2xl" />,
      title: 'System Testing & Final Check',
      description: 'The unit is tested after servicing to confirm that leakage is fully resolved.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Aircon Water Leaking Service Procedure
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border">
              {step.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
