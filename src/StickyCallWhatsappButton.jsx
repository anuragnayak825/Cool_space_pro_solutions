import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function StickyCallWhatsappButton() {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const progressRingStyle = {
        background: `conic-gradient(#4F46E5 ${scrollProgress}%, transparent ${scrollProgress}%)`
    };

    return (
        <>
            {/* Desktop: md+ */}
            <div className="hidden fixed bottom-4 right-4 z-50 md:flex flex-col-reverse gap-4 items-end">
                {/* WhatsApp */}
                <a
                    href="https://wa.me/+601124419414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-13 h-13 flex justify-center items-center bg-[#25D366] hover:bg-[#1ebc57] text-white p-3 rounded-full shadow-lg transition duration-300"
                    title="WhatsApp"
                >
                    <FaWhatsapp className="text-3xl" />
                </a>

                {/* Call */}
                <a
                    href="tel:+601124419414"
                    className="w-13 h-13 flex justify-center items-center bg-[#00C4CC] hover:bg-[#00aeb5] text-white p-3 rounded-full shadow-lg transition duration-300 animate-shake"
                    title="Call Now"
                >
                    <FaPhoneAlt className="text-xl" />
                </a>

                {/* Scroll to Top Button */}
                {scrollProgress > 5 && (
                    <div
                        className="relative w-12 h-12 flex justify-center items-center"
                        title="Scroll to Top"
                        onClick={scrollToTop}
                    >
                        <div
                            className="absolute inset-0 rounded-full z-[-1]"
                            style={progressRingStyle}
                        />
                        <div className="w-11 h-11 flex justify-center items-center bg-white text-indigo-600 rounded-full shadow-md border border-gray-300 cursor-pointer">
                            <FaArrowUp />
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile View */}
            <div className="fixed bottom-2 z-50 md:hidden w-full flex justify-between px-2">
                {/* Call */}
                <a
                    href="tel:+601124419414"
                    className="w-13 h-13 flex justify-center items-center bg-[#00C4CC] hover:bg-[#00aeb5] text-white p-3 rounded-full shadow-lg transition duration-300 animate-shake"
                    title="Call Now"
                >
                    <FaPhoneAlt className="text-xl" />
                </a>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/+601124419414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-13 h-13 flex justify-center items-center bg-[#25D366] hover:bg-[#1ebc57] text-white p-3 rounded-full shadow-lg transition duration-300"
                    title="WhatsApp"
                >
                    <FaWhatsapp className="text-3xl" />
                </a>
            </div>

            {/* Mobile Scroll to Top */}
            {scrollProgress > 5 && (
                <div
                    className="fixed bottom-[90px] right-2 w-12 h-12 flex justify-center items-center md:hidden z-50"
                    onClick={scrollToTop}
                    title="Scroll to Top"
                >
                    <div
                        className="absolute inset-0 rounded-full z-[-1]"
                        style={progressRingStyle}
                    />
                    <div className="w-11 h-11 flex justify-center items-center bg-white text-indigo-600 rounded-full shadow-md border border-gray-300 cursor-pointer">
                        <FaArrowUp />
                    </div>
                </div>
            )}
        </>
    );
}
