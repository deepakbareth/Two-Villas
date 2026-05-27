import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VillaSpaces2 = ({ images = [] }) => {
    const scrollRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const autoplayRef = useRef(null);
    const scrollEndRef = useRef(null);
    const lastIndexRef = useRef(0);
    const isTransitioningRef = useRef(false);

    const N = images.length;

    // ONLY 3 COPIES (better performance)
    const extendedImages = [...images, ...images, ...images];

    // INITIAL POSITION
    useEffect(() => {
        if (!scrollRef.current || N === 0) return;

        const initSlider = () => {
            const container = scrollRef.current;

            if (!container?.children?.length) return;

            const itemWidth =
                container.children[0].offsetWidth + 12;

            container.scrollLeft = itemWidth * N;
        };

        const timeout = setTimeout(initSlider, 50);

        return () => clearTimeout(timeout);
    }, [N]);

    // SCROLL FUNCTION
    const scroll = useCallback((direction) => {
        // if (!scrollRef.current) return;
        // if (isTransitioningRef.current) return;

        const container = scrollRef.current;

        const itemWidth =
            container.children[0]?.offsetWidth + 12;

        if (!itemWidth) return;

        isTransitioningRef.current = true;

        container.scrollBy({
            left:
                direction === 'left'
                    ? -itemWidth
                    : itemWidth,
            behavior: 'smooth',
        });

        clearTimeout(scrollEndRef.current);

        scrollEndRef.current = setTimeout(() => {
            isTransitioningRef.current = false;
        }, 500);
    }, []);

    // DOT CLICK
    const scrollToDot = useCallback(
        (targetIndex) => {
            if (!scrollRef.current) return;
            if (isTransitioningRef.current) return;

            const container = scrollRef.current;

            const itemWidth =
                container.children[0]?.offsetWidth + 12;

            if (!itemWidth) return;

            isTransitioningRef.current = true;

            setActiveIndex(targetIndex);
            lastIndexRef.current = targetIndex;

            container.scrollTo({
                left: (N + targetIndex) * itemWidth,
                behavior: 'smooth',
            });

            clearTimeout(scrollEndRef.current);

            scrollEndRef.current = setTimeout(() => {
                isTransitioningRef.current = false;
            }, 500);
        },
        [N]
    );

    // SCROLL HANDLER
    const handleScroll = useCallback(() => {
        if (!scrollRef.current || N === 0) return;

        const container = scrollRef.current;

        const itemWidth =
            container.children[0]?.offsetWidth + 12;

        if (!itemWidth) return;

        const scrollLeft = container.scrollLeft;

        // SMOOTHER INDEX
        const currentIndex = Math.floor(
            (scrollLeft + itemWidth / 2) / itemWidth
        );

        const realIndex =
            ((currentIndex % N) + N) % N;

        // UPDATE ONLY WHEN NEEDED
        if (lastIndexRef.current !== realIndex) {
            lastIndexRef.current = realIndex;
            setActiveIndex(realIndex);
        }

        // TELEPORT AFTER SCROLL
        clearTimeout(scrollEndRef.current);

        scrollEndRef.current = setTimeout(() => {
            if (!scrollRef.current) return;

            const currentScroll =
                scrollRef.current.scrollLeft;

            const currentItemIndex = Math.floor(
                currentScroll / itemWidth
            );

            // RIGHT SIDE
            if (currentItemIndex >= N * 2) {
                scrollRef.current.scrollLeft =
                    currentScroll - N * itemWidth;
            }

            // LEFT SIDE
            else if (currentItemIndex <= N - 1) {
                scrollRef.current.scrollLeft =
                    currentScroll + N * itemWidth;
            }
        }, 80);
    }, [N]);

    // AUTOPLAY
    useEffect(() => {
        if (N === 0) return;
        if (isHovering) return;

        autoplayRef.current = setInterval(() => {
            scroll('right');
        }, 3500);

        return () => {
            clearInterval(autoplayRef.current);
        };
    }, [N, isHovering, scroll]);

    // CLEANUP
    useEffect(() => {
        return () => {
            clearTimeout(scrollEndRef.current);
            clearInterval(autoplayRef.current);
        };
    }, []);

    if (!images.length) return null;

    return (
        <section className="py-10 md:py-20 bg-white overflow-hidden">
            <div
                className="max-w-[1400px] mx-auto px-4 relative"
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
                        className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow-md transition-all duration-300 hidden md:block opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="w-7 h-7 text-[#17818A]" />
                    </button>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow-md transition-all duration-300 hidden md:block opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="w-7 h-7 text-[#17818A]" />
                    </button>

                    {/* IMAGES */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                        style={{
                            WebkitOverflowScrolling: 'touch',
                            scrollSnapType: 'x mandatory',
                        }}
                    >
                        {extendedImages.map((img, index) => (
                            <div
                                key={index}
                                className="min-w-[90vw] sm:min-w-[48%] lg:min-w-[32.5%] snap-start"
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-gray-100 group h-full">
                                    <img
                                        src={img.src || img}
                                        alt={
                                            img.alt ||
                                            `Villa ${index + 1}`
                                        }
                                        className="w-full h-[260px] md:h-[300px] object-cover will-change-transform"
                                        draggable="false"
                                        loading="lazy"
                                        decoding="async"
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

                {/* DOTS */}
                <div className="flex justify-center items-center gap-3 mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToDot(index)}
                            aria-label={`Go to image ${index + 1}`}
                            className={`rounded-full transition-all duration-300 ${activeIndex === index
                                ? 'w-2 h-2 bg-[#d6a528] shadow-lg'
                                : 'w-2 h-2 bg-[#0a2342]/40 hover:bg-[#0a2342]/60 active:scale-110'
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