import React from 'react';
import { Bed, BedDouble, Baby, Sofa } from 'lucide-react';

const RoomsAndBeds = ({
    imageSrc,
    imageAlt = "Luxury Bedroom",
    title = "5 Bedrooms",
    subtitle = "Standard sleep 13, Max capacity 22",
    rooms = []
}) => {

    const getBedIcon = (type) => {
        const lowerType = type.toLowerCase();
        if (lowerType.includes('crib')) return Baby;
        if (lowerType.includes('sofa')) return Sofa;
        if (lowerType.includes('double') || lowerType.includes('queen') || lowerType.includes('king')) return BedDouble;
        return Bed;
    };

    return (
        <section className="py-5 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-0 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* LEFT SIDE: Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-[300px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-4 border border-white/30 rounded-[24px] pointer-events-none"></div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="mb-2 border-b border-gray-200 pb-2">

                            <h2
                                style={{ fontFamily: "'Futura PT', serif" }}
                                className="text-3xl md:text-5xl font-medium tracking-wide mb-0  text-[#1a2b3c]"
                            >
                                {title}
                            </h2>
                            {subtitle && <p className="text-xl text-slate-600 font-medium">{subtitle}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6">
                            {rooms.map((room, index) => (
                                <div key={index} className="flex flex-col">
                                    <h3 className="text-xl font-serif text-[#0a2342] mb-4">{room.name}</h3>

                                    <div className="space-y-2">
                                        {room.beds.map((bed, bedIndex) => {
                                            const IconComponent = getBedIcon(bed.type);
                                            const iconColor = bed.isExtra ? "#ef4444" : "#17818A";

                                            return (
                                                <div key={bedIndex} className="flex gap-1">
                                                    <div className="flex items-center gap-2">
                                                        {Array.from({ length: bed.count }).map((_, i) => (
                                                            <IconComponent key={i} className="w-6 h-6" style={{ color: iconColor }} />
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className={bed.isExtra ? "text-red-500 font-medium" : "text-gray-600"}>
                                                            {bed.count} {bed.type}
                                                        </span>

                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomsAndBeds;