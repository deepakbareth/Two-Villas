import React from 'react';
import { Car, UtensilsCrossed, Sparkles, Check } from 'lucide-react';

// --- DEFAULT DATA ---
// Based on your client's 3 categories. 
// You can easily change this text later when the client provides the final copy!
const defaultServices = [
    {
        id: 'transport',
        icon: Car,
        title: "Premium Transport",
        description: "Enjoy seamless travel from the moment you arrive. We handle the logistics so you can focus entirely on relaxing.",
        amenities: [
            "VIP Airport Shuttle",
            "Private Driver on Call",
            "Luxury Car Rentals",
            "Excursion Transfers"
        ]
    },
    {
        id: 'food',
        icon: UtensilsCrossed,
        title: "Culinary Experiences",
        description: "Savor the authentic tastes of the region without leaving the villa. Perfect for family dinners or special celebrations.",
        amenities: [
            "Private In-Villa Chef",
            "Traditional Paella Nights",
            "Tapas & Wine Tastings",
            "Pre-arrival Grocery Stocking"
        ]
    },
    {
        id: 'soul',
        icon: Sparkles,
        title: "Treat Your Soul",
        description: "Immerse yourself in deep relaxation and local culture with our curated wellness and entertainment packages.",
        amenities: [
            "In-Villa Massages & Spa",
            "Private Flamenco Dancing",
            "Live Spanish Guitar Music",
            "Morning Yoga Sessions"
        ]
    }
];

// The component accepts 'servicesData', 'title', and 'subtitle' as props for maximum reusability.
// If you don't pass them, it uses the default ones we set up below.
const OurServices = ({
    servicesData = defaultServices,
    title = "Services",
    subtitle = "Elevate your stay with our bespoke concierge offerings, designed to provide a seamless and unforgettable holiday."
}) => {
    return (
        <section className="py-20 bg-white" id="services">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-center md:text-6xl font-serif text-[#17818A] mb-6">
                        {title}</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => {
                        const IconComponent = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="group bg-white rounded-[32px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#17818A]/20 flex flex-col h-full"
                            >

                                {/* Icon Header */}
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-[#F0F8FF] text-[#17818A] flex items-center justify-center transition-colors duration-300">
                                        <IconComponent className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0a2342]">{service.title}</h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Amenities List - Pushed to the bottom to keep cards even */}
                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <ul className="space-y-3">
                                        {service.amenities.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-[#17818A]/10 flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-[#17818A] font-bold" />
                                                </div>
                                                <span className="text-gray-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default OurServices;