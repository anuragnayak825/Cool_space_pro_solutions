import React from 'react'
import { GrServices } from "react-icons/gr";
import { HiMiniArrowTurnLeftDown, HiMiniArrowTurnRightDown } from "react-icons/hi2";

export default function AboutSection() {
    return (
        <div className='w-full h-[90vh] flex justify-center p-10'>
           
            <div className='w-full max-w-3xl h-full flex justify-end items-center px-20'>
                <div className='w-full relative max-w-[460px] h-[75vh] '>
                    <img src="https://invernawp.themesflat.co/wp-content/uploads/2025/02/about_img_2-min.jpg" alt="" className='w-full h-full object-cover rounded-2xl' />
                    <div className='w-full bg-white absolute max-w-60 h-[200px] border-[6px] rounded-xl border-white bottom-6 -right-16 transform transition-transform duration-300 hover:-translate-y-2.5' >
                        <img
                            src="https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695787.jpg?t=st=1752839013~exp=1752842613~hmac=8fc27dd577c12c20b5f3dd925ccf29c61163f10266d12a9b231dd503b3a7ee65&w=996"
                            alt=""
                            className='w-full h-full object-cover rounded-xl relative'
                        />
                        <div className='absolute w-full h-full bg-white/30 inset-0'></div>
                    </div>

                    <div className='w-5 h-[30vh] bg-[#00C4CC] rounded-full absolute bottom-0 -left-10 ' />
                    <div className='w-full flex justify-center items-center space-x-4 bg-white absolute shadow-md top-8 -left-10 border-white border-s-[3px] border-s-[#00C4CC] z-10 max-w-40 border h-[10vh] rounded-md'>
                        <GrServices className='text-4xl text-[#00C4CC]' />
                        <div className='flex flex-col -space-x-1'>
                            <h1 className='font-bold text-gray-800 text-xl'>5544 +</h1>
                            <span className='text-xs font-semibold text-gray-300'> Satisfied Clients</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-3xl h-auto flex justify-start items-center'>
                <div className='w-full space-y-6 relative h-[65vh] px-10 '>
                    {/* <div className='flex justify-start items-center'><HiMiniArrowTurnLeftDown /> <span>About Company</span> <HiMiniArrowTurnRightDown /></div> */}
                    <div className='max-w-[185px] relative border-[3px] flex justify-center items-center border-[#00C4CC] h-auto px-3.5 py-3'>
                        <span className='font-semibold text-lg tracking-wider absolute -top-4 bg-white px-2.5 '>About Campany</span>
                    </div>
                    <h1 className='text-4xl font-bold tracking-wider'>We Provide Smart Aircon Solutions & Modern Interior Styling</h1>
                    <p className='text-base font-normal text-gray-500 tracking-wider'>Transform your space with energy-efficient cooling and stylish interiors. Our expert team blends advanced air conditioning with modern design, tailored to your home, office, or commercial needs. Breathe easier, live better.</p>

                    <div className='  px-4 border-s-[4px] border-s-[#00C4CC] '>
                        <div className='font-semibold'>One-stop service for comfort, functionality, and beauty</div>
                        <div className='font-semibold'>Upgrade your environment — both in feel and look</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
