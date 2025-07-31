import React from 'react';
import {
    FaEye,
    FaPowerOff,
    FaTools,
    FaFan,
    FaWater,
    FaWarehouse,
    FaGasPump,
    FaSprayCan,
    FaClipboardCheck,
} from 'react-icons/fa';

export default function CassetteACProcedure() {
    const steps = [
        {
            title: 'Visual Inspection of Ceiling Unit',
            description: 'Check for ceiling damage, condensation marks, and signs of leakage.',
            icon: <FaEye className="text-3xl text-[#00C4CC]" />,
        },
        {
            title: 'Power-On Performance Test',
            description: 'Test air flow, sound, temperature drop, and remote control response.',
            icon: <FaPowerOff className="text-3xl text-[#00C4CC]" />,
        },
        {
            title: 'Panel & Filter Disassembly',
            description: 'Remove front panel and washable filters to access internal parts.',
            icon: <FaTools className="text-3xl text-[#00C4CC]" />,
        },
        {
            title: 'Coil & Blower Cleaning',
            description: 'Chemical spray used to clean evaporator coil and turbo blower wheel.',
            icon: <FaFan className="text-3xl text-[#00C4CC]" />,
        },
        {
            title: 'Drain Pipe & Pan Flushing',
            description: 'Drainage tray and pipe are flushed to remove blockages and mold.',
            icon: <FaWater className="text-3xl text-[#00C4CC]" />,
        },
        {
            title: 'Outdoor Condenser Check',
            description: 'Inspect and clean the outdoor unit for dust and airflow blockage.',
            icon: <FaWarehouse className="text-3xl text-[#00C4CC]" />,
        },
        {
            title: 'Gas Level & Pressure Check',
            description: 'Check refrigerant pressure and top-up if necessary using gauges.',
            icon: <FaGasPump className="text-3xl text-[#00C4CC]" />,
        },
        {
            title: 'Anti-Mold & Sanitization',
            description: 'Apply anti-bacterial spray to prevent mold and odor buildup.',
            icon: <FaSprayCan className="text-3xl text-[#00C4CC]" />,
        },
        {
            title: 'Final Reassembly & Testing',
            description: 'Reattach all parts and run full test to verify performance.',
            icon: <FaClipboardCheck className="text-3xl text-[#00C4CC]" />,
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                Cassette Aircond Servicing Procedure
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="group bg-[#f8f9fa] border border-gray-200 hover:border-[#00C4CC] hover:shadow-xl transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#00C4CC] mb-2">
                            {`${index + 1}. ${step.title}`}
                        </h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
