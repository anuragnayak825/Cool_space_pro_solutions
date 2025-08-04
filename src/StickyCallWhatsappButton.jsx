import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function StickyCallWhatsappButton() {
    return (
        <>
            <div className=" hidden fixed bottom-4 right-4 z-50 md:flex flex-col-reverse gap-4">
                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/+601124419414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="order-1 w-13 h-13 flex justify-center items-center bg-[#25D366] hover:bg-[#1ebc57] text-white p-3 rounded-full shadow-lg transition duration-300"
                    title="WhatsApp"
                >
                    <FaWhatsapp className="text-3xl" />
                </a>

                {/* Call Button with mobile-only shake */}
                <a
                    href="tel:+601124419414"
                    className="order-2 w-13 h-13 flex shake-mobile justify-center items-center bg-[#00C4CC] hover:bg-[#00aeb5] text-white p-3 rounded-full shadow-lg transition duration-300 animate-shake sm:animate-none"
                    title="Call Now"
                >
                    <FaPhoneAlt className="text-xl" />
                </a>
            </div>
            <a
                href="https://wa.me/+601124419414"
                target="_blank"
                rel="noopener noreferrer"
                className="order-1 fixed bottom-2 shake-mobile z-50 right-2  md:hidden w-13 h-13 flex justify-center items-center bg-[#25D366] hover:bg-[#1ebc57] text-white p-3 rounded-full shadow-lg transition duration-300"
                title="WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />
            </a>

            {/* Call Button with mobile-only shake */}
            <a
                href="tel:+601124419414"
                className="order-2 fixed bottom-2 shake-mobile z-50 left-2 w-13 h-13 md:hidden flex justify-center items-center bg-[#00C4CC] hover:bg-[#00aeb5] text-white p-3 rounded-full shadow-lg transition duration-300 animate-shake sm:animate-none"
                title="Call Now"
            >
                <FaPhoneAlt className="text-xl" />
            </a>
        </>

    );
}
