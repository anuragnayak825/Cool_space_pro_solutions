import React from 'react';

export default function CassetteACPricing() {
  const pricingOptions = [
    {
      title: 'Basic Cleaning',
      subtitle: 'Cassette AC',
      bg: 'bg-[#F0F9FF]',
      pricing: [
        '1 Unit – RM 160',
        '2 Units – RM 140 per Unit',
        '3 Units – RM 120 per Unit',
      ],
    },
    {
      title: 'Chemical Cleaning (Without Removal)',
      subtitle: 'Cassette AC | Up to 3.0HP',
      bg: 'bg-[#E6F8F7]',
      pricing: [
        '1 Unit – RM 280',
        '2 Units – RM 260 each',
        '3 Units – RM 240 each',
        '4 Units – RM 230 each',
        '5 Units & above – RM 220 each',
      ],
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-24 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Cassette AC Service Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {pricingOptions.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md p-8 flex flex-col ${item.bg} transition duration-300 hover:shadow-xl`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#00C4CC] mb-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{item.subtitle}</p>
            <ul className="space-y-2 text-gray-800 font-medium text-base sm:text-lg">
              {item.pricing.map((line, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#00C4CC] font-bold">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
