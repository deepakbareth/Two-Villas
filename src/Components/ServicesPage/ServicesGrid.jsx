import React, { useState } from 'react';
import { PlaneTakeoff, Compass, ShoppingCart, Apple, UtensilsCrossed, Sparkles, Music, Star, CheckCircle, X } from 'lucide-react';

// --- IMAGE IMPORTS ---

// 1. Transport
import van42 from '../../assets/service2_Page/mercedes-eqv-300-alquiler-luxevan-42.jpg';
import van8 from '../../assets/service2_Page/mercedes-eqv-300-alquiler-luxevan-8.jpg';
import van6 from '../../assets/service2_Page/mercedes-eqv-300-alquiler-luxevan-6.jpg';

// 2. Online Shopping (Grocery Stocking)
import nevera1 from '../../assets/service2_Page/Nevera 1.1 calma.jpg';
import nevera2 from '../../assets/service2_Page/Nevera 2 calma.jpg';
import foodDraw from '../../assets/service2_Page/Food draw-Blue.jpg';

// 3. Supermarket Shopping
import armarios from '../../assets/service2_Page/Armarios Nat.jpg';

// 4. Food
import paella1 from '../../assets/service2_Page/paellas 1.jpg';
import paellaFuego from '../../assets/service2_Page/paella al fuego.jpg';
import paellaFuego2 from '../../assets/service2_Page/Paella-al fuego.jpg';
import bravas from '../../assets/service2_Page/patatas-bravas.jpg';
import croquetas from '../../assets/service2_Page/croquetas-tapas-tipicas-espanolas.jpg';
import jamon from '../../assets/service2_Page/jamon-iberico-.jpg';
import tortilla from '../../assets/service2_Page/tortilla-de-patata.jpg';

// 5. Private Chef
import chef2 from '../../assets/service2_Page/service_Page/Chef 2.jpg';
import chef3 from '../../assets/service2_Page/service_Page/Chef 3.jpg';
import chef4 from '../../assets/service2_Page/service_Page/Chef 4.jpg';
import chef5 from '../../assets/service2_Page/service_Page/Chef 5.jpg';
import grill from '../../assets/service2_Page/flaming-grill-fun-stockcake.jpg';

// 6. Live Music (Note: double spaces between "Coro" and "rociero" to match local files)
import coro1 from '../../assets/service2_Page/Coro  rociero 1.jpg';
import coro2 from '../../assets/service2_Page/Coro  rociero 2.1.jpg';
import coro3 from '../../assets/service2_Page/Coro  rociero 2.2.jpg';
import coro4 from '../../assets/service2_Page/Coro  rociero 3.jpg';
import coro5 from '../../assets/service2_Page/Coro  rociero 4.jpg';
import guitar from '../../assets/service2_Page/Guitarrista.webp';

