import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import logo from '../../assets/home/websiteLogo4.png';

const Footer = () => {
  return (
    <footer className="bg-[#111827] pt-10 md:pt-15 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* 1. Logo Column */}
          <div className="flex flex-col items-center justify-center">
            <Link to='/twovillas/'>
              <img
                src={logo}
                alt="Two Villas Logo"
                className="h-32 p-3  object-contain drop-shadow-lg rounded-xl bg-[linear-gradient(0.25turn,#f8b46c,#ebf8e1,#71cef6)]"
              // Note: 'brightness-0 invert' makes a black logo white for the dark background. 
              // Remove those 2 classes if your logo is already white/transparent!
              />
            </Link>
          </div>

          {/* 2. Quick Links Column */}
          <div className="max-w-md"> {/* Added a max-width to keep the grid tight */}
            <h3 className="text-2xl font-serif text-[#17818A] relative pb-4 mb-6 inline-block">
              Quick Links
              {/* Yellow Accent Line */}
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-yellow-400"></span>
            </h3>

            {/* Changed to a 2-column grid on small screens and up */}
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              <li>
                <Link to="/twovillas/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/twovillas/#villas" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-light">
                  Villas
                </Link>
              </li>
              <li>
                <Link to="/twovillas/#services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/twovillas/#availability" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-light">
                  Availability
                </Link>
              </li>
              <li>
                <Link to="/twovillas/#reviews" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-light">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/twovillas/#activities" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-light">
                  Activities
                </Link>
              </li>

            </ul>
          </div>

          {/* 3. Contact Us Column */}
          <div>
            <h3 className="text-2xl font-serif text-[#17818A] relative pb-4 mb-6 inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-yellow-400"></span>
            </h3>
            <ul className="space-y-4 text-gray-300 font-light leading-relaxed">
              <li>
                <span className="font-semibold text-white">Phone:</span> <a href="tel:34622818061" className="hover:text-yellow-400 transition-colors">+34 622 818 061</a>
              </li>
              <li>
                <span className="font-semibold text-white">Email:</span> albertosanchez591@gmail.com
              </li>
              <li>
                <span className="font-semibold text-white">Location:</span> Valencia, Spain
              </li>
            </ul>
          </div>

          {/* 4. Book With Confidence Column */}
          <div>
            <h3 className="text-2xl font-serif text-[#17818A] relative pb-4 mb-6 inline-block">
              Book With Confidence
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-yellow-400"></span>
            </h3>
            <p className="text-gray-300 font-light leading-relaxed mb-8">
              Save on service fees by booking directly through our secure platform.
            </p>
            <button
              className="bg-yellow-500 font-serif text-black px-8 py-3.5  text-xl tracking-widest  rounded-full hover:bg-yellow-500 hover:shadow-lg transition-all duration-300"
            >
              Book  Now
            </button>

            {/* <h3 style={{ fontFamily: "'Futura PT', sans-serif" }} className="text-black md:text-[28px] text-[20px] bg-white font-[Sans-Serif] uppercase tracking-widest  text-center  ">
              PREMIUM VILLAS
            </h3> */}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light">
          <p>
            &copy; {new Date().getFullYear()} Premium Villas. All Rights Reserved.
          </p>
          <p className="tracking-wide">
            Powered By | <a href="https://premiumbusinesswebsites.com/" target='_blank' className='text-blue-500'>premiumbusinesswebsites</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;