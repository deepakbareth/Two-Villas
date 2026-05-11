import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bannerVideo from '../../../assets/videos/hotelVid2.mp4';
import bannerVideo2 from '../../../assets/videos/hotelVid.mp4';
import verticleVid from '../../../assets/videos/verticleVid.mp4';
import { Play, Pause } from 'lucide-react';

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
 */
const BeautifulSlider = ({ images, title, delay = 0, links, videoSrc }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef(null);
    const isPlayingRef = useRef(isPlaying); // <-- NEW: Ref to track playing state for the interval

    // Keep the ref in sync with the state
    useEffect(() => {
        isPlayingRef.current = isPlaying;
    }, [isPlaying]);

    // useEffect(() => {                   // img chnaging logic
    //     // We use a timeout to create the offset (stagger)
    //     const startDelay = setTimeout(() => {
    //         const slideInterval = setInterval(() => {
    //             // Check the ref instead of the state so we don't have to reset the interval!
    //             if (!isPlayingRef.current) {
    //                 setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    //             }
    //         }, 5000); // 5 seconds per slide

    //         return () => clearInterval(slideInterval);
    //     }, delay);

    //     return () => clearTimeout(startDelay);
    // }, [images.length, delay]); // <-- FIXED: Removed isPlaying from dependencies!

    // Video Toggle Logic
    const toggleVideo = () => {
        if (isPlaying) {
            videoRef.current?.pause();
            setIsPlaying(false);
        } else {
            videoRef.current?.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="relative w-full aspect-square sm:aspect-[4/3.1] rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] group bg-transparent isolate transform-gpu">
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

            {/* --- Background Video Element --- */}
            <div className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <video
                    ref={videoRef}
                    src={videoSrc}
                    className="w-full h-full object-contain"
                    loop
                    muted
                    playsInline
                />
                {/* Soft Vignette to match image styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
            </div>

            {/* Cinematic Track */}
            <div className={`relative w-full h-full transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
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
            <div className="absolute bottom-3 left-0 right-0 flex justify-center z-20 pointer-events-none">
                <div className="px-8 py-3 rounded-full  transform transition-transform duration-700">
                    <h3 style={{ fontFamily: "'Futura PT', sans-serif" }} className="text-white md:text-[38px] text-[20px] font-[Sans-Serif] uppercase tracking-widest  text-center  [text-shadow:6px_5px_4px_rgba(0,0,0,5)]">
                        {title}
                    </h3>
                </div>
            </div>

            {/* --- Play/Pause Button (Inside Bottom Left Corner) --- */}
            <div className="absolute md:bottom-20 bottom-15 left-1/2 -translate-x-1/2 z-30">
                <button
                    onClick={toggleVideo}
                    // Removed fixed w-10 h-10. Added padding (px-4 py-2) and gap-2
                    className="px-4 py-2 md:px-5 md:py-2.5  flex items-center justify-center gap-2 text-white transition-colors  cursor-pointer"
                >
                    {isPlaying ? (
                        <>
                            <span
                                className="text-sm md:text-xl font-medium tracking-wide  hover:text-white/80   [text-shadow:6px_5px_4px_rgba(0,0,0,5)]">Pause</span>
                            <Pause fill="currentColor" stroke="none" className="md:w-6 md:h-6 w-5 h-5 drop-shadow-[6px_5px_4px_rgba(0,0,0,1)]" />                        </>
                    ) : (
                        <>
                            <span className="text-sm md:text-xl font-medium tracking-wide  hover:text-white/80   [text-shadow:0px_5px_4px_rgba(0,0,0,5)]">Play</span>
                            <Play fill="currentColor" stroke="none" className="md:w-6 md:h-6 w-5 h-5 drop-shadow-[0px_5px_4px_rgba(0,0,0,1)]" />                        </>
                    )}
                </button>
            </div>

        </div>
    );
};

/**
 * Main Hero Component
 */
const Hero = () => {
    const properties = [
        {
            id: 1,
            title: "All Nature Villa",
            images: [b1_1, b1_2, b1_3],
            video: bannerVideo, // Passed video here
            delay: 0, // Starts immediately
            links: {
                accommodation: "villas/all-nature",
                gallery: "villas/all-nature/#gallery",
                calendar: "#availability/all-nature"
            }
        },
        {
            id: 2,
            title: "Blue Diamond Villa",
            images: [b2_1, b2_2, b2_3],
            video: verticleVid, // Passed video here
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
                            videoSrc={property.video} // Passing the video prop down
                            delay={property.delay}
                            links={property.links} // Passing the unique links here
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Hero;