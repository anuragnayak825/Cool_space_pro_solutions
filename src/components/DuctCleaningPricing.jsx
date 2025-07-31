import React from 'react';

export default function DuctCleaningPricing() {
  const services = [
    {
      title: 'Basic Cleaning',
      color: 'bg-[#E0F7F9]',
      pricing: [
        { units: '1 Unit', price: 'RM 250' },
        { units: '2 Units', price: 'RM 230 / Unit' },
        { units: '3+ Units', price: 'RM 200 / Unit' },
      ],
    },
    {
      title: 'Chemical Cleaning',
      color: 'bg-[#D7F3EC]',
      pricing: [
        { units: '1 Unit', price: 'RM 400' },
        { units: '2 Units', price: 'RM 380 / Unit' },
        { units: '3+ Units', price: 'RM 360 / Unit' },
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Duct Cleaning Service Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl ${service.color} p-8 shadow-md hover:shadow-xl transition duration-300`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {service.title}
            </h3>
            <ul className="space-y-4">
              {service.pricing.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between text-gray-700 text-lg border-b pb-2"
                >
                  <span>{item.units}</span>
                  <span className="font-semibold">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
