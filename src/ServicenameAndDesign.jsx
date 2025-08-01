import React from 'react';

import airconimg from './assets/g-a-1.webp'
import airconimg1 from './assets/g-a-2.webp'

import airconimg3 from './assets/g-a-4.webp'


const images = [
    {
        src: "https://img.freepik.com/free-photo/hvac-engineer-dusting-blower-fan_482257-90845.jpg?t=st=1753599051~exp=1753602651~hmac=e66eba4367dcc06292e42f9739ffdc50e8400bd7d533c33ea665c7f1d8560c78&w=1060",
        title: "AC Cleaning",
    },
    {
        src: airconimg1
    },
    {
        src: airconimg3
    },
    {
        src: airconimg
    },
    {
        src: 'https://img.freepik.com/free-vector/isometric-air-conditioning-concept-with-worker-men-installing-cooking-system-vector-illustration_1284-80987.jpg?t=st=1753784653~exp=1753788253~hmac=580b058cbbfcd77d863815a78abbb82bb1f96eda74c81013ab5a8514dd478785&w=996'
    },

];

export default function ServicenameAndDesign() {
    return (
        <div className="w-full px-5 md:px-20 py-5 relative overflow-hidden">
            <img src="https://wp2.yogsthemes.com/thewp/acrepair/wp-content/uploads/2022/05/pattern-1.png"
                alt=""
                className=' absolute top-0 right-0'
            />
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="relative  w-full rounded-lg overflow-hidden group break-inside-avoid shadow-md"
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
