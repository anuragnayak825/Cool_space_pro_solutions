import React from 'react'
import lot from '../assets/8TizWb8I6a.json'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
export default function PagenotFound() {
    const nav = useNavigate()
    return (
        <div className='z-[100000] w-full h-screen  bg-white'>
            <div className=' flex flex-col space-y-5 justify-center items-center w-full h-full '>
                <Lottie
                    className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl   shadow-xl"
                    animationData={lot}
                    loop={true}
                    autoplay={true}
                />
                <button onClick={() => nav('/')} className='w-auto my-0 px-4 py-3 mx-auto bg-blue-500 shadow-xl shadow-blue-900 text-white font-bold rounded-md text-xl uppercase tracking-wider italic'>Go To Home</button>

            </div>
        </div>
    )
}
