import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Gallery = ({
    images = [],
    heroImage,
    subtitle = "A Look Inside",
    title = "All Nature Villa Gallery",
    heading = "Our Gallery"
}) => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Map the passed images array into our grid layout format
    const galleryImages = images.map((imgSrc, index) => {
        const actualNumber = index + 1;

        // Set grid sizes for the masonry look
        let gridClass = "col-span-1 row-span-1";
        if (actualNumber % 7 === 0) {
            gridClass = "md:col-span-2 md:row-span-2";
        } else if (actualNumber % 5 === 0) {
            gridClass = "md:col-span-2 row-span-1";
        } else if (actualNumber % 8 === 0) {
            gridClass = "col-span-1 row-span-2";
        }

        return {
            id: actualNumber,
            src: imgSrc,
            alt: `${title} View ${actualNumber}`,
            gridClass: gridClass
        };
    });

    // Lightbox navigation logic
    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const nextImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };



    const location = useLocation();


    useEffect(() => {
        // Check if the URL has a hash (like #gallery)
        if (location.hash) {
            // Remove the '#' to just get the word 'gallery'
            const targetId = location.hash.substring(1);

            // We use a tiny setTimeout to make sure React has completely 
            // finished drawing the page before we try to scroll
            setTimeout(() => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    useEffect(() => {
        const handleKeyDown = (e) => {

            if (lightboxIndex === null) return;

            if (e.key === "ArrowRight") {
                setLightboxIndex((prev) =>
                    prev === galleryImages.length - 1 ? 0 : prev + 1
                );
            }

            if (e.key === "ArrowLeft") {
                setLightboxIndex((prev) =>
                    prev === 0 ? galleryImages.length - 1 : prev - 1
                );
            }

            if (e.key === "Escape") {
                closeLightbox();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [lightboxIndex, galleryImages.length]);

    return (
        <main id='gallery' className="min-h-screen scroll-mt-20 ">


            <h1 className="text-3xl md:text-6xl font-serif italic pt-8 text-gray-700 leading-tight text-center">
                {heading}
            </h1>

            {/* === DYNAMIC MASONRY GRID === */}
            <section className="py-16 md:py-24 max-w-[1350px] mx-auto px-6 md:px-12 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 auto-rows-[150px] md:auto-rows-[300px] grid-flow-dense">
                    {galleryImages.map((img, index) => (
                        <div
                            key={img.id}
                            onClick={() => openLightbox(index)}
                            className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow cursor-pointer ${img.gridClass}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-gray-200"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-[#001f3f]/0 group-hover:bg-[#001f3f]/30 transition-colors duration-500 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                                    <ZoomIn className="w-5 h-5 text-[#001f3f]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* === FULL-SCREEN LIGHTBOX MODAL === */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[200] bg-black/55 backdrop-blur-md flex items-center justify-center animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 cursor-pointer right-6 md:top-10 md:right-10 z-50 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                        onClick={closeLightbox}
                    >
                        <X className="w-8 h-8" strokeWidth={1.5} />
                    </button>

                    {/* Left (Prev) Arrow */}
                    <button
                        className="absolute top-24 cursor-pointer left-6 md:top-1/2 md:-translate-y-1/2 md:left-10 z-50 p-3 bg-black/80 md:bg-white/20 hover:bg-black md:hover:bg-white/30 rounded-full text-white transition-colors"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
                    </button>

                    {/* Right (Next) Arrow */}
                    <button
                        className="absolute top-24 cursor-pointer right-6 md:top-1/2 md:-translate-y-1/2 md:right-10 z-50 p-3 bg-black/80 md:bg-white/20 hover:bg-black md:hover:bg-white/30 rounded-full text-white transition-colors"
                        onClick={nextImage}
                    >
                        <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
                    </button>

                    <div className="relative w-full max-w-5xl max-h-[85vh] px-4 md:px-0 flex items-center justify-center select-none">
                        <img
                            src={galleryImages[lightboxIndex].src}
                            alt={galleryImages[lightboxIndex].alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl mt-12 md:mt-0"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center px-4 md:px-0 text-white/80">

                            {/* Center */}
                            <span className="md:text-xl text-sm  tracking-wider text-center">
                                {galleryImages[lightboxIndex].alt}
                            </span>

                            {/* End / Right */}
                            <span className="absolute right-4 md:right-0 md:text-xl text-sm  tracking-widest">
                                {lightboxIndex + 1} / {galleryImages.length}
                            </span>

                        </div>
                    </div>

                </div>
            )}

        </main>
    );
};

export default Gallery;