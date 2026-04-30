import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/home/websiteLogo.png';

const Navbar = () => {
  // Add state to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Define your routes
  const navItems = [
    { name: 'Home', path: '/twovillas/' },
    { name: 'About Us', path: '/twovillas/#abou-us' },
    { name: 'Villas', path: '/twovillas/#villas' },
    { name: 'Gallery', path: '/twovillas/#gallery' },
        { name: 'Reviews', path: '/twovillas/#reviews' },
  ];


  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-[#40e0d0]/40 backdrop-blur-xl  shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Left: Logo & Brand Name */}
          <NavLink to="/twovillas/" className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="Two Villas Logo"
              className="h-40 w-30 object-contain rounded-full"
            />
          </NavLink>

          {/* 2. Center: Desktop Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  ` text-lg transition-colors duration-300 ${
                    isActive 
                      ? 'text-gray-900 font-bold' 
                      : 'text-black hover:text-gray-800' 
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* 3. Right: Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+34622818061"
              className="flex items-center gap-2 px-6 py-2.5 bg-yellow-500 border border-yellow-500 rounded-full text-black hover:bg-yellow-500 transition-all duration-300 shadow-sm font-semibold"
            >
              <span>34622818061</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>

          {/* 4. Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-yellow-400 bg-white text-black hover:bg-yellow-100 transition-colors  shadow-sm"
              aria-expanded={isOpen}
            >
              {/* If menu is open, show X, else show Hamburger lines */}
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Mobile Dropdown Menu (Smoothed out!) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#FAF9F6] border-t border-gray-200">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium shadow-sm ${
                  isActive 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'text-black hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-4">
             <a
                href="tel:+34622818061"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-yellow-400 rounded-full text-black font-semibold shadow-sm"
              >
                <span>34622818061</span>
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;