import React, { useEffect } from 'react';
import { Bed, Sofa, Toilet, ShowerHead } from 'lucide-react';
import Amenities from '../Amenities/Amenities';
import { useLocation } from 'react-router-dom';
import PropertiesSection from '../../Home/PropertiesSection/PropertiesSection';
import RoomsAndBeds from '../../ReusableComp/RoomsAndBeds/RoomsAndBeds';
import blueDiamond from '../../../assets/Blue-diamond-villa-img/41-Dormitorio1.1 cor.jpg';


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
                { count: 3, type: "Twin Beds", isExtra: false }
            ]
        },
        {
            name: "Bedroom 2",
            beds: [
                { count: 3, type: "Twin Beds", isExtra: false }
            ]
        },
        {
            name: "Bedroom 3",
            beds: [
                { count: 3, type: "Twin Beds", isExtra: false }
            ]
        },
        {
            name: "Bedroom 4",
            beds: [
                { count: 4, type: "Twin Beds", isExtra: false }
            ]
        },
        {
            name: "Living Room 1",
            beds: [
                { count: 3, type: "Twin Sofa Beds", isExtra: false }
            ]
        },
        {
            name: "Living Room 2",
            beds: [
                { count: 2, type: "Twin Beds", isExtra: false }
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
        <section id='accommodation' className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#1a2b3c] bg-white">
            <PropertiesSection propertyName='Blue Diamond Villa' />

            {/* <Amenities /> */}
            <RoomsAndBeds imageSrc={blueDiamond} title='4 Bedrooms' subtitle='sleeps 21' rooms={villaRoomsData} />

            {/* Subtle Divider */}
            <hr className="border-t border-gray-300/60 my-12" />


        </section>
    );
};

export default AccommodationDetails;