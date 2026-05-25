import React, { useState } from 'react';
import { Download, ZoomIn, X } from 'lucide-react'; // Swapped ExternalLink for ZoomIn

const FloorPlan2 = ({
    title = "Floor Plans",
    description = "", data = []
}) => {
    // STATE: Keeps track of which background image is currently open. 
    // Null means the gallery is closed.
    const [activeLightboxImage, setActiveLightboxImage] = useState(null);

    return (
        <section className="py-20 bg-white scroll-mt-16" id="floor-plans">
            <div className="max-w-[1350px] mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-serif text-[#17818A] mb-4">{title}</h2>
                    {description && (
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">{description}</p>
                    )}
                </div>

                {/* PDF Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {data.map((plan) => (
                        <div
                            key={plan.id}
                            className="relative group rounded-[24px] overflow-hidden border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#17818A]/50 transition-all duration-500 flex flex-col h-full min-h-[300px]"
                        >
                            {/* --- BACKGROUND IMAGE LAYER --- */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={plan.bgImage}
                                    alt="Background"
                                    className="w-full h-full object-contain transition-transform duration-700 "
                                />
                                {/* Light overlay for text readability */}
                                <div className="absolute inset-0 transition-all duration-300 "></div>
                            </div>

                            {/* --- CONTENT LAYER --- */}
                            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">


                                {/* Buttons Container (Pushed to bottom) */}
                                <div className="mt-auto pt-6 flex items-center gap-3">

                                    {/* VIEW BUTTON - Opens the Lightbox */}
                                    <button
                                        onClick={() => setActiveLightboxImage(plan)}
                                        className="flex-1 cursor-pointer flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white shadow-sm border border-gray-100 text-[#17818A] font-bold hover:bg-[#17818A] hover:text-white transition-all duration-300 group/btn"
                                    >
                                        <ZoomIn className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
                                        <span>{plan.title}</span>
                                    </button>

                                    {/* DOWNLOAD BUTTON */}
                                    {/* <a
                                        href={plan.fileUrl}
                                        download
                                        className="flex-none flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 text-gray-600 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
                                        title={`Download ${plan.title}`}
                                    >
                                        <Download className="w-5 h-5" />
                                    </a> */}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* --- LIGHTBOX OVERLAY --- */}
            {activeLightboxImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300"
                    onClick={() => setActiveLightboxImage(null)} // Closes when clicking outside the image
                >
                    {/* Image Container */}
                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Prevents clicking the image from closing the overlay
                    >

                        {/* Close Button (Top Right) */}
                        <button
                            onClick={() => setActiveLightboxImage(null)}
                            className="absolute -top-12 right-0 text-white/70 hover:text-white hover:rotate-90 transition-all duration-300 bg-white/10 hover:bg-white/20 rounded-full p-2"
                            aria-label="Close gallery"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Title Display */}

                        {/* The Full Size Background Image */}
                        <h3 className="absolute -top-10 left-0 text-white font-serif text-2xl tracking-wide drop-shadow-md">
                            {activeLightboxImage.title}
                        </h3>
                        <img
                            src={activeLightboxImage.bgImage}
                            alt={activeLightboxImage.title}
                            className="w-full h-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                        />

                    </div>
                </div>
            )}
        </section>
    );
};

export default FloorPlan2;