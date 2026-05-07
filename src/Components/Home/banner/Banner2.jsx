import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerVideo from '../../../assets/videos/hotelVid.mp4';

// Import images for All Nature Villa
import b1_1 from '../../../assets/home/b7.png';
import b1_2 from '../../../assets/home/b1.png';
import b1_3 from '../../../assets/home/b2.png';

// Import images for Blue Diamond Villa
import b2_1 from '../../../assets/home/b3.png';
import b2_2 from '../../../assets/home/p1.png';
import b2_3 from '../../../assets/home/b4.png';

/**
 * Sub-component: The Cinematic Auto-Fader
 * Includes a 'delay' prop to offset the start time of the animation
 * Added 'links' prop to handle dynamic routing per villa
 */
const BeautifulSlider = ({ images, title, delay = 0, links }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // We use a timeout to create the offset (stagger)
    const startDelay = setTimeout(() => {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000); // 5 seconds per slide

      return () => clearInterval(slideInterval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [images.length, delay]);

  return (
    <div className="relative w-full  aspect-square sm:aspect-[4/3.1] rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] group">

      {/* --- Modern Frosted Glass Anchor Buttons --- */}
      <div className="absolute top-2 font-serif  left-1/2 -translate-x-1/2 z-30 flex items-center justify-center    px-4 py-2.5  w-auto whitespace-nowrap">
        <Link
          to={links.accommodation}
          className="text-[#00ffff] text-[11px] md:text-[20px] font-bold md:font-medium tracking-widest uppercase hover:text-white transition-colors px-2 sm:px-4 
          [text-shadow:_0_2px_10px_rgba(0,0,0,0.9),_0_0_4px_rgba(0,0,0,1)]"
        >
          Accommodation
        </Link>

        {/* Vertical Divider with a subtle drop shadow so it doesn't vanish */}
        <span className="w-[1px] h-4 bg-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"></span>

        <Link
          to={links.gallery}
          className="text-[#00ffff] text-[11px] md:text-[20px] font-bold md:font-medium tracking-widest uppercase hover:text-white transition-colors px-2 sm:px-4 
          [text-shadow:_0_2px_10px_rgba(0,0,0,0.9),_0_0_4px_rgba(0,0,0,1)]"
        >
          Gallery
        </Link>

        {/* Vertical Divider */}
        <span className="w-[1px] h-4 bg-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"></span>

        <Link
          to={links.calendar}
          className="text-[#00ffff] text-[11px] md:text-[20px] font-bold md:font-medium tracking-widest uppercase hover:text-white transition-colors px-2 sm:px-4 
          [text-shadow:_0_2px_10px_rgba(0,0,0,0.9),_0_0_4px_rgba(0,0,0,1)]"
        >
          Calendar
        </Link></div>

      {/* Cinematic Track */}
      <div className="relative w-full h-full">
        {images.map((img, index) => {
          const isActive = currentIndex === index;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-[4000ms] ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              <img
                src={img}
                alt={`${title} - View ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'
                  }`}
                style={{ willChange: 'transform, opacity' }}
              />
              {/* Soft Vignette for depth (Top and Bottom gradients) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
            </div>
          );
        })}
      </div>

      {/* Floating Title Overlay */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <div className="px-8 py-3 rounded-full  transform transition-transform duration-700">
          <h3 style={{ fontFamily: "'Futura PT', sans-serif" }} className="text-white md:text-[38px] text-[20px] font-[Sans-Serif] uppercase tracking-widest  text-center  [text-shadow:0_5px_6px_rgba(0,0,0,5)]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

/**
 * Main Banner2 Component
 */
const Banner2 = () => {
  const properties = [
    {
      id: 1,
      title: "All Nature Villa",
      images: [b1_1, b1_2, b1_3],
      delay: 0, // Starts immediately
      links: {
        accommodation: "#villas/all-nature",
        gallery: "#villas/all-nature/gallery",
        calendar: "#availability/all-nature"
      }
    },
    {
      id: 2,
      title: "Blue Diamond Villa",
      images: [b2_1, b2_2, b2_3],
      delay: 2500, // Starts halfway through the first slider's cycle (2.5s)
      links: {
        accommodation: "#villas/blue-diamond",
        gallery: "#villas/blue-diamond/gallery",
        calendar: "#availability/blue-diamond"
      }
    }
  ];

  return (
    <section className="py-25 lg:py-27 relative">
      <div className="max-w-8xl  px-4 sm:px-6 lg:px-2 relative z-10">

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3">
          {properties.map((property) => (
            <BeautifulSlider
              key={property.id}
              images={property.images}
              title={property.title}
              delay={property.delay}
              links={property.links} // Passing the unique links here
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Banner2;