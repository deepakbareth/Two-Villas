import React from 'react';

const HeroSlide = ({ slide, isActive }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slide.image}
          alt={`Logistics image ${slide.id}`}
          className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
            isActive ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-zinc-950/20" />
    </div>
  );
};

export default HeroSlide;