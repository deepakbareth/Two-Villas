import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

// --- YOUR PDF DATA ---
// Note: Place your actual PDF files inside the "public" folder of your React project 
// (e.g., public/pdfs/...) so they can be easily linked and downloaded.
import pdf1 from '../../../assets/floorPlan/All Nature plot plans.pdf'
import pdf2 from '../../../assets/floorPlan/All Nature Floor plan 1-Ground floor.pdf'
import pdf3 from '../../../assets/floorPlan/All Nature Floor plan2- Semi-basement .pdf'



const planData = [
    {
        id: 1,
        title: "Ground Floor Plan",
        description: "Detailed layout of the main living areas, kitchen, and outdoor spaces.",
        fileUrl: pdf1
    },
    {
        id: 2,
        title: "Semi-Basement Plan",
        description: "Explore the lower level layout, including additional rooms and amenities.",
        fileUrl: pdf2
    },
    {
        id: 3,
        title: "Master Plot Plan",
        description: "Complete property overview including the pool, gardens, and property boundaries.",
        fileUrl: pdf3
    }
];

const FloorPlan2 = () => {
    return (
        <section className="py-20 bg-white scroll-mt-16" id="floor-plans">
            <div className="max-w-[1350px] mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-serif text-[#17818A] mb-4 ">Floor Plans</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Download or view our detailed architectural plans to get a complete understanding of the villa's layout and dimensions.
                    </p>
                </div>

                {/* PDF Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {planData.map((plan) => (
                        <div
                            key={plan.id}
                            className="group bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#17818A]/30 transition-all duration-300 flex flex-col h-full"
                        >

                            {/* Icon & Title Area */}
                            <div className="mb-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#F0F8FF] text-[#17818A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0a2342] mb-2">{plan.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>
                            </div>

                            {/* Push buttons to the bottom */}
                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center gap-3">

                                {/* View Button (Opens in new tab) */}
                                <a
                                    href={plan.fileUrl}


                                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F0F8FF] text-[#17818A] font-semibold hover:bg-[#17818A] hover:text-white transition-colors duration-300"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>View</span>
                                </a>

                                {/* Download Button */}
                                <a
                                    href={plan.fileUrl}
                                    download
                                    className="flex-none flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 text-gray-600 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                                    title={`Download ${plan.title}`}
                                >
                                    <Download className="w-5 h-5" />
                                </a>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FloorPlan2;