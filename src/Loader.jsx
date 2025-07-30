// components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white z-[1000]">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="ml-4 text-blue-600 font-medium">Loading...</p>
    </div>
  );
}
