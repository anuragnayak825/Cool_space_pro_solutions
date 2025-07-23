import React, { useState } from 'react';
import { FaSnowflake, FaFire } from 'react-icons/fa';

const services = {
    cooling: [
        {
            title: 'AC Installation',
            image: 'https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26543.jpg?t=st=1753098116~exp=1753101716~hmac=922f6cc6833f9a8a5df4d20512998ded03bb25f8f034d52c9d4db6dc9f05bf43&w=1380',
        },
        {
            title: 'AC Maintenance',
            image: 'https://img.freepik.com/free-photo/air-conditioning-decoration-interior_74190-6226.jpg?t=st=1753098374~exp=1753101974~hmac=333a8a47a77e5d15ab0ed43387b39f93666ef396a0bbbc4f345279fcd8a6bf15&w=1380',
        },
        {
            title: 'Air Duct Cleaning',
            image: 'https://img.freepik.com/free-photo/person-taking-care-office-cleaning_23-2149374474.jpg?t=st=1753098455~exp=1753102055~hmac=d12dca64be555b33f0a3750fe2b869778261118ba41c93b8831e64d20a3d45a2&w=1380',
        },
        {
            title: 'Air Duct Cleaning',
            image: 'http://img.freepik.com/free-vector/conditioner-home-office-illustration_1284-11783.jpg?t=st=1753098515~exp=1753102115~hmac=bf652c1a37119d0bdda4f9324c264a744cd1dfb77838750ffb69bc2c5fd7f90d&w=1380',
        },
        {
            title: 'Air Duct Cleaning',
            image: 'https://img.freepik.com/free-photo/installing-cooker-hood_1098-17808.jpg?t=st=1753098845~exp=1753102445~hmac=7a98c70f5793736a98ba44ff520761fa760a4fb8db549a3e50d6856dc410987f&w=1380',
        },
    ],
    interior: [
        {
            title: 'Living Room Design',
            image: 'https://img.freepik.com/free-photo/stylish-interior-design_23-2149350605.jpg',
        },
        {
            title: 'Office Interior',
            image: 'https://img.freepik.com/free-photo/modern-office-desk-interior_23-2149188754.jpg',
        },
        {
            title: 'Modular Kitchen',
            image: 'https://img.freepik.com/free-photo/contemporary-kitchen-interior_23-2149364437.jpg',
        },
    ],
};

export default function ServiceToggleSection() {
    const [activeTab, setActiveTab] = useState('cooling');

    return (
        <section className="w-full bg-white py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm text-gray-500">Open 24/7 with office staff</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 my-4">How Can We Help You?</h2>
                <p className="text-gray-500 mb-8">Choose your service</p>

                {/* Toggle Buttons */}
                <div className="flex justify-center mb-10 gap-4">
                    <button
                        onClick={() => setActiveTab('cooling')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300 ${activeTab === 'cooling'
                                ? 'bg-blue-100 text-blue-600 border-blue-400'
                                : 'bg-gray-100 text-gray-500 border-gray-300'
                            }`}
                    >
                        <FaSnowflake />
                        Aircon Services
                    </button>
                    <button
                        onClick={() => setActiveTab('interior')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300 ${activeTab === 'interior'
                                ? 'bg-red-100 text-red-600 border-red-400'
                                : 'bg-gray-100 text-gray-500 border-gray-300'
                            }`}
                    >
                        <FaFire />
                        Interior Design
                    </button>
                </div>

                {/* Cards Grid */}
                <div className=" w-full flex justify-evenly gap-6">
                    {services[activeTab].map((item, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow w-auto transition duration-300  relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-64 h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-3 left-3 bg-gray-800/80 text-white text-sm px-3 py-1 rounded">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
