import React from 'react';
import { motion } from 'framer-motion';
import { FaThermometerHalf, FaVolumeUp, FaPowerOff, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const problems = [
    {
        title: 'Aircon Not Cooling',
        icon: <FaThermometerHalf className="text-5xl text-sky-600" />,
        issues: ['Low refrigerant levels', 'Faulty compressor', 'Clogged or dirty filters'],
        description:
            'Our Johor Bahru technicians quickly diagnose the issue and restore cooling to optimal performance.',
        action: 'Get This Fixed',
    },
    {
        title: 'Strange Noises Coming?',
        icon: <FaVolumeUp className="text-5xl text-sky-600" />,
        issues: ['Loose or worn components', 'Mechanical faults', 'Fan motor problems'],
        description:
            'We’ll pinpoint the cause and provide the most effective fix to prevent further damage.',
        action: 'Diagnose My Unit',
    },
    {
        title: 'AC Frequently On and Off?',
        icon: <FaPowerOff className="text-5xl text-sky-600" />,
        issues: ['Thermostat malfunction', 'Electrical system faults', 'Oversized unit for the space'],
        description:
            'We perform a full inspection to resolve the issue and ensure efficient operation.',
        action: 'Schedule Inspection',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' },
    }),
};

const AirconIssuesSection = () => {
    const nav = useNavigate();

    return (
        <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-6 sm:px-10 lg:px-24">
            <div className="text-center mb-14">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
                    Common Cooling Issues We Take Care Of
                    <span className="block w-24 h-1 bg-sky-500 mx-auto mt-3 rounded-full animate-pulse"></span>
                </h2>
                <p className="text-gray-600 text-lg max-w-xl mx-auto">
                    Expert diagnosis and solutions by trusted professionals
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {problems.map((problem, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 p-8 overflow-hidden group"
                    >
                        <div className="flex justify-center mb-6">{problem.icon}</div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
                            {problem.title}
                        </h3>
                        <ul className="text-left space-y-2 mb-5">
                            {problem.issues.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                    <FaCheckCircle className="text-green-500 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-500 text-base mb-6 text-left">{problem.description}</p>
                        <div className="text-center">
                            <button
                                onClick={() => nav('/contact-us')}
                                className="bg-sky-600 text-white px-5 py-2 rounded-full font-medium hover:bg-sky-700 transition"
                            >
                                {problem.action} →
                            </button>
                        </div>
                        {/* Glow Border on Hover - FIXED with pointer-events-none */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-sky-400 transition-all duration-500 pointer-events-none"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AirconIssuesSection;
