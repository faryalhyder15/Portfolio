import React, { useState } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <a href="#" className='text-3xl font-bold text-white flex items-center space-x-1'>
            <span>Faryal</span>
            <span className='text-purple'>Jafferi</span>
            <div className='w-3 h-3 bg-purple rounded-full ml-2'></div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-10'>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='relative text-white/80 transition duration-300 hover:text-purple group'
            >
              <span>{item}</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <div className='md:hidden'>
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(false)} className='text-2xl cursor-pointer text-white' />
          ) : (
            <FaBars onClick={() => setShowMenu(true)} className='text-2xl cursor-pointer text-white' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-6 text-center justify-center'>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              onClick={() => setShowMenu(false)}
              href={`#${item.toLowerCase()}`}
              className='text-white/80 text-xl transition duration-300 hover:text-purple'
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
