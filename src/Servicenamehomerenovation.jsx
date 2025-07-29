import React from 'react'

const images = [
    {
        src: 'https://img.freepik.com/premium-photo/new-home-installing-material-repairs-apartment_73110-9860.jpg?uid=P136526711&ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80'
    },

    {
        src: 'https://img.freepik.com/premium-photo/contractor-using-circular-saw-cutting-crown-moulding-renovation_73110-1675.jpg?uid=P136526711&ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80'
    },
    {
        src: 'https://img.freepik.com/premium-photo/finished-sheetrock-new-home-construction_73110-2218.jpg?uid=P136526711&ga=GA1.1.2112137625.1747906340&semt=ais_hybrid&w=740&q=80'
    },
    // {
    //     src: 'https://img.freepik.com/premium-photo/painting-wall-red-room-before-after-restoration-refurbishment_157125-7187.jpg?w=996'
    // }
    , {
        src: 'https://img.freepik.com/premium-photo/installation-worker-installs-kitchen-cabinet_73110-8387.jpg?w=996'
    }
    , {
        src: 'https://img.freepik.com/free-photo/manual-worker-grinding-metal-steel-objects-workshop-with-tools_1163-3130.jpg?t=st=1753788920~exp=1753792520~hmac=2179c38236608375b88ed62533cfccb267261a3987995f612333782b2ee176da&w=996'
    }
]

export default function Servicenamehomerenovation() {
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
