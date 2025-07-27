import React from 'react';

const images = [
    {
        src: "https://img.freepik.com/free-photo/hvac-engineer-dusting-blower-fan_482257-90845.jpg?t=st=1753599051~exp=1753602651~hmac=e66eba4367dcc06292e42f9739ffdc50e8400bd7d533c33ea665c7f1d8560c78&w=1060",
        title: "AC Cleaning",
    },
    {
        src: "https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695943.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80",
        title: "Living Room Design",
    },
    {
        src: "https://img.freepik.com/free-photo/woman-man-with-safety-protection-equipment-painting_23-2148908422.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80",
        title: "Painting Services",
    },
    {
        src: "https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695965.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80",
        title: "False Ceiling Design",
    },
    {
        src: "https://img.freepik.com/free-photo/happy-couple-bringing-sofa-their-new-apartment_637285-12296.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80",
        title: " Vastu & Space Optimization",
    },
    {
        src: "https://img.freepik.com/free-vector/isometric-air-conditioning-concept-with-worker-men-installing-cooking-system-vector-illustration_1284-80987.jpg?ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80",
        title: "AC Installation",
    },
];

export default function ServicenameAndDesign() {
    return (
        <div className="w-full px-20 py-5 relative overflow-hidden">
            <img src="https://wp2.yogsthemes.com/thewp/acrepair/wp-content/uploads/2022/05/pattern-1.png"
                alt=""
                className=' absolute top-0 right-0'
            />
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full rounded-lg overflow-hidden group break-inside-avoid shadow-md"
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            {/* Title Content */}
                            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
