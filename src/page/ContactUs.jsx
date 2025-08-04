import React, { useEffect } from 'react';
import Layout from '../Layout/Layout';
import { FaLocationDot, FaRightLong, FaPhone } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import QuotationForm from '../QuotationForm';

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      {/* Hero Section */}
      <div className="w-full h-[60vh] bg-[url('https://homefort.like-themes.com/wp-content/uploads/2021/10/ineer_HEADER_01.jpg')] bg-center bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-[#000000b0] flex flex-col justify-center items-center text-white text-center space-y-4 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">Contact us</h1>
          <div className="flex items-center gap-3 text-lg sm:text-xl">
            Home <FaRightLong className="text-sm sm:text-base" /> Contact
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="w-full flex flex-wrap gap-6 justify-center items-center px-4 sm:px-6 md:px-10 py-10">
        {/* Location */}
        <div className="w-full sm:w-[300px] flex flex-col items-center px-6 py-6 space-y-4 shadow-md rounded-xl bg-white border-e-0 sm:border-e border-dotted">
          <div className="w-20 h-20 flex justify-center items-center rounded-full shadow-md border-b-2 border-[#00C4CC] bg-white">
            <FaLocationDot className="text-3xl text-blue-800 animate-bounce" />
          </div>
          <h2 className="text-2xl font-semibold italic tracking-wider">Location</h2>
          <p className="text-base font-medium text-gray-600 text-center">
            Kuala Lumpur, Federal Territory of Kuala Lumpur.
          </p>
        </div>

        {/* Phone */}
        <div className="w-full sm:w-[300px] flex flex-col items-center px-6 py-6 space-y-4 shadow-md rounded-xl bg-white border-e-0 sm:border-e border-dotted">
          <div className="w-20 h-20 flex justify-center items-center rounded-full shadow-md border-b-2 border-[#00C4CC] bg-white">
            <FaPhone className="text-3xl text-blue-800 animate-bounce" />
          </div>
          <h2 className="text-2xl font-semibold italic tracking-wider">Phone</h2>
          <p className="text-base font-medium text-gray-600 text-center">
            +60 11-2441 9414
          </p>
        </div>

        {/* Email */}
        <div className="w-full sm:w-[300px] flex flex-col items-center px-6 py-6 space-y-4 shadow-md rounded-xl bg-white">
          <div className="w-20 h-20 flex justify-center items-center rounded-full shadow-md border-b-2 border-[#00C4CC] bg-white">
            <MdOutlineMailOutline className="text-3xl text-blue-800 animate-bounce" />
          </div>
          <h2 className="text-2xl font-semibold italic tracking-wider">Email</h2>
          <p className="text-base font-medium text-gray-600 text-center">
            exmaple@gmail.com
          </p>
        </div>
      </div>

      {/* Map & Form Section */}
      <div className="w-full flex flex-col-reverse items-center md:flex-row gap-6 px-4 sm:px-6 md:px-10 pb-10">
        {/* Map */}
        <div className="w-full md:w-[60%] h-[300px] md:h-[500px] rounded-md overflow-hidden shadow-xl">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41990.40327797317!2d101.65983348453491!3d3.200265957443784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc486b4e03a0f7%3A0x8ce6290627998cd1!2sPutra%20Majestik!5e0!3m2!1sen!2sin!4v1753426760329!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form */}
        <div className="w-full md:w-[40%]">
          <QuotationForm />
        </div>
      </div>
    </Layout>
  );
}
