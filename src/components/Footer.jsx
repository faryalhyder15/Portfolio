import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-200 text-gray-400 text-center py-6 border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Faryal Jafferi</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
