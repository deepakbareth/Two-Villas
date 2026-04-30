    import React, { useEffect, useState } from "react";
    import b1 from '../../../assets/home/b1.png';
    import b2 from '../../../assets/home/b2.png';
    import b3 from '../../../assets/home/b3.png';
    import b4 from '../../../assets/home/b4.png';
    import b5 from '../../../assets/home/b5.png';
    import b6 from '../../../assets/home/b6.png';

    const images = [b1, b2, b3, b4, b5, b6];

    const Attractions = () => {
    const [current, setCurrent] = useState(0); // active center image
    const [isPaused, setIsPaused] = useState(false);

    // 1. Auto-Slide Logic (Pauses on hover)
    useEffect(() => {
        // if (isPaused) return;
        const interval = setInterval(() => {
        nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [current, isPaused]);

    // 2. Keyboard Navigation for better UX
    useEffect(() => {
        const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Calculates exact positioning for the V-shape layout
    const getCardStyle = (index) => {
        const total = images.length;
        let offset = index - current;

        // Handles the infinite circular looping
        if (offset > Math.floor(total / 2)) offset -= total;
        if (offset < -Math.floor(total / 2)) offset += total;

        // Base variables
        let translateX = 0;
        let translateY = 0;
        let scale = 1;
        let zIndex = 0;
        let opacity = 1;

        // Desktop V-Shape Math
        if (offset === 0) {
        // Center
        translateX = 0;
        translateY = 0;
        scale = 1;
        zIndex = 30;
        } else if (offset === -1) {
        // Mid Left
        translateX = -120; // Move left
        translateY = 10;   // Move down slightly (creates the V shape)
        scale = 0.8;
        zIndex = 20;
        } else if (offset === 1) {
        // Mid Right
        translateX = 120;
        translateY = 10;
        scale = 0.8;
        zIndex = 20;
        } else if (offset === -2) {
        // Far Left
        translateX = -220;
        translateY = 20;
        scale = 0.6;
        zIndex = 10;
        } else if (offset === 2) {
        // Far Right
        translateX = 220;
        translateY = 20;
        scale = 0.6;
        zIndex = 10;
        } else {
        // Hidden Image (6th image waits in the back)
        translateX = 0;
        translateY = 30;
        scale = 0.4;
        zIndex = 0;
        opacity = 0; 
        }

        return {
        transform: `translate(calc(-50% + ${translateX}%), calc(-50% + ${translateY}%)) scale(${scale})`,
        zIndex,
        opacity,
        };
    };

    return (
        <div className="w-full mt-20 md:mt-15  mb-20 overflow-hidden font-serif  py-0">
        
  <h2 className="text-4xl md:text-6xl text-center pb-10  text-[#17818A]">
            Attractions
          </h2>
        {/* Slider Container */}
        <div 
            className="relative w-full h-[400px] md:h-[550px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {images.map((img, index) => {
            const style = getCardStyle(index);
            const isCenter = index === current;

            return (
                <div
                key={index}
                onClick={() => setCurrent(index)} // Clicking any card brings it to center
                className="absolute top-1/2 left-1/2 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl shadow-2xl overflow-hidden bg-white border border-gray-100"
                style={{
                    ...style,
                    width: 'clamp(260px, 25vw, 340px)', // Responsive width
                    height: 'clamp(360px, 35vw, 480px)', // Responsive height
                }}
                >
                <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                />
                
                {/* Overlay to dim non-active images */}
                <div 
                    className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                    isCenter ? "opacity-0" : "opacity-20 hover:opacity-10"
                    }`}
                />
                </div>
            );
            })}
        </div>

        {/* Modern Controls */}
        <div className="flex flex-col items-center gap-6 mt-8">
            
            {/* Navigation Buttons & Dots */}
            <div className="flex items-center gap-8">
            <button
                onClick={prevSlide}
             className="h-12 w-12 rounded-full border-2 border-yellow-400 bg-white text-black flex items-center justify-center hover:bg-yellow-400 cursor-pointer transition-all duration-300 shadow-md"  >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
                {images.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                   className={`h-2.5 rounded-full transition-all duration-500 shadow-sm ${
                  idx === current ? "bg-yellow-400 w-8" : "bg-gray-300 w-2.5 hover:bg-yellow-200"
                }`}
                />
                ))}
            </div>

            <button
                onClick={nextSlide}
             className="h-12 w-12 rounded-full border-2 border-yellow-400 bg-white text-black flex items-center justify-center hover:bg-yellow-400 cursor-pointer transition-all duration-300 shadow-md" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            </div>
        </div>
        
        </div>
    );
    };

    export default Attractions;