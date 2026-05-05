import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
 */
const BeautifulSlider = ({ images, title, delay = 0 }) => {
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
    <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] group">

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
              {/* Soft Vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
            </div>
          );
        })}
      </div>

      {/* Floating Title Overlay */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <div className="bg-black/30 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full shadow-2xl transform transition-transform duration-700 ">
          <h3 className="text-white md:text-[22px] text-[16px] font-serif tracking-widest uppercase text-center">
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
    },
    {
      id: 2,
      title: "The Blue Diamond Villa",
      images: [b2_1, b2_2, b2_3],
      delay: 2500, // Starts halfway through the first slider's cycle (2.5s)
    }
  ];

  return (
    <section className="py-30 lg:py-35 relative ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {properties.map((property) => (
            <BeautifulSlider
              key={property.id}
              images={property.images}
              title={property.title}
              delay={property.delay}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Banner2;