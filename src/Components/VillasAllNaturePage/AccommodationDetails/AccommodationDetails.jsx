import React, { useEffect } from 'react';
import { Bed, BedDouble, Sofa, Bath, ShowerHead } from 'lucide-react';
import Amenities from '../Amenities/Amenities';
import { useLocation } from 'react-router-dom';
import PropertiesSection from '../../Home/PropertiesSection/PropertiesSection';
import RoomsAndBeds from '../../ReusableComp/RoomsAndBeds/RoomsAndBeds';
import bedroomImg from '../../../assets/home/bedroom.png';


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
    const villaRoomsData = [
        {
            name: "Bedroom 1",
            beds: [
                { count: 2, type: "Single Beds", isExtra: false },
                { count: 1, type: "Extra Single Bed", isExtra: true }
            ]
        },
        {
            name: "Bedroom 2",
            beds: [
                { count: 3, type: "Single Beds", isExtra: false },
                { count: 2, type: "Extra Single Bed", isExtra: true }
            ]
        },
        {
            name: "Bedroom 3",
            beds: [
                { count: 2, type: "Single Beds", isExtra: false },
                { count: 2, type: "Bunk Bed", isExtra: false }
            ]
        },
        {
            name: "Bedroom 4",
            beds: [
                { count: 1, type: "King Size Bed", isExtra: false },
                { count: 2, type: "Extra Single Bed", isExtra: true }
            ]
        },
        {
            name: "Bedroom 5",
            beds: [
                { count: 1, type: "King Size Bed", isExtra: false },
                { count: 3, type: "Extra Single Beds", isExtra: true }
            ]
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
        <section id='accommodation' className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 md:py-16 py-6 text-[#1a2b3c] bg-white">
            <PropertiesSection propertyName='All Nature Villa' />

            {/* <Amenities /> */}
            {/* --- ROOMS & BEDS SECTION --- */}
            <RoomsAndBeds
                imageSrc={bedroomImg}
                rooms={villaRoomsData}
            />
            {/* Subtle Divider */}


            {/* --- BATHROOMS SECTION --- */}
            {/* <div className='max-w-7xl mx-auto'>
                <h2 style={{ fontFamily: "'Futura PT', serif" }} className="text-3xl md:text-4xl font-medium tracking-wide mb-10">
                    5 Bathrooms
                </h2>

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



            </div> */}

        </section>
    );
};

export default AccommodationDetails;