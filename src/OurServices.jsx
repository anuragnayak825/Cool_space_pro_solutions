import React from 'react';
import { FaSnowflake, FaCouch } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function OurServices() {
  const services = [
    {
      title: 'Air Conditioning Services',
      description: 'We provide professional AC installation, servicing, gas refilling, and maintenance for both residential and commercial needs.',
      icon: <FaSnowflake className="text-4xl text-blue-500" />,
      bg: 'bg-blue-50',
    },
    {
      title: 'Interior Design Services',
      description: 'Transform your space with our expert interior design solutions — including planning, 3D layouts, renovation, and furniture selection.',
      icon: <FaCouch className="text-4xl text-pink-500" />,
      bg: 'bg-pink-50',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50" id="our-services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We specialize in providing both high-quality air conditioning services and modern interior design solutions for homes and businesses.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl shadow-md ${service.bg} hover:shadow-xl transition duration-300`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
