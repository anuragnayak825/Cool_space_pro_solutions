import React from 'react';
import {
    FaFacebookF, FaInstagram, FaCaretRight, FaPhone, FaLocationDot
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer
            className="relative text-white"
            style={{
                backgroundImage: `url(https://img.freepik.com/free-photo/view-futuristic-lighting-lamp-design_23-2151037471.jpg?t=st=1753445972~exp=1753449572~hmac=62da04a289aa847ce92f3086a1b3173c32eeb42d5b42b7dddd50a85d08fa8a29&w=2000)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Blue overlay */}
            <div className="absolute inset-0 bg-[#1E2350]/90 z-0" />

            {/* Footer Content */}
            <div className="relative z-10 px-6 py-10 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between items-start">

                    {/* Logo & About */}
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex justify-center md:justify-start">
                            <div className="bg-white p-2 rounded-2xl">
                                <img src={logo} alt="Hero Aircon Logo" className="w-[180px]" />
                            </div>
                        </div>
                        <p className="text-sm text-white font-medium max-w-[300px] mx-auto md:mx-0">
                            Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <div className="flex justify-center md:justify-start gap-3 pt-2">
                            <a href="#" className="border border-gray-400 rounded-full p-2 hover:bg-blue-600 transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="border border-gray-400 rounded-full p-2 hover:bg-pink-500 transition">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-lg text-white italic">
                            <li><a href="#" className='flex items-center hover:underline'><FaCaretRight className="mr-2" /> Home</a></li>
                            <li><a href="#" className='flex items-center hover:underline'><FaCaretRight className="mr-2" /> About Us</a></li>
                            <li><a href="#" className='flex items-center hover:underline'><FaCaretRight className="mr-2" /> Contact Us</a></li>
                            <li><a href="/gallery" className='flex items-center hover:underline'><FaCaretRight className="mr-2" /> Gallery</a></li>
                            <li><a href="#" className='flex items-center hover:underline'><FaCaretRight className="mr-2" /> Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold tracking-wider mb-4">Services</h3>
                        <ul className="space-y-2 text-lg text-white italic">
                            <li className='flex items-center hover:underline'><FaCaretRight className="mr-2" /> <a href="#">Aircon Service</a></li>
                            <li className='flex items-center hover:underline'><FaCaretRight className="mr-2" /> <a href="#">Interior Design</a></li>
                            <li className='flex items-center hover:underline'><FaCaretRight className="mr-2" /> <a href="#">Home Renovation</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold tracking-wider mb-4">Contact Details</h3>
                        <ul className="space-y-3 text-lg text-white italic">
                            <li className='flex items-center'><FaPhone className='mr-3 text-xl' /> <a href="#">+60 12-345 6789</a></li>
                            <li className='flex items-center'><MdEmail className='mr-3 text-xl' /> <a href="#">example@gmail.com</a></li>
                            <li className='flex items-center'><FaLocationDot className='mr-3 text-xl' /> <a href="#">Kuala Lumpur</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="text-center text-sm text-gray-300 mt-10 border-t border-white/20 pt-4">
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
