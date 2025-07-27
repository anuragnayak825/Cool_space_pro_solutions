import React from 'react'

export default function ContactFrom2() {
    return (
        <div className='w-full h-auto  px-15 py-5 flex justify-center items-center '>
            <div className='w-full lg:w-1/2 h-full px-6 sm:px-8 md:px-10 py-12'>
                <div className='flex space-x-2 justify-start items-center text-base md:text-lg font-semibold tracking-wider text-[#00C4CC] italic mb-4'>
                    <h1 className='uppercase'>Get in Touch</h1>
                    <hr className='w-8 border border-[#00C4CC]' />
                </div>

                <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold text-gray-800 leading-tight'>
                    Have any question or free consultacy?
                </h1>

                <form className='w-full mt-8 space-y-4'>
                    <input
                        type="text"
                        placeholder='Enter Your Name'
                        className='px-5 py-4 md:py-5 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-full text-base'
                    />
                    <input
                        type="text"
                        placeholder='Enter Your Number'
                        className='px-5 py-4 md:py-5 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-full text-base'
                    />
                    <input
                        type="text"
                        placeholder='Enter Your Email'
                        className='px-5 py-4 md:py-5 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-full text-base'
                    />
                    <textarea
                        placeholder='Enter Your Message'
                        className='px-5 py-4 h-32 md:h-40 border italic tracking-wider placeholder:tracking-wider placeholder:font-bold border-gray-400 outline-0 w-full rounded-3xl text-base resize-none'
                    ></textarea>

                    <div className='w-full'>
                        <button className='px-8 py-4 md:px-10 md:py-5 font-medium cursor-pointer hover:bg-[#00C4CC] hover:font-semibold hover:text-white rounded-full border border-[#00C4CC] uppercase italic text-sm md:text-base'>
                            Get Estimated
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
