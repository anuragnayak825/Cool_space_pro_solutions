import React from 'react';
import { FaBoxOpen, FaRulerCombined, FaPlug, FaCheckCircle } from 'react-icons/fa';

export default function AirconInstallationProcedureCard() {
    const steps = [
        {
            icon: <FaBoxOpen className="text-blue-600 text-2xl" />,
            title: 'Unit Unboxing & Inspection',
            description: 'We carefully unpack and inspect the air conditioning unit to ensure all parts are intact.',
        },
        {
            icon: <FaRulerCombined className="text-amber-600 text-2xl" />,
            title: 'Site Assessment & Mounting',
            description: 'We evaluate the wall structure and determine the best mounting position for efficient cooling.',
        },
        {
            icon: <FaPlug className="text-green-600 text-2xl" />,
            title: 'Wiring & Piping Setup',
            description: 'Copper piping, drainage, and electrical wiring are securely and neatly installed.',
        },
        {
            icon: <FaCheckCircle className="text-emerald-600 text-2xl" />,
            title: 'Testing & Commissioning',
            description: 'The unit is powered on and tested to ensure proper operation and optimal performance.',
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                Aircon Installation Procedure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border">
                            {step.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
