import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

const installationData = [
  {
    title: '1.0hp Installation',
    price: 'RM 255/unit',
    includes: ['Wires', 'Outdoor Bracket', "10' Copper Pipe", 'Drain Pipe'],
    addons: [
      { name: 'Switch', price: 'RM 55 each' },
      { name: 'Wires, Copper, Drain Pipe', price: 'RM 23/ft' },
      { name: 'Extra Wiring', price: 'RM 11/ft' },
      { name: '2x3 Casing', price: 'RM 15/ft' },
      { name: 'Wire Casing', price: 'RM 4.50/ft' },
    ],
  },
  {
    title: '1.5hp Installation',
    price: 'RM 285/unit',
    includes: ['Wires', 'Outdoor Bracket', "10' Copper Pipe", 'Drain Pipe'],
    addons: [
      { name: 'Switch', price: 'RM 55 each' },
      { name: 'Wires, Copper, Drain Pipe', price: 'RM 25/ft' },
      { name: 'Extra Wiring', price: 'RM 11/ft' },
      { name: '2x3 Casing', price: 'RM 15/ft' },
      { name: 'Wire Casing', price: 'RM 4.50/ft' },
    ],
  },
  {
    title: '2.0hp Installation',
    price: 'RM 385/unit',
    includes: ['Wires', 'Outdoor Bracket', "10' Copper Pipe", 'Drain Pipe'],
    addons: [
      { name: 'Switch', price: 'RM 55 each' },
      { name: 'Wires, Copper, Drain Pipe', price: 'RM 27/ft' },
      { name: 'Extra Wiring', price: 'RM 13/ft' },
      { name: '2x3 Casing', price: 'RM 15/ft' },
      { name: 'Wire Casing', price: 'RM 4.50/ft' },
    ],
  },
  {
    title: '2.5hp Installation',
    price: 'RM 255/unit',
    includes: ['Wires', 'Outdoor Bracket', "10' Copper Pipe", 'Drain Pipe'],
    addons: [
      { name: 'Switch', price: 'RM 55 each' },
      { name: 'Wires, Copper, Drain Pipe', price: 'RM 30/ft' },
      { name: 'Extra Wiring', price: 'RM 15/ft' },
      { name: '2x3 Casing', price: 'RM 15/ft' },
      { name: 'Wire Casing', price: 'RM 4.50/ft' },
    ],
  },
];

const Card = ({ title, price, includes, addons }) => (
  <motion.div
    whileHover={{ y: -6, }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-xl  shadow-xl overflow-hidden border border-gray-200 flex flex-col group"
  >
    {/* Gradient Header */}
    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-5 text-white text-center">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-2 bg-white text-blue-600 rounded-full px-4 py-1 inline-block text-sm font-semibold shadow-md">
        {price}
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col justify-between">
      {/* Includes Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3">
          <FaCheckCircle className="text-green-500" />
          What's Included
        </div>
        <ul className=" flex flex-wrap space-x-3.5 items-center ">
          {includes.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-gray-600 px-2 py-1 rounded-md border shadow-sm bg-white border-gray-200 text-lg"
            >
              <FaCheckCircle className="text-green-400 text-sm" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Add-ons Section */}
      <div>
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3">
          <FaPlusCircle className="text-blue-500" />
          Optional Add-ons
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          {addons.map((addon, idx) => (
            <li
              key={idx}
              className="flex justify-between border-b border-gray-100 py-1"
            >
              <span>{addon.name}</span>
              <span className="font-semibold text-gray-800">{addon.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const InstallationPricingCards = () => {
  return (
    <div className=" py-16 px-4 md:px-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {installationData.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default InstallationPricingCards;
