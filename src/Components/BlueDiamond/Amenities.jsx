import React from 'react';
import {
    DoorOpen,
    Bath,
    Users,
    Waves,
    Utensils,
    PawPrint,
    ThermometerSun,
    Shirt,
    Snowflake,
    HelpCircle
} from 'lucide-react';

const Amenities = () => {
    // Data passing structure
    const stats = [
        { Icon: DoorOpen, label: "5 Beds" },
        { Icon: Bath, label: "5 Baths" },
        { Icon: Users, label: "Sleeps 19" }
    ];

    const amenities = [
        { Icon: Waves, label: "Pool" },
        { Icon: ThermometerSun, label: "Hot tub" },
        { Icon: Utensils, label: "Kitchen" },
        { Icon: Shirt, label: "Washer" },
        { Icon: PawPrint, label: "Pet friendly" },
        { Icon: Snowflake, label: "Air Conditioning" }
    ];

    return (
        <section className="relative w-full flex justify-center py-16 px-4 sm:px-6">

            {/* The Amenities Card */}
            <div className="w-full max-w-7xl p-8 md:p-10 rounded-3xl backdrop-blur-md bg-gradient-to-br from-white/60 to-white/30 border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.15)] z-10">

                {/* Quick Stats Row */}
                <div className="flex items-center flex-wrap justify-between border-b border-gray-400/30 pb-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-2.5 p-3 md:p-0 text-[#1a2b3c]">
                            <stat.Icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
                            <span className="text-sm md:text-base font-medium tracking-widest uppercase">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Amenities Section */}
                <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-3xl md:text-4xl text-[#1a2b3c] mb-8 tracking-wide">
                    Popular Amenities
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-y-6 gap-x-8">
                    {amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-3 text-[#1a2b3c]">
                            <amenity.Icon className="w-6 h-6 stroke-[1.5]" />
                            <span className="text-lg md:text-xl tracking-wide">{amenity.label}</span>

                            {/* Render info tooltip icon if info is true */}
                            {amenity.info && (
                                <HelpCircle className="w-4 h-4 text-yellow-600/80 cursor-pointer hover:text-yellow-600 transition-colors" />
                            )}
                        </div>
                    ))}
                </div>



            </div>



        </section>
    );
};

export default Amenities;