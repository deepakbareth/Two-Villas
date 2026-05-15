import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react'; // Optional: if you want a zoom icon

// --- 1. Your 8 Images Data ---
// Import your actual images at the top of the file:
// import fp1 from '../assets/floorplans/ground-floor.jpg';
// import fp2 from '../assets/floorplans/first-floor.jpg';
import fp1 from '../../../assets/floorPlan/f1.png';
import fp2 from '../../../assets/floorPlan/f2.png';
import fp3 from '../../../assets/floorPlan/f3.png';
import fp4 from '../../../assets/floorPlan/f4.png';
import fp5 from '../../../assets/floorPlan/f5.png';
import fp6 from '../../../assets/floorPlan/f6.png';
import fp7 from '../../../assets/floorPlan/f7.png';
import fp8 from '../../../assets/floorPlan/f8.png';


const planData = [
    { id: 1, title: "Ground Floor Overview", src: fp1, alt: "Ground floor plan" },
    { id: 2, title: "First Floor Overview", src: fp2, alt: "First floor plan" },
    { id: 3, title: "Master Bedroom Suite", src: fp3, alt: "Master bedroom dimensions" },
    { id: 4, title: "Living & Dining Area", src: fp4, alt: "Living room layout" },
    { id: 5, title: "Kitchen & Utility", src: fp5, alt: "Kitchen layout" },
    { id: 6, title: "Guest Bedrooms", src: fp6, alt: "Guest rooms" },
    { id: 7, title: "Outdoor Pool Deck", src: fp7, alt: "Pool area dimensions" },
    { id: 8, title: "Roof Terrace", src: fp8, alt: "Roof terrace plan" },
];

const FloorPlan = () => {
    // State to track which of the 8 images is currently being viewed
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 bg-white" id="floor-plans">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#17818A] mb-4">Villa Floor Plans</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Explore the layout and dimensions of our premium spaces. Select a section below to view the detailed blueprints.
                    </p>
                </div>

                <div className="bg-[#F0F8FF] rounded-[32px] p-4 md:p-8 border border-gray-100 shadow-sm">

                    {/* Main Viewer Area */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-white rounded-[24px] overflow-hidden shadow-inner mb-6 group">
                        <img
                            src={planData[activeIndex].src}
                            alt={planData[activeIndex].alt}
                            className="w-full h-full object-contain p-4 transition-opacity duration-300"
                            loading="lazy"
                        />

                        {/* Current Image Title Badge */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-sm border border-gray-100">
                            <span className="font-bold text-[#0a2342]">{planData[activeIndex].title}</span>
                        </div>

                        {/* Optional Zoom Hint (Requires lucide-react) */}
                        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-3 rounded-full shadow-sm border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Maximize2 className="w-5 h-5 text-[#17818A]" />
                        </div>
                    </div>

                    {/* Thumbnail Strip (The 8 selectable images) */}
                    <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar snap-x">
                        {planData.map((plan, index) => (
                            <button
                                key={plan.id}
                                onClick={() => setActiveIndex(index)}
                                className={`relative flex-shrink-0 w-32 h-24 md:w-40 md:h-28 rounded-xl overflow-hidden snap-center transition-all duration-300 ${activeIndex === index
                                    ? 'ring-4 ring-[#17818A] shadow-md scale-105'
                                    : 'ring-1 ring-gray-200 opacity-70 hover:opacity-100 hover:ring-[#17818A]/50'
                                    }`}
                            >
                                <img
                                    src={plan.src}
                                    alt={`Thumbnail ${plan.title}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                {/* Dark overlay for inactive thumbnails to make the active one pop */}
                                <div className={`absolute inset-0 bg-[#0a2342]/10 transition-opacity ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`}></div>
                            </button>
                        ))}
                    </div>

                </div>
            </div>

            {/* Optional: Add custom scrollbar styling for the thumbnail strip */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #17818A; border-radius: 10px; opacity: 0.5; }
      `}} />
        </section>
    );
};

export default FloorPlan;