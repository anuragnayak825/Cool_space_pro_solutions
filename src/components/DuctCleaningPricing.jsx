import React from 'react';

export default function DuctCleaningPricing() {
  const services = [
    {
      title: 'Basic Cleaning',
      pricing: [
        { units: '1 Unit', price: 'RM 250' },
        { units: '2 Units', price: 'RM 230 / Unit' },
        { units: '3+ Units', price: 'RM 200 / Unit' },
      ],
    },
    {
      title: 'Chemical Cleaning',
      pricing: [
        { units: '1 Unit', price: 'RM 400' },
        { units: '2 Units', price: 'RM 380 / Unit' },
        { units: '3+ Units', price: 'RM 360 / Unit' },
      ],
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Duct Cleaning Service Pricing
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 bg-white"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
              {service.title}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.pricing.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-lg shadow-sm px-4 py-5 text-center text-gray-700"
                >
                  <span className="text-base sm:text-lg">{item.units}</span>
                  <span className="font-semibold text-teal-600 text-lg sm:text-xl">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