const ServicesGrid = () => {
    // --- Services Schema according to Client Sketch ---
    const services = [
        {
            id: 'transport',
            number: '1',
            title: 'Transport',
            coverImage: van42,
            icon: PlaneTakeoff,
            description: "Premium airport shuttles and personalized journey bookings during your stay.",
            bullets: [
                "Airport Shuttle: Stress-free pickup and transfer to the villa.",
                "In-Stay Journey Bookings: Plan journeys in advance and have it all pre-booked."
            ],
            gallery: [van42, van8, van6],
            galleryLabels: ["Luxury Exterior", "Premium Interior Cabin", "Spacious Trunk & Luggage"]
        },
        {
            id: 'food',
            number: '2',
            title: 'Food',
            coverImage: paella1,
            icon: UtensilsCrossed,
            description: "Authentic, freshly made Paellas and premium Spanish tapas served directly at your villa.",
            bullets: [
                "Paellas & Tapas Ordering: Fancy hot paella or traditional tapas? Just order with one day's notice.",
                "Authentic Recipes: Handcrafted using fresh, local ingredients over traditional wood fire."
            ],
            gallery: [paella1, paellaFuego, bravas, croquetas, jamon, tortilla],
            galleryLabels: ["Seafood Paella", "Wood-Fire Cooking", "Patatas Bravas", "Spanish Croquettes", "Ibérico Cured Ham", "Potato Tortilla"]
        },
        {
            id: 'private-chef',
            number: '3',
            title: 'Private Chef',
            coverImage: chef2,
            icon: Sparkles,
            description: "Experience fine dining curated and served in your villa by professional private chefs.",
            bullets: [
                "Private Chef: Experience an extensive variety of food served hot by our chefs.",
                "Bespoke Menus: Tailored to dietary requirements, celebratory themes, or local culinary styles."
            ],
            gallery: [chef2, chef3, chef4, chef5, grill],
            galleryLabels: ["Plating Dishes", "Kitchen Preparation", "Chef Service", "Fresh Presentation", "Live Outdoor Grilling"]
        },
        {
            id: 'online-shopping',
            number: '4',
            title: 'Online Shopping',
            coverImage: nevera1,
            icon: ShoppingCart,
            description: "Have all your grocery shopping delivered and stocked at the villa before your arrival.",
            bullets: [
                "Pre-arrival Stocking: Arrive to a fully loaded refrigerator and pantry.",
                "Customized Grocery Lists: Select your favorite beverages, snacks, and fresh ingredients."
            ],
            gallery: [nevera1, nevera2, foodDraw],
            galleryLabels: ["Stocked Refrigerator", "Organized Layout", "Premium Food Drawer"]
        },
        {
            id: 'supermarket',
            number: '5',
            title: 'Supermarket Shopping',
            coverImage: nevera2,
            icon: Apple,
            description: "Guided or coordinated trips to the nearest high-end supermarkets.",
            bullets: [
                "Supermarket Service: We take you to the nearest supermarket for grocery shopping after check-in, or at any time during your stay.",
                "Local Market Guidance: Navigate the best local cheese, wine, and ham options."
            ],
            gallery: [nevera2, foodDraw, armarios],
            galleryLabels: ["Guided Shopping Setup", "Fresh Ingredients", "Villa Storage Areas"]
        },

        {
            id: 'live-music',
            number: '6',
            title: 'Live Music',
            coverImage: coro1,
            icon: Music,
            description: "Immerse yourself in traditional music, dance, and authentic Spanish entertainment.",
            bullets: [
                "Flamenco Evenings: Enjoy live music and dance.",
                "Flor de Romero: Learn traditional Flamenco dancing with our Coro Rociero group."
            ],
            gallery: [coro1, coro2, coro3, guitar, coro4, coro5],
            galleryLabels: ["Coro Rociero Group", "Flamenco Singers", "Vocal Duet", "Acoustic Classical Guitar", "Group Choir Performance", "Live Flamenco Performance"]
        }
    ];

    // Selection and Hover states for Desktop/Mobile UX
    const [selectedServiceId, setSelectedServiceId] = useState('transport');
    const [hoveredServiceId, setHoveredServiceId] = useState(null);
    const [activeLightboxImage, setActiveLightboxImage] = useState(null);
    const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

    const activeServiceId = hoveredServiceId || selectedServiceId;
    const activeService = services.find(s => s.id === activeServiceId) || services[0];

    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-10">

            {/* Header section matching style of home pages */}
            <div className="text-center mb-16">
                <span className="text-[#c4a661] uppercase tracking-[0.3em] text-sm font-semibold mb-3 block">
                    Exclusive Experiences
                </span>
                <h1 className="text-4xl md:text-6xl font-serif text-[#17818A] tracking-tight">
                    Services We Provide
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed mt-4 font-light">
                    Elevate your stay at the villas. Simply click on any service card to view details, descriptions, and a photo gallery.
                </p>
            </div>

            {/* Split Screen Interactive Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start relative">

                {/* LEFT SIDE: Grid of 6 Service Cards */}
                <div
                    onMouseLeave={() => setHoveredServiceId(null)}
                    className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        const isHovered = hoveredServiceId === service.id;
                        const isSelected = selectedServiceId === service.id;
                        const isActive = isHovered || (hoveredServiceId === null && isSelected);

                        return (
                            <div
                                key={service.id}
                                // onMouseEnter={() => setHoveredServiceId(service.id)}
                                onClick={() => {
                                    setSelectedServiceId(service.id);
                                    setIsMobileModalOpen(true);
                                }}
                                className={`group relative rounded-[1rem] overflow-hidden aspect-[4/3] shadow-lg border-2 transition-all duration-500 cursor-pointer ${isActive
                                    ? 'border-[#17818A] scale-[1.03] shadow-2xl'
                                    : 'border-transparent hover:border-[#17818A]/30'
                                    }`}
                            >
                                {/* Background Image */}
                                <img
                                    src={service.coverImage}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
                                />

                                {/* Dark Gradient Overlay */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none"></div> */}

                                {/* Floating Card Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">

                                    {/* Number / Icon Tag */}
                                    <div className="flex justify-between items-start">
                                        <span className="text-[#c4a661] font-mono text-lg font-bold bg-black/40 backdrop-blur-md w-9 h-9 rounded-full flex items-center justify-center border border-white/10">
                                            {service.number}
                                        </span>
                                        <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center border border-white/10 group-hover:bg-[#17818A] group-hover:text-white transition-colors duration-300">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Title & Underline */}
                                    <div>
                                        <h3 className="text-white text-xl md:text-2xl text-center font-semibold tracking-wide [text-shadow:_0_2px_10px_rgba(0,0,0,0.9),_0_0_4px_rgba(0,0,0,1)]">
                                            {service.title}
                                        </h3>
                                        <div className={`h-[2px] bg-[#c4a661] transition-all duration-500 mt-2 ${isHovered ? 'w-16' : 'w-0 group-hover:w-16'
                                            }`}></div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* RIGHT SIDE: Dynamic Detail Panel (The Client's "Hover Window within the same page" - Hidden on Mobile) */}
                <div className="hidden lg:block w-full lg:w-[45%] lg:sticky lg:top-32">
                    <div className="bg-[#F0F8FF]/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col min-h-[500px] transition-all duration-500 hover:shadow-xl">

                        {/* Header Tag */}
                        <div className="flex items-center justify-between pb-6 border-b border-gray-200/80 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#17818A] text-white flex items-center justify-center shadow-md">
                                    <activeService.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#c4a661] text-xs font-semibold uppercase tracking-widest block">
                                        Service Detail
                                    </span>
                                    <h4 className="text-2xl font-serif text-[#0a2342] leading-tight">
                                        {activeService.title}
                                    </h4>
                                </div>
                            </div>
                            <span className="text-gray-400 font-mono text-3xl font-light">
                                0{activeService.number}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">
                            {activeService.description}
                        </p>

                        {/* Bullet Details */}
                        <div className="space-y-4 mb-8">
                            {activeService.bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#17818A] mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 leading-relaxed font-light text-[16px]">
                                        {bullet}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Gallery Section */}
                        <div className="mt-auto border-t border-gray-200/80 pt-6">
                            <h5 className="text-[#0a2342] font-serif text-lg mb-4 flex items-center gap-2">
                                <Star className="w-4 h-4 text-[#c4a661] fill-[#c4a661]" /> Related Gallery (Tap to enlarge)
                            </h5>

                            {/* Grid of gallery assets */}
                            <div className="grid grid-cols-3 gap-3">
                                {activeService.gallery.map((imgUrl, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveLightboxImage(imgUrl)}
                                        className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-[#F4F3EC] shadow-sm border border-white hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
                                    >
                                        <img
                                            src={imgUrl}
                                            alt={activeService.galleryLabels[index] || "Gallery image"}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Mobile Detail Modal (visible only on mobile devices) */}
            {isMobileModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80] flex items-center justify-center p-4 lg:hidden">
                    <div className="bg-white rounded-[2rem] w-full max-w-lg max-h-[85vh] overflow-y-auto p-6 relative flex flex-col shadow-2xl border border-gray-100">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMobileModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Header */}
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-100 mb-5 mr-8">
                            <div className="w-10 h-10 rounded-xl bg-[#17818A] text-white flex items-center justify-center shadow-md">
                                <activeService.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[#c4a661] text-[10px] font-semibold uppercase tracking-widest block">
                                    Service Detail
                                </span>
                                <h4 className="text-xl font-serif text-[#0a2342] leading-tight">
                                    {activeService.title}
                                </h4>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-[15px] font-light leading-relaxed mb-5">
                            {activeService.description}
                        </p>

                        {/* Bullet Details */}
                        <div className="space-y-3 mb-6">
                            {activeService.bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-start gap-2.5">
                                    <CheckCircle className="w-4 h-4 text-[#17818A] mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 text-[14px] leading-relaxed font-light">
                                        {bullet}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Gallery Section */}
                        <div className="border-t border-gray-100 pt-5 mt-auto">
                            <h5 className="text-[#0a2342] font-serif text-sm mb-3 flex items-center gap-1.5">
                                <Star className="w-3.5 h-3.5 text-[#c4a661] fill-[#c4a661]" /> Tap to view gallery
                            </h5>

                            {/* Grid of gallery assets */}
                            <div className="grid grid-cols-3 gap-2">
                                {activeService.gallery.map((imgUrl, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveLightboxImage(imgUrl)}
                                        className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#F4F3EC] shadow-sm border border-gray-100 cursor-pointer"
                                    >
                                        <img
                                            src={imgUrl}
                                            alt={activeService.galleryLabels[index] || "Gallery image"}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lightbox Modal */}
            {activeLightboxImage && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center cursor-zoom-out"
                    onClick={() => setActiveLightboxImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-[#c4a661] w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
                        onClick={() => setActiveLightboxImage(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <img
                        src={activeLightboxImage}
                        alt="Enlarged view"
                        className="max-w-[90%] max-h-[85vh] rounded-xl object-contain shadow-2xl transition-transform duration-300"
                    />
                </div>
            )}

        </div>
    );
};

export default ServicesGrid;
