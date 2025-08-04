import React from 'react';
import { motion } from 'framer-motion';
import { FaBoxOpen, FaRulerCombined, FaPlug, FaCheckCircle } from 'react-icons/fa';

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

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            type: 'spring',
        },
    }),
};

export default function AirconInstallationProcedureCard() {
    return (
        <section className="w-full bg-gradient-to-br from-white to-slate-50 py-16 px-6 sm:px-10 lg:px-24">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12"
            >
                Aircon Installation Procedure
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-default"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full border border-gray-300 shadow-inner">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
