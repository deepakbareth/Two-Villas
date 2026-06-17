import React, { useState } from 'react';
import { Building, PawPrint, Fish, Store, Palette, Flame, Waves, Mountain, Ship, Star, CheckCircle, X } from 'lucide-react';

// --- IMAGE IMPORTS ---

// 1. City of Arts and Science
// import arts1 from '../../assets/activities_img/01.jpg';
import arts2 from '../../assets/activities_img/44-img_02401-F.jpg';
import arts3 from '../../assets/activities_img/46-Museo_Príncipe_Felipe,_COR-F.jpg';
import arts4 from '../../assets/activities_img/47-Ágora-COR-F.jpg';
import arts5 from '../../assets/activities_img/48-Palacio_de_las_Artes_Reina_Sofía-2-COR--F.jpg';
import arts6 from '../../assets/activities_img/97cc81_56134e3ca3484ae38a37253e8b6234e3~mv2.jpg';
import arts7 from '../../assets/activities_img/Humbracle.JPG';

// 2. Biopark
import bio1 from '../../assets/activities_img/Bioparc1.jpg';
import bio2 from '../../assets/activities_img/Bioparc2.jpg';
import bio3 from '../../assets/activities_img/Bioparc3.jpg';
import bio4 from '../../assets/activities_img/Bioparc5.jpg';
import bio5 from '../../assets/activities_img/entradas-biopark-fuengirola-6.jpg';
import bio6 from '../../assets/activities_img/flamingoes.jpg';
import bio7 from '../../assets/activities_img/Captura.JPG';
import bio8 from '../../assets/activities_img/Captura1.JPG';
// import bio9 from '../../assets/activities_img/Captura_2.JPG';
import bio10 from '../../assets/activities_img/157651257418.jpg';


// 3. Oceanographic
import ocean1 from '../../assets/activities_img/L\'Oceanografic_(Valencia,_Spain)_01.jpg';
import ocean2 from '../../assets/activities_img/250221-rest-submarino-oceanografic-mustiguillo.jpg';
import ocean3 from '../../assets/activities_img/41896____oceanografic_nina_6732.jpg';
import ocean4 from '../../assets/activities_img/Captura medusa.JPG';
// import ocean5 from '../../assets/activities_img/157651257418.jpg';
import ocean5 from '../../assets/activities_img/01.jpg';
import ocean6 from '../../assets/activities_img/Captura2.JPG';

// 4. Central Market
import market1 from '../../assets/activities_img/Mercado central.jpg';
import market2 from '../../assets/activities_img/Mercado central FRUTA.jpg';
import market3 from '../../assets/activities_img/Mercado central-Techo.jpg';
import market4 from '../../assets/activities_img/Mercado1.jpg';
import market5 from '../../assets/activities_img/mercado-central-valencia1.jpg';
import market6 from '../../assets/activities_img/mercado-central-valencia-entrada-1.jpg';

// 5. Saint Nicholas Church
import church1 from '../../assets/activities_img/Capilla sixtina de Vlc 1.JPG';
import church2 from '../../assets/activities_img/Capilla sixtina de Vlc 2.JPG';
import church3 from '../../assets/activities_img/Capilla sixtina de Vlc 3.JPG';

// 6. Las Fallas
import fallas1 from '../../assets/activities_img/Fallas_Valencia 1.jpg';
import fallas2 from '../../assets/activities_img/Fallas-2026-blog_900x600.jpg';
import fallas3 from '../../assets/activities_img/Cremá 1.JPG';
import fallas4 from '../../assets/activities_img/Nit del foc.JPG';
import fallas5 from '../../assets/activities_img/Ofrenda.JPG';
import fallas6 from '../../assets/activities_img/Captura 2.JPG';
import fallas7 from '../../assets/activities_img/Captura 3.JPG';
import fallas8 from '../../assets/activities_img/Captura 6.JPG';
import fallas9 from '../../assets/activities_img/Captura_1.JPG';

// 7. Albufera Lake (Trailing space in paella1 file matches local folder)
import lake1 from '../../assets/activities_img/Albufera 1.JPG';
import lake2 from '../../assets/activities_img/Albufera 3.JPG';
import lake3 from '../../assets/activities_img/Albufera 6.JPG';
import lake4 from '../../assets/activities_img/Albufera 11.JPG';
import lake5 from '../../assets/activities_img/Albufera paella 2.JPG';
import lake6 from '../../assets/activities_img/Albufera paella1 .JPG';

// 8. San José Coves (Trailing space matches cueva filenames)
import cave1 from '../../assets/activities_img/Cueva 1 .jpg';
import cave2 from '../../assets/activities_img/Cueva 2 .jpg';
import cave3 from '../../assets/activities_img/Cueva 3 .jpg';
import cave4 from '../../assets/activities_img/Cueva 4 .jpg';
import cave5 from '../../assets/activities_img/Cueva 5.jpg';
import cave6 from '../../assets/activities_img/Cueva 7.jpg';

