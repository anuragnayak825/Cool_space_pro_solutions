import React from 'react';
import { FaSnowflake, FaCouch, FaHammer } from 'react-icons/fa';

export default function ServiceHighlightsSection() {
    return (
        <section className="w-full bg-white py-5 md:py-10 px-4 md:px-16">
            <div className="max-w-7xl mx-auto space-y-3">

                {/* AIRCON SERVICE */}
                <div className=" p-4 md:px-10 md:py-5 ">
                    <div className=" relative flex justify-self-start  items-center  text-black py-1.5 px-1.5 rounded mb-4 ">
                        <FaSnowflake size={28} className="mr-3" />
                        <h2 className=" text-lg md:text-3xl font-bold">Why Regular Aircon Maintenance Matters</h2>

                        <div className="absolute left-0 -bottom-2 w-full h-[4px] bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                    </div>


                    <p className="text-sm md:text-lg text-gray-500 font-medium italic tracking-wider leading-relaxed">
                        Your air conditioning unit needs regular check-ups to perform at its best. Over time, dust and dirt accumulate, reducing efficiency and increasing electricity bills.
                        Our professional aircon maintenance ensures your unit stays clean, energy-efficient, and reliable — preventing future breakdowns and extending its lifespan.
                    </p>
                    <ul className="mt-5 text-gray-500 font-medium italic tracking-wide space-y-2 list-disc list-inside text-sm md:text-base">
                        <li><span className="font-semibold text-[#00C4CC]">Save on Energy Costs:</span> A well-maintained aircon consumes less power while cooling faster and more effectively.</li>
                        <li><span className="font-semibold text-[#00C4CC]">Prevent Breakdowns:</span> Small issues are resolved early before they turn into costly repairs.</li>
                        <li><span className="font-semibold text-[#00C4CC]">Improve Air Quality:</span> Regular cleaning removes dust, allergens, and mold for fresher, healthier air indoors.</li>
                    </ul>
                </div>

                {/* INTERIOR DESIGN */}
                <div className="p-6 md:px-10 md:py-5 ">
                    <div className="flex relative justify-self-start items-center  py-1.5 px-1.5 rounded  mb-4">
                        <FaCouch size={28} className="mr-3" />
                        <h2 className="text-lg md:text-3xl font-bold">Transform Your Space with Interior Design</h2>
                        <div className="absolute left-0 -bottom-2 w-full h-[4px] bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                        
                    </div>
                    <p className="text-sm md:text-lg text-gray-900 font-medium italic tracking-wider leading-relaxed">
                        Interior design isn’t just about aesthetics — it’s about creating a space that reflects your personality and improves your lifestyle.
                        Whether it's your home, office, or commercial space, our designers bring ideas to life with functionality, beauty, and flow.
                    </p>
                    <ul className="mt-6 text-gray-900 font-medium italic tracking-wide space-y-2 list-disc list-inside text-sm md:text-base">
                        <li><span className="font-semibold text-[#00C4CC]">Personalized Spaces:</span> We tailor each design to your unique style and purpose.</li>
                        <li><span className="font-semibold text-[#00C4CC]">Efficient Layouts:</span> Maximize space and natural light with strategic planning.</li>
                        <li><span className="font-semibold text-[#00C4CC]">Modern Materials:</span> From textures to lighting, we use contemporary elements for a timeless look.</li>
                    </ul>
                </div>

                {/* HOME RENOVATION */}
                <div className=" p-6 md:px-10 md:py-5 ">
                    <div className="flex relative justify-self-start items-center  py-1.5 px-1.5 rounded  mb-4">
                        <FaHammer size={28} className="mr-3" />
                        <h2 className="text-lg md:text-3xl font-bold">Complete Home Renovation Solutions</h2>
                        <div className="absolute left-0 -bottom-2 w-full h-[4px] bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                    </div>
                    <p className="text-sm md:text-lg text-gray-900 font-medium italic tracking-wider leading-relaxed">
                        Whether you're upgrading a single room or revamping your entire property, our renovation experts deliver stunning transformations with hassle-free execution.
                        From civil work and flooring to ceilings and plumbing — we manage everything under one roof.
                    </p>
                    <ul className="mt-6 text-gray-900 font-medium italic tracking-wide space-y-2 list-disc list-inside text-sm md:text-base">
                        <li><span className="font-semibold text-[#00C4CC]">End-to-End Execution:</span> We handle design, demolition, rebuild, and finishing — all managed by professionals.</li>
                        <li><span className="font-semibold text-[#00C4CC]">Quality Materials:</span> We use high-grade materials that ensure long-term durability and elegance.</li>
                        <li><span className="font-semibold text-[#00C4CC]">On-Time Delivery:</span> Timely project completion with clear communication at every stage.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
