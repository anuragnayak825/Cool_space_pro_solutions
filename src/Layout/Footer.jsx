import React from 'react';
import {
    FaFacebookF, FaInstagram, FaCaretRight, FaPhone, FaLocationDot
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer
            className="relative text-white"
            style={{
                backgroundImage: `url(https://img.freepik.com/free-photo/air-conditioning-decoration-interior_74190-6226.jpg?t=st=1753861895~exp=1753865495~hmac=b676942d7bf4fc577081b05e60e2f2bfded3ce8daf0ce9c09e968365c53db5c6&w=996)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed',
            }}
        >
            {/* Blue overlay */}
            <div className="absolute inset-0  bg-[#1E2350]/90 z-0" />
            {/* <div className="absolute inset-0  bg-blue-90000 z-0" /> */}

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
                            <NavLink to={'https://www.facebook.com/coolspaceprosolution'} className="border border-gray-400 rounded-full p-2 hover:bg-blue-600 transition">
                                <FaFacebookF />
                            </NavLink>
                            <NavLink to={''} className="border border-gray-400 rounded-full p-2 hover:bg-pink-500 transition">
                                <FaInstagram />
                            </NavLink>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-lg text-white italic">
                            <li className="flex items-center">
                                <FaCaretRight className="mr-2" />
                                <NavLink to={'/'} className="hover:underline">Home</NavLink>
                            </li>
                            <li className="flex items-center">
                                <FaCaretRight className="mr-2" />
                                <NavLink to={'/about'} className="hover:underline">About Us</NavLink>
                            </li>
                            <li className="flex items-center">
                                <FaCaretRight className="mr-2" />
                                <NavLink to={'/contact-us'} className="hover:underline">Contact Us</NavLink>
                            </li>
                            <li className="flex items-center">
                                <FaCaretRight className="mr-2" />
                                <NavLink to="/gallery" className="hover:underline">Gallery</NavLink>
                            </li>
                            <li className="flex items-center">
                                <FaCaretRight className="mr-2" />
                                <NavLink to={'/privacy-policy'} className="hover:underline">Privacy Policy</NavLink>
                            </li>
                        </ul>

                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold tracking-wider mb-4">Services</h3>
                        <ul className="space-y-2 text-lg text-white italic">
                            <li className="flex items-center">
                                <FaCaretRight className="mr-2" />
                                <NavLink to={'/aircon-service'} className="hover:underline">Aircon Service</NavLink>
                            </li>
                            <li className="flex items-center">
                                <FaCaretRight className="mr-2" />
                                <NavLink to={'/interior'} className="hover:underline">Interior Design</NavLink>
                            </li>
                            <li className="flex items-center">
                                <FaCaretRight className="mr-2" />
                                <NavLink to={'/home-renovation'} className="hover:underline">Home Renovation</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <ul className="space-y-3 text-white text-base italic">
                        <h3 className="text-xl font-semibold tracking-wider mb-4">Contact Details</h3>
                        <li className="flex items-start gap-3 flex-wrap">
                            <FaPhone className="text-lg mt-1 shrink-0" />
                            <a href="tel:+601124419414" className="break-words">+60 11-2441 9414</a>
                        </li>
                        <li className="flex items-start gap-3 flex-wrap">
                            <MdEmail className="text-lg mt-1 shrink-0" />
                            <a href="mailto:coolspaceprosolution@gmail.com" className="break-words">coolspaceprosolution@gmail.com</a>
                        </li>
                        <li className="flex items-start gap-3 flex-wrap">
                            <FaLocationDot className="text-lg mt-1 shrink-0" />
                            <span>Kuala Lumpur</span>
                        </li>
                    </ul>

                </div>

                {/* Bottom Footer */}
                <div className="text-center text-sm text-gray-300 mt-5 border-t border-white/20 pt-4">
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
