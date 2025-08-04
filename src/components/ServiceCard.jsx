import React from 'react';
import { FaTools, FaSyncAlt, FaThermometerHalf, FaBolt, FaWater } from 'react-icons/fa';

const services = [
  {
    title: 'Comprehensive System Inspection',
    icon: <FaTools className="text-white text-xl" />,
    bg: 'bg-blue-500',
    desc: 'Our experts perform a thorough check-up of your system to catch issues early and avoid costly breakdowns.',
  },
  {
    title: 'Filter Cleaning & Replacement',
    icon: <FaSyncAlt className="text-white text-xl" />,
    bg: 'bg-green-500',
    desc: 'We ensure your filters are clean and effective to maintain airflow and enhance indoor air quality.',
  },
  {
    title: 'Refrigerant Monitoring & Refill',
    icon: <FaThermometerHalf className="text-white text-xl" />,
    bg: 'bg-sky-500',
    desc: 'We inspect and top-up refrigerant levels to keep your air conditioning running optimally.',
  },
  {
    title: 'Electrical Diagnostics',
    icon: <FaBolt className="text-white text-xl" />,
    bg: 'bg-yellow-500',
    desc: 'All electrical parts are tested for reliability and safety to reduce the risk of malfunction.',
  },
  {
    title: 'Condensate Drain Treatment',
    icon: <FaWater className="text-white text-xl" />,
    bg: 'bg-indigo-500',
    desc: 'We clean and unclog your AC drain line to prevent leaks, water damage, and mold buildup.',
  },
];

const ServiceCards = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">What’s Included in Our Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col gap-4"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.bg}`}>
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
