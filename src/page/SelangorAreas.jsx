import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const areas = [
    [
        'Shah Alam', 'Klang', 'Bangi', 'Ampang', 'Beranang',
        'Kajang', 'Cyberjaya', 'Rawang', 'Peak Nature', 'Subang Jaya', 'Meru Klang', 'USJ', 'Bandar Utama'
    ],
    [
        'Loyal Nature', 'Balakong', 'Setia Alam', 'Banting', 'Gombak',
        'Kelana Jaya', 'Sungai Buloh', 'Damansara City', 'Batu Caves', 'Kuchai Lama', 'Bandar Baru Bangi', 'Bandar Mahkota', 'Bukit Jelutong',
    ],
    [
        'Puchong', 'Kembangan Series', 'Jelutong Hill', 'Sepang', 'Kemuning City',
        'Semenyih', 'Ara Damansara', 'Bandar Saujana Putra', 'Dengkil', 'Kapar', 'Country Heights', 'Tropicana Damansara',
    ],
    [

        'Damansara Perdana',
        'Damansara Jaya', 'Damansara Utama', 'Kota Damansara', 'Kota Kemuning',
        'Mutiara Damansara', 'Putra Height', 'Puncak Jalil', 'Serdang',
        'Selayang', 'Seri Kembangan'
    ]
];

export default function SelangorAreas() {
    return (
        <div className="md:px-20">
            <div className="bg-white w-full my-10 p-4">
                {/* Title */}
                <div className="bg-[#1574C0] text-white text-center py-2 text-2xl font-bold rounded">
                    Selangor
                </div>

                {/* Area Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
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
