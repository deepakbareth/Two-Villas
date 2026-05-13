import React, { useState, useEffect, useRef } from 'react';
import {
    X,
    ChevronLeft,
    ChevronRight,
    ZoomIn,
    ZoomOut,
    Maximize,
    Minimize,
    LayoutGrid,
    Images
} from 'lucide-react';

// ==========================================
// EXPLICIT IMPORTS (Ensure paths are correct for your project)
// ==========================================
import img1 from "./../../../assets/all-nature-villa-img/1-IMG_20170429_081937.COR4.jpg";
import img2 from "./../../../assets/all-nature-villa-img/2-cor_081223 (3).jpg";
import img3 from "./../../../assets/all-nature-villa-img/3-2015-04-21 16.09.14.jpg";
import img4 from "./../../../assets/all-nature-villa-img/4-cor en win_080909.jpg";
import img5 from "./../../../assets/all-nature-villa-img/5-cor en win 2_080403.jpg";
import img6 from "./../../../assets/all-nature-villa-img/6-elegida cor_071743 (2).jpg";
import img7 from "./../../../assets/all-nature-villa-img/7-IMG_20200829_154232---COR.jpg";
import img8 from "./../../../assets/all-nature-villa-img/8-elegida cor_071423 .jpg";
import img9 from "./../../../assets/all-nature-villa-img/9-elegida cor 1_071256.jpg";
import img10 from "./../../../assets/all-nature-villa-img/10-IMG_20160413_190911 (1).jpg";
import img11 from "./../../../assets/all-nature-villa-img/11-ELEGIDA COR 2_200104.jpg";
import img12 from "./../../../assets/all-nature-villa-img/12-elegida cor_201019  (2).jpg";
import img13 from "./../../../assets/all-nature-villa-img/13-elegida1_084702.jpg";
import img14 from "./../../../assets/all-nature-villa-img/14-cor_080523.jpg";
import img15 from "./../../../assets/all-nature-villa-img/15-cor en win_080457 (1).jpg";
import img16 from "./../../../assets/all-nature-villa-img/16-cor en win -2_075855.jpg";
import img17 from "./../../../assets/all-nature-villa-img/17-elegida cor_080830 (2).jpg";
import img18 from "./../../../assets/all-nature-villa-img/18-elegida cor_081244  (2).jpg";
import img19 from "./../../../assets/all-nature-villa-img/19-Dormitorio-elegida-cor.jpg";
import img20 from "./../../../assets/all-nature-villa-img/20-DSC01152-1-cor.jpg";
import img21 from "./../../../assets/all-nature-villa-img/21-IMG_20160407_191517.jpg";
import img22 from "./../../../assets/all-nature-villa-img/22-ELEGIDA-115339-F.jpg";
import img23 from "./../../../assets/all-nature-villa-img/22-IMG_20160407_191733 Cor.jpg";
import img24 from "./../../../assets/all-nature-villa-img/23-ELEGIDA_120011-F.jpg";
import img25 from "./../../../assets/all-nature-villa-img/24-IMG_20160407_192529 (2).jpg";
import img26 from "./../../../assets/all-nature-villa-img/25-BAÑO VERDE -ELEGIDA 21.11.14.jpg";
import img27 from "./../../../assets/all-nature-villa-img/27-elegida_181648.jpg";
import img28 from "./../../../assets/all-nature-villa-img/28-IMG_20170311_182143-cor.jpg";
import img29 from "./../../../assets/all-nature-villa-img/29-IMG_20170311_182158-cor.jpg";
import img30 from "./../../../assets/all-nature-villa-img/30-IMG_20170311_181848-cor.jpg";
import img31 from "./../../../assets/all-nature-villa-img/31-IMG_20170311_181359.jpg";
import img32 from "./../../../assets/all-nature-villa-img/32-cor en HL_131758.jpg";
import img33 from "./../../../assets/all-nature-villa-img/33-Entrada jardin cor.jpg";
import img34 from "./../../../assets/all-nature-villa-img/34-IMG_20160415_072523 (2).jpg";
import img35 from "./../../../assets/all-nature-villa-img/35-IMG_20160415_115228 (2).jpg";
import img36 from "./../../../assets/all-nature-villa-img/36-IMG_20160415_141636 (2).jpg";
import img37 from "./../../../assets/all-nature-villa-img/37-IMG_20160415_140521 (3).jpg";
import img38 from "./../../../assets/all-nature-villa-img/38-En Web1781.jpg";
import img39 from "./../../../assets/all-nature-villa-img/39-cor en 2016-DSC01732.jpg";
import img40 from "./../../../assets/all-nature-villa-img/40-IMG_20160531_092644 (2).jpg";
import img41 from "./../../../assets/all-nature-villa-img/41-IMG_20160531_092601 (2).jpg";
import img42 from "./../../../assets/all-nature-villa-img/42-IMG_20160415_070015 (2).jpg";
import img43 from "./../../../assets/all-nature-villa-img/43-IMG_20160415_071809 (2).jpg";
import { useLocation } from 'react-router-dom';

