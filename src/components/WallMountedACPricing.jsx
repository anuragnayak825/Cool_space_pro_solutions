import React from 'react';

export default function WallMountedACPricing() {
  const pricingData = [
    {
      type: 'Chemical Cleaning + Diagnostic',
      subtitle: 'Wall Mounted | Up to 3.0HP',
      color: 'bg-[#E0F7F8]',
      priceList: [
        '1 Unit – RM 150',
        '2 Units – RM 130 each',
        '3 Units – RM 120 each',
        '4 Units – RM 110 each',
        '5 Units & above – RM 100 each',
      ],
    },
    {
      type: 'Basic Service',
      subtitle: 'Wall Mounted',
      color: 'bg-[#F1F5FF]',
      priceList: [
        '1 Unit – RM 80',
        '2 Units – RM 70 each',
        '3 Units & above – RM 60 each',
      ],
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-24 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Wall Mounted AC Service Pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {pricingData.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-md p-8 flex flex-col ${item.color} transition duration-300 hover:shadow-xl`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#00C4CC] mb-2">{item.type}</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{item.subtitle}</p>
            <ul className="space-y-2 text-gray-800 font-medium text-base sm:text-lg">
              {item.priceList.map((price, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#00C4CC] font-bold">•</span>
                  <span>{price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
