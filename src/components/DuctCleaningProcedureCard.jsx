import React from 'react';
import { FaTools, FaBroom, FaFan, FaShieldAlt } from 'react-icons/fa';

export default function DuctCleaningProcedureCard() {
  const steps = [
    {
      icon: <FaTools className="text-3xl text-[#00C4CC]" />,
      title: 'Initial Inspection & Diagnosis',
      desc: 'We begin by inspecting the duct system for dust build-up, mold, and airflow blockages.',
    },
    {
      icon: <FaBroom className="text-3xl text-[#00C4CC]" />,
      title: 'High-Power Vacuum Cleaning',
      desc: 'Industrial vacuums and rotary brushes are used to dislodge and remove deep-set debris.',
    },
    {
      icon: <FaFan className="text-3xl text-[#00C4CC]" />,
      title: 'Blower & Filter Cleaning',
      desc: 'Blower fans and filters are cleaned to improve airflow and cooling performance.',
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#00C4CC]" />,
      title: 'Antibacterial Treatment',
      desc: 'We apply antimicrobial agents to prevent mold and bacteria growth inside the ductwork.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Duct Aircon Cleaning Procedure
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#F7FCFC] p-8 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-white rounded-full shadow-inner">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
