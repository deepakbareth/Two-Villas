import React, { useEffect } from 'react';
import { Bed, Sofa, Toilet, ShowerHead } from 'lucide-react';
import Amenities from '../Amenities/Amenities';
import { useLocation } from 'react-router-dom';
import PropertiesSection from '../../Home/PropertiesSection/PropertiesSection';


// --- Helper Component to render multiple icons side-by-side ---
const IconRow = ({ icons }) => (
    <div className="flex items-center gap-1.5 mb-3 text-[#1a2b3c]/80">
        {icons.map((Icon, index) => (
            <Icon key={index} className="w-6 h-6 stroke-[1.5]" />
        ))}
    </div>
);

const AccommodationDetails = () => {
    // --- Data extracted from your screenshot ---
    // Note: I kept the exact text, but you can easily edit the duplicate names here.
    const bedroomsData = [
        { id: 1, title: "Bedroom 1", description: "3 Twin Beds", icons: [Bed, Bed, Bed] },
        { id: 2, title: "Bedroom 2", description: "3 Twin Beds", icons: [Bed, Bed, Bed] },
        { id: 3, title: "Bedroom 3", description: "3 Twin Beds", icons: [Bed, Bed, Bed] },
        { id: 4, title: "Bedroom 4", description: "4 Twin Beds", icons: [Bed, Bed, Bed, Bed] },
        { id: 5, title: "Living Room 1", description: "3 Twin Sofa Beds", icons: [Sofa, Sofa, Sofa] },
        { id: 6, title: "Living Room 2", description: "2 Twin Beds", icons: [Bed, Bed] },
    ];

    const bathroomsData = [
        {
            id: 1,
            title: "Bathroom 1",
            icons: [Toilet, Toilet, ShowerHead],
            description: "Soap · Towels provided · Bidet · Toilet · Shower only · Hair dryer"
        },
        {
            id: 2,
            title: "Bathroom 2",
            icons: [Toilet, Toilet, ShowerHead],
            description: "Soap · Towels provided · Bidet · Toilet · Shower only · Hair dryer"
        },
        {
            id: 3,
            title: "Bathroom 3",
            icons: [Toilet, Toilet, ShowerHead],
            description: "Soap · Towels provided · Bidet · Toilet · Shower only · Hair dryer"
        },
        {
            id: 4,
            title: "Bathroom 4",
            icons: [Toilet, Toilet, ShowerHead],
            description: "Soap · Towels provided · Bidet · Toilet · Shower only · Hair dryer"
        }
    ];



    const location = useLocation();


    // useEffect(() => {
    //     // Check if the URL has a hash (like #gallery)
    //     if (location.hash) {
    //         // Remove the '#' to just get the word 'gallery'
    //         const targetId = location.hash.substring(1);

    //         // We use a tiny setTimeout to make sure React has completely 
    //         // finished drawing the page before we try to scroll
    //         setTimeout(() => {
    //             const targetElement = document.getElementById(targetId);
    //             if (targetElement) {
    //                 targetElement.scrollIntoView({ behavior: 'smooth' });
    //             }
    //         }, 100);
    //     }
    // }, [location]);

    return (
        <section id='accommodation' className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#1a2b3c] bg-white">
            <PropertiesSection propertyName='Blue Diamond Villa' />

            <Amenities />
            {/* --- ROOMS & BEDS SECTION --- */}
            <div className="mb-16 max-w-7xl mx-auto">
                <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-4xl md:text-5xl font-medium tracking-wide mb-2">
                    Rooms & Beds
                </h2>
                <p className="text-lg md:text-xl font-medium mb-10">
                    4 Bedrooms <span className="font-normal opacity-80">(sleeps 21)</span>
                </p>

                {/* Grid Layout for Bedrooms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {bedroomsData.map((room) => (
                        <div key={room.id} className="flex flex-col">
                            <h3 className="text-xl font-medium mb-3">{room.title}</h3>
                            <IconRow icons={room.icons} />
                            <p className="text-base opacity-80 leading-relaxed">
                                {room.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Divider */}
            <hr className="border-t border-gray-300/60 my-12" />

            {/* --- BATHROOMS SECTION --- */}
            <div className='max-w-7xl mx-auto'>
                <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-3xl md:text-4xl font-medium tracking-wide mb-10">
                    4 Bathrooms
                </h2>

                {/* Grid Layout for Bathrooms */}
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {bathroomsData.map((bath) => (
                        <div key={bath.id} className="flex flex-col">
                            <h3 className="text-xl font-medium mb-3">{bath.title}</h3>
                            <IconRow icons={bath.icons} />
                            <p className="text-base opacity-80 leading-relaxed">
                                {bath.description}
                            </p>
                        </div>
                    ))}
                </div>



            </div>

        </section>
    );
};

export default AccommodationDetails;