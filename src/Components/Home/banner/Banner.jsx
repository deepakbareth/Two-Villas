import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSlide from './slide';
import b3 from '../../../assets/home/b1.png';
import b2 from '../../../assets/home/b5.png';
import b1 from '../../../assets/home/b6.png';

const bannerData = [
  { id: 1, image: b3 },
  { id: 2, image: b1 },
  { id: 3, image: b2 }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Optimized nextSlide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

useEffect(() => {
    // If user is hovering, don't start the timer
    // if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clears the interval when component unmounts, 
    // when isHovered changes, OR when the slide changes manually.
    return () => clearInterval(timer);
    
  // Add currentSlide right here 👇
  }, [isHovered, currentSlide, nextSlide]);

  return (
    <div 
      className="relative w-full h-100  md:h-screen mt-10 md:mt-0  bg-zinc-950 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {bannerData.map((slide, index) => (
        <HeroSlide 
          key={slide.id} 
          slide={slide} 
          isActive={currentSlide === index} 
        />
      ))}

      {/* Controls Container */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-6 px-2 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl pointer-events-auto">
        
        <button 
          onClick={prevSlide}
          className="p-1 rounded-full bg-white/10 hover:bg-yellow-500 backdrop-blur-md border border-white/20 hover:border-yellow-500 text-white hover:text-slate-900 transition-all duration-300 shadow-md group active:scale-95"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <div className="flex items-center justify-center gap-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative h-2 flex items-center justify-center cursor-pointer"
            >
              <div 
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  currentSlide === index 
                    ? 'w-10 bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.9)]' 
                    : 'w-5 bg-white/40 group-hover:bg-yellow-500/50'
                }`}
              />
            </button>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-1 rounded-full bg-white/10 hover:bg-yellow-500 backdrop-blur-md border border-white/20 hover:border-yellow-500 text-white hover:text-slate-900 transition-all duration-300 shadow-md group active:scale-95"
        >
          <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950/60 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Banner;