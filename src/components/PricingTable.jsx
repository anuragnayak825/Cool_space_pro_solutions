import React from 'react';

const pricingData = [
    {
        title: 'Wall Mounted',
        services: [
            { name: 'Basic Troubleshooting', price: 'RM 80/unit', description: 'Diagnosis and minor fixes' },
            { name: 'Water Leakage Fixing', price: 'RM 110/unit', description: 'Drainage system repair' },
        ],
        gasRefill: [
            { type: 'R22', price: 'RM 125' },
            { type: 'R410', price: 'RM 155' },
            { type: 'R32', price: 'RM 155' },
        ],
    },
    {
        title: 'Ceiling Cassette/Exposed',
        services: [
            { name: 'Basic Troubleshooting', price: 'RM 105/unit', description: 'Diagnosis and minor fixes' },
            { name: 'Water Leakage Fixing', price: 'RM 155/unit', description: 'Drainage system repair' },
        ],
        gasRefill: [
            { type: 'R22', price: 'RM 125' },
            { type: 'R410', price: 'RM 155' },
            { type: 'R32', price: 'RM 155' },
        ],
    },
    {
        title: 'General Cleaning (Up to 2.5hp)',
        services: [
            { name: '1 Unit', price: 'RM 85 per unit' },
            { name: '2 Units', price: 'RM 75 per unit' },
            { name: '3+ Units', price: 'RM 65 per unit' },
        ],
    },
    {
        title: 'General Cleaning (Up to 2.5hp)',
        services: [
            { name: '1 Unit', price: 'RM 105 per unit' },
            { name: '2 Units', price: 'RM 95 per unit' },
            { name: '3+ Units', price: 'RM 85 per unit' },
        ],
    },
    {
        title: 'Chemical Aircon Cleaning (Up to 2.5hp)',
        services: [
            { name: '1 Unit', price: 'RM 155 per unit' },
            { name: '2 Units', price: 'RM 135 per unit' },
            { name: '3+ Units', price: 'RM 125 per unit' },
        ],
        additionalBenefits: [
            'FREE gas top-up (up to 20psi) with every chemical cleaning service',
            'FREE revisit in case of water leakage after service',
            'FREE initial site survey',
            '30-days warranty on water leakage',
        ],
    },
    {
        title: 'Chemical Aircon Cleaning (Up to 2.5hp)',
        services: [
            { name: '1 Unit', price: 'RM 305 per unit' },
            { name: '2 Units', price: 'RM 285 per unit' },
            { name: '3+ Units', price: 'RM 265 per unit' },
        ],
        additionalBenefits: [
            'FREE gas top-up (up to 20psi) with every chemical cleaning service',
            'FREE revisit in case of water leakage after service',
            'FREE initial site survey',
            '45-days warranty on water leakage',
            'FCU, Ceiling Concealed, Duct Unit, AHU, Chiller, Cooling Tower: RM 350 to RM 800 (final price provided after site survey)'
        ],
    },
];

const PricingCard = ({ title, services, gasRefill, additionalBenefits }) => {
    const isGeneralCleaning = title === 'General Cleaning (Up to 2.5hp)';

    return (
        <div
            className={`rounded-2xl p-6 sm:p-8 transition duration-300 border 
                ${isGeneralCleaning
                    ? 'bg-white border-gray-200 shadow-xl hover:shadow-2xl'
                    : 'bg-white border-gray-200 shadow-xl hover:shadow-2xl'}
            `}
        >
            <h2 className={`text-xl sm:text-2xl font-semibold mb-6 
                ${isGeneralCleaning ? 'text-blue-700' : 'text-blue-700'}
            `}>
                {title}
            </h2>

            <div className={`mb-6  ${isGeneralCleaning ? '  grid grid-cols-3 gap-5'
                : "space-y-4 "}`}>
                {services?.map((service, index) => (
                    <div
                        key={index}
                        className={` rounded-md px-4 py-3 border shadow-sm 
                            ${isGeneralCleaning
                                ? 'bg-white border-green-100 text-center'
                                : 'bg-gray-50 border-gray-100 flex justify-between items-start gap-4'}
                        `}
                    >
                        <div className=' '>
                            <h3
                                className={`text-base sm:text-lg font-semibold 
                                    ${isGeneralCleaning ? 'text-green-700' : 'text-teal-600'}
                                `}
                            >
                                {service.name}
                            </h3>
                            {service.description && (
                                <p className="text-sm text-gray-500">{service.description}</p>
                            )}
                        </div>
                        <p className="text-sm sm:text-base text-gray-700">{service.price}</p>
                    </div>
                ))}
            </div>

            {/* Leave gasRefill and additionalBenefits unchanged */}
            {gasRefill && (
                <div className="mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-teal-600 mb-3">Gas Refill (Up to 1.0hp)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {gasRefill.map((gas, index) => (
                            <div key={index} className="border border-gray-200 rounded-md  px-4 py-4 text-center shadow-inner">
                                <span className="block text-sm text-gray-700 font-medium">{gas.type}</span>
                                <span className="text-teal-600 font-semibold text-sm">{gas.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}


            {additionalBenefits && (
                <div>
                    <h3 className="text-base sm:text-lg font-semibold text-teal-600 mb-2">Additional Benefits</h3>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                        {additionalBenefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


const PricingTable = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                Our Aircon Services Pricing
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                {pricingData.map((data, index) => (
                    <PricingCard
                        key={index}
                        title={data.title}
                        services={data.services}
                        gasRefill={data.gasRefill}
                        additionalBenefits={data.additionalBenefits}
                    />
                ))}
            </div>
        </div>
    );
};

export default PricingTable;