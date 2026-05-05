import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/home/websiteLogo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setMobileDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/twovillas/' },
    {
      name: 'Villas',
      subItems: [
        { name: 'All Nature Villa', path: '/twovillas/#villas/all-nature' },
        { name: 'Blue Diamond Villa', path: '/twovillas/#villas/blue-diamond' },
      ],
    },
    {
      name: 'Services',
      // subItems: [
      //   { name: 'Services1', path: '/twovillas/#Services1' },
      //   { name: 'Services2', path: '/twovillas/#Services2' },
      //   { name: 'Services3', path: '/twovillas/#Services3' },
      // ],
    },
    {
      name: 'Availability',
      subItems: [
        { name: 'All Nature Villa', path: '/twovillas/#availability/all-nature' },
        { name: 'Blue Diamond Villa', path: '/twovillas/#availability/blue-diamond' },
      ],
    },
    {
      name: 'Reviews',
      subItems: [
        { name: 'All Nature Villa', path: '/twovillas/#reviews/all-nature' },
        { name: 'Blue Diamond Villa', path: '/twovillas/#reviews/blue-diamond' },
      ],
    },
    { name: 'Activities', path: '/twovillas/#activities' },
    { name: 'Contact', path: '/twovillas/#contact' },
    { name: 'Book Now', path: '/twovillas/#book-now' }, // This will be rendered as a button
  ];

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-5 md:top-7 left-1/2  -translate-x-1/2 w-[95%] md:w-[85%] z-50 font-serif transition-all rounded-[50px] duration-500 ease-in-out border-b ${scrolled
        ? 'bg-[#F0F8FF]/85 backdrop-blur-xl border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-1'
        : 'bg-[#F0F8FF]/50 backdrop-blur-md border-transparent py-1'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-2">
        <div className="flex justify-between items-center h-15 md:h-15 transition-all duration-500">

          {/* 1. Logo Section */}
          <div className="relative md:top-[-18px] top-[-10px] left-[-20px] md:left-[-10px] flex-shrink-0">
            <NavLink to="/twovillas/" className="flex items-center group">
              <img
                src={logo}
                alt="Two Villas Logo"
                className="h-15 md:h-22 w-auto  rounded-2xl object-contain "
              />
            </NavLink>
          </div>

          {/* 2. Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => {
              // Special Rendering for "Book Now" Button
              if (item.name === 'Book Now') {
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="ml-4 bg-yellow-400 text-black px-8 py-3 rounded-full  text-[20px] shadow-lg hover:bg-yellow-500  transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    {item.name}
                  </NavLink>
                );
              }

              return (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <button className="flex items-center gap-1.5 text-[20px]  text-[#0a2342] hover:text-[#17818A] transition-colors py-4">
                      {item.name}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-180 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className="text-[20px]  text-[#0a2342] hover:text-[#17818A] transition-colors py-4"
                    >
                      {item.name}
                    </NavLink>
                  )}

                  {item.subItems && (
                    <div className="absolute top-full left-1/2  -translate-x-1/2 min-w-[240px] pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 py-2">
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className={({ isActive }) =>
                              `block px-6 py-3 text-[20px] transition-all text-gray-600 hover:text-[#17818A]`
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 3. Mobile Hamburger */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col items-center justify-center h-12 w-12 rounded-full bg-white/60 text-[#0a2342] shadow-sm hover:bg-white transition-colors"
            >
              <span className={`block w-5 h-[2px] bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-[2px] bg-current transition-all my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-[2px] bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out absolute w-full left-0 top-full mt-2 bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl ${isOpen ? 'max-h-[85vh] border border-gray-100' : 'max-h-0'}`}>
        <div className="p-6 space-y-2 overflow-y-auto max-h-[75vh]">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(item.name)}
                    className="flex w-full items-center justify-between py-4 px-4 text-xl font-semibold text-[#0a2342]"
                  >
                    {item.name}
                    <svg className={`h-5 w-5 transition-transform ${mobileDropdown === item.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`pl-6 space-y-1 transition-all ${mobileDropdown === item.name ? 'max-h-96 pb-4' : 'max-h-0 overflow-hidden'}`}>
                    {item.subItems.map(sub => (
                      <NavLink key={sub.name} to={sub.path} className="block py-3 text-xl text-gray-900">{sub.name}</NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={`block py-4 px-4 text-xl font-semibold ${item.name === 'Book Now'
                    ? 'bg-[#17818A] text-white text-center rounded-2xl mt-4 shadow-md'
                    : 'text-[#0a2342]'
                    }`}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;