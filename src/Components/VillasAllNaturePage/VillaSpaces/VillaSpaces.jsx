import React from 'react';
import {
    Wind,
    Sun,
    UtensilsCrossed,
    Users,
    Coffee,
    ChefHat,
    Flower2,
    Sofa,
    Tent,
    Home
} from 'lucide-react';

const VillaSpaces = () => {
    // Exact content extracted from your screenshot, enhanced with relevant icons
    const spacesList = [
        { id: 1, label: "Balcony", Icon: Wind },
        { id: 2, label: "Deck/patio", Icon: Sun },
        { id: 3, label: "Dining area", Icon: UtensilsCrossed },
        { id: 4, label: "Seating for 16 people", Icon: Users },
        { id: 5, label: "8/10 dinner indoors, 12 outdoors", Icon: Coffee },
        { id: 6, label: "Kitchen", Icon: ChefHat },
        { id: 7, label: "Lawn/garden", Icon: Flower2 },
        { id: 8, label: "Living room", Icon: Sofa },
        { id: 9, label: "Outdoor play area", Icon: Tent },
        { id: 10, label: "Porch/veranda", Icon: Home },
    ];

    return (
        <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 text-[#1a2b3c] bg-white ">
            <div className="max-w-7xl mx-auto">


                {/* Header */}
                <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-3xl md:text-4xl font-medium tracking-wide mb-10">
                    Spaces
                </h2>

                {/* Clean, Minimalist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-6">
                    {spacesList.map((space) => (
                        <div
                            key={space.id}
                            className="flex items-center gap-4 p-3 -ml-3 rounded-xl hover:bg-slate-100/50 transition-colors duration-300 group"
                        >
                            {/* Soft Icon Wrapper */}
                            <div className="w-12 h-12 rounded-full bg-[#f0e6d2]/40 flex items-center justify-center text-[#1a2b3c]/70 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                                <space.Icon className="w-5 h-5 stroke-[1.5]" />
                            </div>

                            {/* Text Content */}
                            <span className="text-lg tracking-wide opacity-90">
                                {space.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>

            {/* Subtle Bottom Divider (Optional, helps separate from the next section) */}
            <hr className="border-t border-gray-300/60 mt-16" />

        </section>
    );
};

export default VillaSpaces;