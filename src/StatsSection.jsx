import React from 'react';
import { FaHandshake, FaHome } from 'react-icons/fa';
import { FaUsersViewfinder } from 'react-icons/fa6';


const stats = [
  {
    icon: <FaHome size={28} className="text-white" />,
    value: '25+',
    label: 'Years Experience',
  },
  {
    icon: <FaUsersViewfinder size={28} className="text-white" />,
    value: '6,896',
    label: 'Happy Clients',
  },
  {
    icon: <FaHandshake size={28} className="text-white" />,
    value: '8,493',
    label: 'Handled Cases',
  },
];

export default function StatsSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-12 bg-white">
      {stats.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#00C4CC]">
            {item.icon}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0A1E40]">{item.value}</h2>
            <p className="text-gray-500 font-medium">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
