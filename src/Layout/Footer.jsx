import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa6';
import logo from '../assets/logo.png'; // Update your logo path


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
            <div className="absolute inset-0 bg-[#1E2350]/90 z-0"></div>

            {/* Footer Content */}
            <div className="relative z-10 py-12 px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo + About */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="Hero Aircon Logo" className="w-30 " />
                            
                        </div>
                        <p className="text-sm text-gray-300">
                            Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts they live
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a href="#" className="border border-gray-400 rounded-full p-2 hover:bg-blue-600 transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="border border-gray-400 rounded-full p-2 hover:bg-pink-500 transition">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Get a Quotation</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#">Wall Mounted Aircon</a></li>
                            <li><a href="#">Centeralized Duct</a></li>
                            <li><a href="#">Cassette Unit</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Box */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Subscribe Now</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Don’t miss our future updates! Get Subscribed Today!
                        </p>
                        <div className="flex items-center border border-gray-400 rounded-full overflow-hidden w-full max-w-[300px]">
                            <input
                                type="email"
                                placeholder="Your mail here"
                                className="w-full px-4 py-2 text-gray-700 outline-none text-sm"
                            />
                            <div className="bg-white text-[#1E2350] p-3">
                                <FaEnvelope />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="text-center text-sm text-gray-300 mt-10">
                    &copy; {new Date().getFullYear()} Hero Aircon Services & Engineering. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