// 9. Boat Trips
import boat1 from '../../assets/activities_img/catamaran-gandia-1.jpg';
import boat2 from '../../assets/activities_img/catamaran-gandia-2.jpg';
import boat3 from '../../assets/activities_img/catamaran-gandia-3.jpg';
import boat4 from '../../assets/activities_img/FIESTA-EN-CATAMARAN.jpg';
import boat5 from '../../assets/activities_img/Captura 2_1.JPG';
import boat6 from '../../assets/activities_img/Captura3.JPG';

const Activities = () => {
    // --- 9 Sightseeing Schema based on client specs ---
    const activities = [
        {
            id: 'arts-science',
            number: '1',
            title: 'City of Arts & Science',
            coverImage: arts2,
            icon: Building,
            description: "Calatrava, our internationally known architect. Explore breathtaking modern architecture, open-air gardens, and cultural complexes.",
            bullets: [
                "Calatrava Masterpiece: Marvel at the futuristic science museum and theater dome.",
                "L'Umbracle: Walk along the beautiful open-air landscaped walk with local flora.",
                "Staggering Design: An iconic landmark of Spain."
            ],
            gallery: [arts2, arts3, arts4, arts5, arts6, arts7],
            galleryLabels: ["Featured Hemisfèric", "Museum View", "Príncipe Felipe Museum", "Ágora Structure", "Palacio de las Artes", "L'Umbracle Walkway", "L'Umbracle Gardens"]
        },
        {
            id: 'central-market',
            number: '2',
            title: 'Central Market',
            coverImage: market1,
            icon: Store,
            description: "Best food! Explore one of the largest active fresh food markets in Europe, housed in a masterpiece of modernist architecture.",
            bullets: [
                "Modernist Architecture: Marvel at the spectacular central stained-glass dome and iron structure.",
                "Fresh Produce: Browse hundreds of stalls selling jamón, fresh seafood, fruits, and local olives.",
                "Gastronomy Center: The heart of Valencia's daily food culture."
            ],
            gallery: [market1, market2, market3, market4, market5, market6],
            galleryLabels: ["Historic Marketplace", "Fresh Fruit Stalls", "Modernist Stained Dome", "Gourmet Selection", "Fresh Olives & Tapas", "Entrance Portal"]
        },
        {
            id: 'saint-nicholas',
            number: '3',
            title: 'Saint Nicholas Church',
            coverImage: church1,
            icon: Palette,
            description: "The Valencian's Sistine Chapel. Appreciate spectacular religious art and breathtaking Baroque frescoes covering every inch of the vaulted ceiling.",
            bullets: [
                "Sistine Chapel of Valencia: Renowned for its stunning painted frescoes.",
                "Baroque Grandeur: A historical marvel combining Gothic architecture with Baroque decoration.",
                "Religious Masterpiece: Fully restored to its historical brilliance."
            ],
            gallery: [church1, church2, church3],
            galleryLabels: ["Vaulted Ceiling Frescoes", "Altar & Baroque Detail", "Painted Archways"]
        },

        {
            id: 'las-fallas',
            number: '4',
            title: 'Las Fallas',
            coverImage: fallas1,
            icon: Flame,
            description: "The big week. Experience Valencia's world-famous festival of fire, art, gunpowder, and traditional street celebrations.",
            bullets: [
                "Fallas Monuments: Explore massive, satirical paper-mâché sculptures built on streets.",
                "Nit del Foc: Enjoy spectacular midnight fireworks displays illuminating the sky.",
                "La Cremà: Watch the dramatic burning of monuments marking the festival's finale."
            ],
            gallery: [fallas1, fallas2, fallas3, fallas4, fallas5, fallas6, fallas7, fallas8, fallas9],
            galleryLabels: ["Fallas Sculptures", "Fallas Festival Monumets", "La Cremà Burning", "Nit del Foc Fireworks", "Flower Offering parade", "Parade Details", "Giant Street Monumets", "Traditional Costumes", "Street Fireworks"]
        },
        {
            id: 'albufera-lake',
            number: '5',
            title: 'Albufera Lake',
            coverImage: lake1,
            icon: Waves,
            description: "Boat trips and paella meals on South Valencia lake. Relax in a freshwater lagoon and estuary home to unique bird species and traditional fishing houses.",
            bullets: [
                "Scenic Boat Trips: Cruise the peaceful waters in a traditional handmade wooden boat.",
                "Paella Birthplace: Dine on authentic paella cooked over wood-fire at local restaurants.",
                "Breathtaking Sunsets: Famous for producing some of the most beautiful sunsets in Spain."
            ],
            gallery: [lake1, lake2, lake3, lake4, lake5, lake6],
            galleryLabels: ["Albufera Port View", "Wooden Boat Ride", "Lagoon Sunset", "Birdwatching Dock", "Paella Dining", "Traditional Woodpaella"]
        },
        {
            id: 'biopark',
            number: '6',
            title: 'Biopark',
            coverImage: bio1,
            icon: PawPrint,
            description: "Largest Zoo in Europe. Experience a zoological park designed with the concept of zoo-immersion, surrounding you with natural habitats.",
            bullets: [
                "Zoo Immersion: Walk through replicates of the African Savannah, Madagascar, and wetlands.",
                "Diverse Wildlife: Spot lions, giraffes, gorillas, elephants, and flamingoes without visible barriers.",
                "Eco-Conscious Travel: Dedicated to conservation and species preservation."
            ],
            gallery: [bio1, bio2, bio3, bio4, bio5, bio6, bio7, bio8, bio10],
            galleryLabels: ["Savannah Wildlife", "Natural Habitat", "African Elephants", "Suricate Clan", "Bioparc Entrance", "Beautiful Flamingoes", "Western Gorilla", "Elephants Bathing", "Wildlife Detail"]
        },
        {
            id: 'oceanographic',
            number: '7',
            title: 'Oceanographic',
            coverImage: ocean1,
            icon: Fish,
            description: "Largest aquarium in Europe. Discover massive marine habitats representing the world's main seas and oceans.",
            bullets: [
                "Aquatic Wonderland: Walk through spectacular underwater tunnels with sharks.",
                "Beluga & Medusa Exhibit: Get close to beluga whales, jellyfish, and diverse marine life.",
                "Submarine Dining: Enjoy a unique experience near the submarine restaurant."
            ],
            gallery: [ocean1, ocean2, ocean3, ocean4, ocean5, ocean6],
            galleryLabels: ["L'Oceanogràfic Exterior", "Submarine Restaurant", "Dolphin Encounter", "Jellyfish Gallery", "Beluga Whale Exhibit", "Sharks Tunnel"]
        },


        {
            id: 'sanjose-coves',
            number: '8',
            title: 'San José Coves',
            coverImage: cave1,
            icon: Mountain,
            description: "Underground expedition. Journey through the longest navigable underground river in Europe, gliding past ancient rock formations.",
            bullets: [
                "Underground River: Cruise inside illuminated caverns on small passenger boats.",
                "Stalactite Formations: Marvel at thousands of years of geological growth and echoes.",
                "Speleology Adventure: A tranquil, mystical excursion suitable for all ages."
            ],
            gallery: [cave1, cave2, cave3, cave4, cave5, cave6],
            galleryLabels: ["Cave Entrance Boating", "Illuminated Stalactites", "Quiet Underground River", "Rock Formations", "Boat Excursion", "Caves Exploration"]
        },
        {
            id: 'boat-trips',
            number: '9',
            title: 'Boat Trips',
            coverImage: boat1,
            icon: Ship,
            description: "Drinks, food, and relaxation or... parties. Spend a glorious day out on the Mediterranean sea on a luxury catamaran.",
            bullets: [
                "Luxury Catamaran: Sail the Valencian coast with expert crew members.",
                "Mediterranean Parties: Enjoy live DJs, food, drinks, and ocean swimming stops.",
                "Relaxing Day Sails: Lay back on nets soaking up the warm Spanish sunshine."
            ],
            gallery: [boat1, boat2, boat3, boat4, boat5, boat6],
            galleryLabels: ["Catamaran Sailing", "Sunset Cruise", "Anchor & Swim", "Catamaran Party", "Coastal Boat", "Ocean Relaxation"]
        }
    ];

    const [selectedActivityId, setSelectedActivityId] = useState('arts-science');
    const [hoveredActivityId, setHoveredActivityId] = useState(null);
    const [activeLightboxImage, setActiveLightboxImage] = useState(null);
    const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

    const activeActivityId = hoveredActivityId || selectedActivityId;
    const activeActivity = activities.find(a => a.id === activeActivityId) || activities[0];

    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-10">

            {/* Header section matching style of home pages */}
            <div className="text-center mb-16">
                <span className="text-[#c4a661] uppercase tracking-[0.3em] text-sm font-semibold mb-3 block">
                    Discover Valencia
                </span>
               <h1 className="text-4xl md:text-6xl font-serif text-[#17818A] tracking-tight">
                    Activities
                </h1>
                 <h2 className="text-xl md:text-2xl mt-4 font-serif text-[#17818A] tracking-tight">
                Explore the best attractions Valencia has to offer
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mt-4 font-light">
                Simply click on any activity card to view details, descriptions, and a photo gallery.
                </p>
            </div>

            {/* Split Screen Interactive Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start relative">

                {/* LEFT SIDE: Grid of 9 Activity Cards */}
                <div
                    onMouseLeave={() => setHoveredActivityId(null)}
                    className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6"
                >
                    {activities.map((activity) => {
                        const IconComponent = activity.icon;
                        const isHovered = hoveredActivityId === activity.id;
                        const isSelected = selectedActivityId === activity.id;
                        const isActive = isHovered || (hoveredActivityId === null && isSelected);

                        return (
                            <div
                                key={activity.id}
                                // onMouseEnter={() => setHoveredActivityId(activity.id)}
                                onClick={() => {
                                    setSelectedActivityId(activity.id);
                                    setIsMobileModalOpen(true);
                                }}
                                className={`group relative rounded-[1rem] overflow-hidden aspect-[4/3] shadow-lg border-2 transition-all duration-500 cursor-pointer ${isActive
                                    ? 'border-[#17818A] scale-[1.03] shadow-2xl'
                                    : 'border-transparent hover:border-[#17818A]/30'
                                    }`}
                            >
                                {/* Background Image */}
                                <img
                                    src={activity.coverImage}
                                    alt={activity.title}
                                    className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
                                />

                                {/* Dark Gradient Overlay */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none"></div> */}

                                {/* Floating Card Content */}
                                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">

                                    {/* Number / Icon Tag */}
                                    <div className="flex justify-between items-start">
                                        <span className="text-[#c4a661] font-mono text-sm font-bold bg-black/40 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center border border-white/10">
                                            {activity.number}
                                        </span>
                                        <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center border border-white/10 group-hover:bg-[#17818A] group-hover:text-white transition-colors duration-300">
                                            <IconComponent className="w-4.5 h-4.5" />
                                        </div>
                                    </div>

                                    {/* Title & Underline */}
                                    <div>
                                       <h3 className="text-white text-xl md:text-2xl text-center font-semibold tracking-wide [text-shadow:_0_2px_10px_rgba(0,0,0,0.9),_0_0_4px_rgba(0,0,0,1)]">
                                           {activity.title}
                                        </h3>
                                        <div className={`h-[2px] bg-[#c4a661] transition-all duration-500 mt-2 ${isActive ? 'w-12' : 'w-0 group-hover:w-12'
                                            }`}></div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* RIGHT SIDE: Dynamic Detail Panel (Hidden on Mobile) */}
                <div className="hidden lg:block w-full lg:w-[45%] lg:sticky lg:top-32">
                    <div className="bg-[#F0F8FF]/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col min-h-[500px] transition-all duration-500 hover:shadow-xl">

                        {/* Header Tag */}
                        <div className="flex items-center justify-between pb-6 border-b border-gray-200/80 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#17818A] text-white flex items-center justify-center shadow-md">
                                    <activeActivity.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#c4a661] text-xs font-semibold uppercase tracking-widest block">
                                        Activities Detail
                                    </span>
                                    <h4 className="text-2xl font-serif text-[#0a2342] leading-tight">
                                        {activeActivity.title}
                                    </h4>
                                </div>
                            </div>
                            <span className="text-gray-400 font-mono text-3xl font-light">
                                0{activeActivity.number}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">
                            {activeActivity.description}
                        </p>

                        {/* Bullet Details */}
                        <div className="space-y-4 mb-8">
                            {activeActivity.bullets.map((bullet, idx) => (
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
                                {activeActivity.gallery.map((imgUrl, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveLightboxImage(imgUrl)}
                                        className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-[#F4F3EC] shadow-sm border border-white hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
                                    >
                                        <img
                                            src={imgUrl}
                                            alt={activeActivity.galleryLabels[index] || "Gallery image"}
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
                                <activeActivity.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[#c4a661] text-[10px] font-semibold uppercase tracking-widest block">
                                    Activities Detail
                                </span>
                                <h4 className="text-xl font-serif text-[#0a2342] leading-tight">
                                    {activeActivity.title}
                                </h4>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-[15px] font-light leading-relaxed mb-5">
                            {activeActivity.description}
                        </p>

                        {/* Bullet Details */}
                        <div className="space-y-3 mb-6">
                            {activeActivity.bullets.map((bullet, idx) => (
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
                                {activeActivity.gallery.map((imgUrl, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveLightboxImage(imgUrl)}
                                        className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#F4F3EC] shadow-sm border border-gray-100 cursor-pointer"
                                    >
                                        <img
                                            src={imgUrl}
                                            alt={activeActivity.galleryLabels[index] || "Gallery image"}
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

export default Activities;
