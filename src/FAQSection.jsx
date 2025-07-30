import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
    { question: "First Question", answer: "This is the answer to the first question." },
    { question: "Second Question", answer: "This is the answer to the second question." },
    { question: "Third Question", answer: "This is the answer to the third question." },
    { question: "Fourth Question", answer: "This is the answer to the fourth question." },
    { question: "Fifth Question", answer: "This is the answer to the fifth question." }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="w-full px-5 lg:px-20 py-16 bg-white">
            <h2 className="text-3xl italic tracking-wide font-bold mb-8 text-gray-800 text-left">Frequently Asked Questions</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  ">
                {/* FAQ List */}
                <div className="md:col-span-2">
                    <div className="space-y-5">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md border border-gray-200 transition-all"
                            >
                                <button
                                    className="w-full flex justify-between items-center p-4 text-left transition"
                                    onClick={() => toggle(index)}
                                >
                                    <span className="text-lg font-medium text-gray-800">{item.question}</span>
                                    <span className="text-2xl text-gray-600">
                                        {activeIndex === index ? <FiMinus /> : <FiPlus />}
                                    </span>
                                </button>
                                <div
                                    className={`px-5 pt-0 text-gray-600 text-[15px] overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Card */}
                <div className="w-full  ">
                    <div className="relative rounded-xl overflow-hidden shadow-xl h-full min-h-[360px] bg-blue-600 text-white flex items-center">
                        <img
                            src="https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2149300644.jpg"
                            alt="Help"
                            className="absolute inset-0 w-full h-full object-cover opacity-50"
                        />
                        <div className="relative z-10 p-8 text-center">
                            <h3 className="text-2xl font-semibold mb-2">WE'RE HERE TO HELP!</h3>
                            <p className="mb-4 text-sm leading-relaxed">
                                We're friendly and available to chat. Reach out to us anytime and we'll happily answer your questions.
                            </p>
                            <button className="mt-2 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-blue-600 transition font-medium">
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