const imageAssets = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43
];

const bgImage = imageAssets[0];

const GalleryPage = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);

    // Swipe State
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const thumbnailContainerRef = useRef(null);
    const lightboxRef = useRef(null);

    const galleryImages = imageAssets.map((importedImg, index) => ({
        id: index + 1,
        src: importedImg,
        alt: `Capitol Casa View ${index + 1}`
    }));

    // --- LIGHTBOX CONTROLS ---
    const openLightbox = (index) => {
        setLightboxIndex(index);
        setZoomLevel(1);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
        setZoomLevel(1);
        document.body.style.overflow = 'auto';
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => { });
        }
    };

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        setZoomLevel(1);
        setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        setZoomLevel(1);
        setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    // --- ZOOM CONTROLS ---
    const handleZoomIn = (e) => {
        e.stopPropagation();
        setZoomLevel((prev) => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));
    };

    // --- FULLSCREEN LOGIC ---
    const toggleFullscreen = async (e) => {
        if (e) e.stopPropagation();
        try {
            if (!document.fullscreenElement) {
                await lightboxRef.current?.requestFullscreen();
                setIsFullscreen(true);
            } else {
                await document.exitFullscreen();
                setIsFullscreen(false);
            }
        } catch (err) {
            console.warn("Fullscreen toggle failed:", err);
        }
    };

    useEffect(() => {
        const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    // --- AUTO-SCROLL THUMBNAILS ---
    useEffect(() => {
        if (lightboxIndex !== null && thumbnailContainerRef.current) {
            const activeThumbnail = thumbnailContainerRef.current.children[lightboxIndex];
            if (activeThumbnail) {
                activeThumbnail.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [lightboxIndex]);

    // --- KEYBOARD NAVIGATION ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'ArrowRight') nextImage();
            else if (e.key === 'ArrowLeft') prevImage();
            else if (e.key === 'Escape') closeLightbox();
            else if (e.key === '+' || e.key === '=') handleZoomIn(e);
            else if (e.key === '-' || e.key === '_') handleZoomOut(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

    // --- SWIPE LOGIC FOR MOBILE ---
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextImage();
        } else if (isRightSwipe) {
            prevImage();
        }
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

    return (
        <main id="gallery" className="min-h-screen  pt-24  scroll-mt-16">





            {/* === OPTIMIZED 5-IMAGE PROFESSIONAL COLLAGE GRID === */}
            <section className="pb-16 md:pb-24  max-w-[1400px] mx-auto px-4 md:px-8">
                <h2 className="text-4xl text-center md:text-6xl font-serif text-[#17818A] pb-10 ">
                    Our Gallery
                </h2>
                {/* Responsive Grid Container 
            Mobile: 2 columns, 4 rows (Main takes top half, others take bottom)
            Desktop: 4 columns, 2 rows (Main takes left half, others take right)
        */}
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-1.5 md:gap-3 h-[55vh] md:h-[60vh] min-h-[400px] max-h-[600px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg relative">

                    {/* 1. MAIN LARGE IMAGE (Top on Mobile, Left on Desktop) */}
                    <div
                        className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden bg-gray-200"
                        onClick={() => openLightbox(0)}
                    >
                        <img
                            src={galleryImages[0].src}
                            alt={galleryImages[0].alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* 2. TOP RIGHT SMALL IMAGE */}
                    <div
                        className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden bg-gray-200"
                        onClick={() => openLightbox(1)}
                    >
                        <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* 3. TOP FAR RIGHT SMALL IMAGE */}
                    <div
                        className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden bg-gray-200"
                        onClick={() => openLightbox(2)}
                    >
                        <img src={galleryImages[2].src} alt={galleryImages[2].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* 4. BOTTOM RIGHT SMALL IMAGE */}
                    <div
                        className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden bg-gray-200"
                        onClick={() => openLightbox(3)}
                    >
                        <img src={galleryImages[3].src} alt={galleryImages[3].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* 5. BOTTOM FAR RIGHT IMAGE (With "See More" Overlay for both Mobile and Desktop) */}
                    <div
                        className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden bg-gray-200"
                        onClick={() => openLightbox(4)}
                    >
                        <img src={galleryImages[4].src} alt={galleryImages[4].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                        {/* The Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center backdrop-blur-[1px]">
                            <div className="flex flex-col items-center justify-center text-white">
                                <Images className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 opacity-90" />
                                <span className="font-semibold text-sm md:text-xl tracking-wide text-center leading-tight">
                                    <span className="hidden md:inline">View All<br /></span>
                                    +{galleryImages.length - 5}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* === MODERN FULL-SCREEN LIGHTBOX MODAL === */}
            {lightboxIndex !== null && (
                <div
                    ref={lightboxRef}
                    className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex flex-col transition-opacity duration-300 text-white select-none"
                >

                    {/* Top Toolbar */}
                    <div className="flex justify-between items-center px-4 md:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-50 absolute top-0 w-full">

                        {/* Left Side: Counter */}
                        <div className="text-gray-300 text-xs md:text-sm font-medium tracking-widest bg-black/40 px-3 py-1 rounded-md backdrop-blur-md">
                            {lightboxIndex + 1} / {galleryImages.length}
                        </div>

                        {/* Right Side: Action Icons */}
                        <div className="flex items-center gap-3 sm:gap-6 text-gray-300">

                            <button onClick={closeLightbox} className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer" title="Grid View">
                                <LayoutGrid className="w-5 h-5" />
                                <span className="hidden sm:inline text-sm font-medium">Grid</span>
                            </button>

                            <button onClick={handleZoomOut} className="hover:text-white transition-colors cursor-pointer hidden sm:block" title="Zoom Out">
                                <ZoomOut className="w-5 h-5" />
                            </button>

                            <button onClick={handleZoomIn} className="hover:text-white transition-colors cursor-pointer hidden sm:block" title="Zoom In">
                                <ZoomIn className="w-5 h-5" />
                            </button>

                            <button onClick={toggleFullscreen} className="hover:text-white transition-colors cursor-pointer hidden sm:block" title="Toggle Fullscreen">
                                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                            </button>

                            <div className="w-[1px] h-6 bg-gray-700 mx-1 hidden sm:block"></div>

                            <button onClick={closeLightbox} className="hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors cursor-pointer" title="Close">
                                <X className="w-6 h-6" strokeWidth={2} />
                            </button>

                        </div>
                    </div>

                    {/* Main Image Container (With Swipe Listeners) */}
                    <div
                        className="flex-1 relative flex items-center justify-center w-full h-full pt-16 pb-2 overflow-hidden"
                        onClick={closeLightbox}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >

                        {/* Left Nav Arrow */}
                        <button
                            className="absolute bottom-6 left-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-6 z-50 p-2 md:p-4 text-gray-400 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all cursor-pointer"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" strokeWidth={1.5} />
                        </button>

                        {/* Current Image (with Zoom) */}
                        <img
                            src={galleryImages[lightboxIndex].src}
                            alt={galleryImages[lightboxIndex].alt}
                            style={{ transform: `scale(${zoomLevel})` }}
                            className="max-w-[90vw] max-h-[75vh] md:max-h-[80vh] object-contain select-none drop-shadow-2xl transition-transform duration-300 ease-in-out cursor-grab active:cursor-grabbing"
                            onClick={(e) => e.stopPropagation()}
                            draggable={false}
                        />

                        {/* Right Nav Arrow */}
                        <button
                            className="absolute bottom-6 right-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-6 z-50 p-2 md:p-4 text-gray-400 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all cursor-pointer"
                            onClick={nextImage}
                        >
                            <ChevronRight className="w-6 h-6 md:w-10 md:h-10" strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Bottom Thumbnail Carousel */}
                    <div
                        className="h-24 sm:h-28 w-full bg-black/40 backdrop-blur-md border-t border-white/10 flex items-center px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex gap-2 min-w-max mx-auto h-[70%]" ref={thumbnailContainerRef}>
                            {galleryImages.map((img, idx) => (
                                <div
                                    key={img.id}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setZoomLevel(1);
                                        setLightboxIndex(idx);
                                    }}
                                    className={`relative h-full aspect-[4/3] rounded-md overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 ${idx === lightboxIndex
                                        ? 'border-[2px] border-white opacity-100 scale-100'
                                        : 'opacity-40 hover:opacity-100 scale-95'
                                        }`}
                                >
                                    <img
                                        src={img.src}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}

        </main>
    );
};

export default GalleryPage;