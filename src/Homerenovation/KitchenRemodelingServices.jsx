import React from 'react';
import { FaCubes, FaTools, FaThLarge, FaLightbulb, FaFaucet, FaGripHorizontal, FaPlug } from 'react-icons/fa';

const services = [
  {
    title: 'Custom Kitchen Design',
    icon: <FaCubes className="text-3xl text-blue-600" />,
    description: 'Personalized layout with 3D visualizations for optimal space & workflow.',
  },
  {
    title: 'Cabinet Replacement & Installation',
    icon: <FaTools className="text-3xl text-blue-600" />,
    description: 'Modern or traditional cabinets with soft-close hinges & pull-out drawers.',
  },
  {
    title: 'Countertops & Backsplashes',
    icon: <FaThLarge className="text-3xl text-blue-600" />,
    description: 'Quartz, granite, or tile finishes paired with stylish backsplashes.',
  },
  {
    title: 'Lighting & Electrical Work',
    icon: <FaLightbulb className="text-3xl text-blue-600" />,
    description: 'Recessed lights, pendants & smart switches for ambiance & efficiency.',
  },
  {
    title: 'Plumbing & Sink Upgrades',
    icon: <FaFaucet className="text-3xl text-blue-600" />,
    description: 'New sinks, faucets & upgraded pipes for smooth water flow.',
  },
  {
    title: 'Flooring Installation',
    icon: <FaGripHorizontal className="text-3xl text-blue-600" />,
    description: 'Durable flooring options like vinyl, tile, laminate & hardwood.',
  },
  {
    title: 'Appliance Integration',
    icon: <FaPlug className="text-3xl text-blue-600" />,
    description: 'Built-in modern appliances for a clean, clutter-free kitchen.',
  },
];

export default function KitchenRemodelingServices() {
  
  return (
    <section className="py-16 px-4 lg:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Our Complete Kitchen Remodeling Services</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide end-to-end kitchen renovation solutions tailored to your style, needs, and space.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
