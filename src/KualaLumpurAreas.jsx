import { div } from 'framer-motion/client';
import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const areas = [
    ['Pudu', 'Sentul', 'Maluri', 'Bangsar', 'Setapak'],
    ['Wangsa Maju', 'Chow Kit', 'Brickfields', 'Bukit Jalil', 'Mont Kiara'],
    ['Sungai Besi', 'Cheras', 'Desa Parkcity', 'Desa Petaling', 'Kepong'],
    ['Pantai Hill Park', 'Sri Petaling', 'Bandar Sunway', 'Damansara Indah', 'Taman OUG'],
];

export default function KualaLumpurAreas() {
    return (
        <div className='md:px-20 '>
            <div className="bg-white w-full  my-10 p-4">
                {/* Title */}
                <div className="bg-[#1574C0] text-white text-center py-2 text-2xl font-bold rounded">
                    Kuala Lumpur
                </div>

                {/* Area Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                    {areas.map((column, colIndex) => (
                        <div key={colIndex} className="space-y-2">
                            {column.map((area, index) => (
                                <div key={index} className="flex items-center text-black text-lg italic">
                                    <FaCaretRight className="text-[#00C4CC] mr-2" />
                                    <span>{area}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
