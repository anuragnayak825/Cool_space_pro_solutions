import React from 'react'
import interior1 from './assets/g-i-1.webp'
import interior2 from './assets/g-i-2.webp'
import interior3 from './assets/g-i-3.webp'
import interior4 from './assets/g-i-4.webp'
import interior5 from './assets/g-i-5.webp'
import interior6 from './assets/g-i-6.webp'

const images = [
    {
        src: interior1
    },
    {
        src: 'https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037471.jpg?uid=P136526711&ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80'
    },
    {
        src: 'https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037504.jpg?t=st=1753787806~exp=1753791406~hmac=4e11e0f5c9dd341a9586c7339829cdec0f1771f379974c414bb86cf054d8b91a&w=996'
    },
    {
        src: 'https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695761.jpg?t=st=1753787674~exp=1753791274~hmac=10b5e0277e484f49d9d18c6487a7a7e5424dd2988edb9c6958a16b5d18205002&w=996'
    },

    {
        src: 'https://img.freepik.com/premium-psd/interior-living-room-wall-background-mockup_42637-1119.jpg?w=996'
    },
    {
        src: 'https://img.freepik.com/premium-photo/modern-classic-black-interior-with-black-sofa-wall-mouldings-ceiling-backlit-wood-floor-door-curtains_158268-279.jpg?w=996'
    },
]

export default function ServicenameInteriordesign() {
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
    )
}
