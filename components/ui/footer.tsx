// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="container mx-auto px-6 py-4">
        <h3 className="text-lg font-bold">WellChecked</h3>
        <div className="text-center text-sm mt-5">
          © {new Date().getFullYear()} WellChecked. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;