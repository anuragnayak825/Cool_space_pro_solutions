import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const serviceImages = [
    'https://img.freepik.com/free-photo/team-replacing-old-air-conditioner_482257-78499.jpg?t=st=1753437600~exp=1753441200~hmac=b22c16f2ee30b99eb1a76c84e5863158e65093056ade8a0f270157c342fabc05&w=2000',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    'https://img.freepik.com/free-photo/woman-man-with-safety-protection-equipment-painting_23-2148908422.jpg?t=st=1753437326~exp=1753440926~hmac=39d92c7e78d3d4df2e3b9978e5f8fea009ec35c7ccbe977625839fdf98b0142b&w=2000',
];

export default function ServiceToggleSection() {
    const services = [
        {
            id: 1,
            title: 'Air Conditioning Services',
            description: 'Professional AC installation, repair, and maintenance services for residential and commercial spaces.',
            image: serviceImages[0],
            path: '/aircon-service'
        },
        {
            id: 2,
            title: 'Interior Designing',
            description: 'Transform your home or office with elegant and modern interior design solutions.',
            image: serviceImages[1],
            path: '/interior'
        },
        {
            id: 3,
            title: 'Home Renovation',
            description: 'Expert renovation services to enhance comfort, functionality, and value of your property.',
            image: serviceImages[2],
            path: '/home-renovation'
        },
    ];

    return (
        <div className='w-full min-h-screen py-10 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white via-sky-50 to-white'>
            {/* Section Title */}
            <div className=' w-auto mx-auto flex flex-col justify-center items-center  px-4 py-3 mb-5'>
                <span className='font-bold text-xl sm:text-lg md:text-xl tracking-wide  bg-white px-4 italic'>
                    Our Specialized Services
                </span>
                <hr className=' border-[2px] max-w-40 w-full mt-2 border-[#00C4CC]' />
            </div>
            {/* Service Cards */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10'>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className='bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:scale-[1.02]'
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className='w-full h-48 sm:h-56 md:h-64 object-cover'
                        />
                        <div className='p-6 flex flex-col flex-grow'>
                            <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-3'>
                                {service.title}
                            </h2>
                            <p className='text-gray-600 text-sm sm:text-base mb-6 flex-grow'>
                                {service.description}
                            </p>
                            <div className='flex flex-wrap gap-3 mt-auto'>
                                <button onClick={()=> window.location.href = 'tel:+918287039634'} className='bg-[#00C4CC] hover:bg-[#00aab1] text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md'>
                                    Talk to Us <FaArrowRight className='text-xs' />
                                </button>
                                <NavLink
                                    to={service.path}
                                    className='border-2 border-[#00C4CC] text-[#00C4CC] hover:bg-[#e6fafa] px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm'
                                >
                                    Learn More <FaArrowRight className='text-xs' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
