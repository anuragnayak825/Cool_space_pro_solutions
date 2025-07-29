import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaSnowflake, FaWrench, FaSmile, FaHome, FaHandshake } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";

const stats = [
  {
    icon: <FaSnowflake className="text-[120px] text-gray-200 absolute opacity-10" />,
    icon2: <FaHome size={28} className="text-white" />,
    number: 25,
    label: "Years Experience",
  },
  {
    icon: <FaWrench className="text-[120px] text-gray-200 absolute opacity-10" />,
    icon2: <FaUsersViewfinder size={28} className="text-white" />,
    number: 4760,
    label: "Happy Clients",
  },
  {
    icon: <FaSmile className="text-[120px] text-gray-200 absolute opacity-10" />,
    icon2: <FaHandshake size={28} className="text-white" />,
    number: 9032,
    label: "Handled Cases",
  },
];

const Counter = ({ number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000;
    const incrementTime = 30;
    const step = Math.ceil(end / (duration / incrementTime));
    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(counter);
  }, [number]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-4xl font-extrabold text-cyan-600 relative z-10"
    >
      {count}
    </motion.span>
  );
};

export default function CounterSection() {
  return (
    <div className="w-full bg-white py-20 px-4 text-center ">
      <h2 className="text-3xl md:text-4xl italic tracking-wide font-semibold mb-12">Numbers Speak</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-md bg-white">
            <div className="absolute -top-8 w-20 h-20 bg-white shadow-md border-b-2 border-[#00C4CC] flex justify-center items-center rounded-full">
              <div
                className="  w-10 h-10 object-contain filter invert-[40%] brightness-[0.7] contrast-[1.2] flex justify-center items-center"
              >{item?.icon2}</div >
            </div>
            <div className="relative w-full h-[120px] flex items-center justify-center">
              {item.icon}
              <Counter number={item.number} />
            </div>
            <p className="text-base md:text-lg text-gray-900 font-semibold italic tracking-wider  max-w-[250px] mx-auto">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
