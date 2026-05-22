import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VillaSpaces2 = ({ images = [] }) => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // 1. Create the infinite track by tripling the array
    const extendedImages = [...images, ...images, ...images, ...images, ...images, ...images];
    const N = images.length;

    // 2. Start the slider in the "middle" set on initial load
    useEffect(() => {
        const initPosition = () => {
            if (scrollRef.current && N > 0) {
                const itemWidth = scrollRef.current.children[0].offsetWidth + 12;
                // Jump instantly to the middle set
                scrollRef.current.scrollTo({ left: itemWidth * N, behavior: 'auto' });
            }
        };
        // Tiny timeout ensures DOM is fully rendered before calculating widths
        const timeoutId = setTimeout(initPosition, 100);
        return () => clearTimeout(timeoutId);
    }, [N]);

    // 3. MANUAL SCROLL LOGIC
    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const itemWidth = scrollRef.current.children[0].offsetWidth + 12;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -itemWidth : itemWidth,
            behavior: 'smooth',
        });
    };

    // 4. CLICKABLE DOTS LOGIC
    const scrollToDot = (targetIndex) => {
        if (!scrollRef.current) return;
        const itemWidth = scrollRef.current.children[0].offsetWidth + 12;

        // Always scroll to the selected dot inside the MIDDLE set (N + targetIndex)
        scrollRef.current.scrollTo({
            left: (N + targetIndex) * itemWidth,
            behavior: 'smooth'
        });
        setActiveIndex(targetIndex);
    };

    // 5. THE MAGIC TELEPORT LOGIC
    const handleScroll = () => {
        if (!scrollRef.current || N === 0) return;

        const container = scrollRef.current;
        const itemWidth = container.children[0].offsetWidth + 12;
        const scrollLeft = container.scrollLeft;

        // Calculate where we are
        const currentIndex = Math.round(scrollLeft / itemWidth);

        // Update active dot based on the original array size
        setActiveIndex(currentIndex % N);

        // SILENT TELEPORT: Trigger when we scroll completely out of the middle block
        // We use Math.abs to ensure the snap animation is finished before teleporting
        if (Math.abs(scrollLeft - currentIndex * itemWidth) < 5) {

            // If we scrolled into the 3rd set, jump silently back to the 2nd set
            if (currentIndex >= N * 2) {
                container.style.scrollSnapType = 'none'; // Prevent snap jitter
                container.scrollTo({ left: scrollLeft - (N * itemWidth), behavior: 'auto' });
                requestAnimationFrame(() => container.style.scrollSnapType = 'x mandatory');
            }
            // If we scrolled backwards into the 1st set, jump silently forward to the 2nd set
            else if (currentIndex <= 0) {
                container.style.scrollSnapType = 'none';
                container.scrollTo({ left: scrollLeft + (N * itemWidth), behavior: 'auto' });
                requestAnimationFrame(() => container.style.scrollSnapType = 'x mandatory');
            }
        }
    };

    // 6. AUTO-PLAY SLIDESHOW (Pauses on hover!)
    useEffect(() => {
        if (N === 0 || isHovering) return;

        const timer = setInterval(() => {
            scroll('right');
        }, 3000);

        return () => clearInterval(timer);
    }, [N, isHovering]); // Restarts timer if hover state changes

    if (!images.length) return null;

    return (
        <section className="py-10 md:py-20 bg-white overflow-hidden">
            <div
                className="max-w-[1400px] mx-auto px-4 relative"
                // Pause the automatic scrolling if the user puts their mouse over the section
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >

                {/* HEADER */}
                <h2 className="text-4xl text-center mb-10 md:mb-10 md:text-6xl font-serif text-[#17818A]">
                    Spaces
                </h2>

                {/* SLIDER */}
                <div className="relative group">

                    {/* LEFT BUTTON */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:scale-110 transition-all duration-300 hidden md:block opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="w-7 h-7 text-[#17818A]" />
                    </button>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:scale-110 transition-all duration-300 hidden md:block opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="w-7 h-7 text-[#17818A]" />
                    </button>

                    {/* IMAGES */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        // NOTE: Removed 'scroll-smooth' from here! We handle smooth scrolling via Javascript now.
                        className="flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                    >
                        {/* We map over extendedImages so the slider appears infinite */}
                        {extendedImages.map((img, index) => (
                            <div
                                key={index}
                                className="min-w-[90vw] sm:min-w-[48%] lg:min-w-[32.5%] snap-start"
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-gray-100 group">
                                    <img
                                        src={img.src || img}
                                        alt={img.alt || `Villa ${index + 1}`}
                                        className="w-full h-[260px] md:h-[300px] object-cover transition"
                                        draggable="false"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                    {img.title && (
                                        <div className="absolute bottom-0 left-0 w-full p-4 md:p-5">
                                            <h3 className="text-white text-xl md:text-2xl text-center font-semibold tracking-wide">
                                                {img.title}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FUNCTIONAL DOTS RESTORED */}
                <div className="flex justify-center items-center gap-3 mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToDot(index)}
                            aria-label={`Go to image ${index + 1}`}
                            className={`rounded-full transition-all duration-300 ${activeIndex === index
                                ? 'w-3 h-3 bg-[#d6a528]'
                                : 'w-2 h-2 bg-[#0a2342]/40 hover:bg-[#0a2342]/60'
                                }`}
                        />
                    ))}
                </div>

            </div>

            {/* HIDE SCROLLBAR */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `,
                }}
            />
        </section>
    );
};

export default VillaSpaces2;