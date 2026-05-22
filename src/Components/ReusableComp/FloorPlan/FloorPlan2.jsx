import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

// --- YOUR PDF IMPORTS ---

const FloorPlan2 = ({ 
    title = "Floor Plans", 
    description = "Download or view our detailed architectural plans to get a complete understanding of the villa's layout and dimensions.", 
    data = floorData 
}) => {
    return (
        <section className="py-20 bg-white scroll-mt-16" id="floor-plans">
            <div className="max-w-[1350px] mx-auto px-4 md:px-8">

                {/* Section Header (Now uses props!) */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-serif text-[#17818A] mb-4">{title}</h2>
                
                </div>

                {/* PDF Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {data.map((plan) => (
                        <div
                            key={plan.id}
                            className="relative group rounded-[24px] overflow-hidden border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#17818A]/50 transition-all duration-500 flex flex-col h-full min-h-[300px]"
                        >
                            {/* --- BLURRY BACKGROUND IMAGE LAYER --- */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img 
                                    src={plan.bgImage} 
                                    alt="Background" 
                                    className="w-full h-full object-cover blur-[0px]  transition-transform duration-700"
                                />
                                {/* Light overlay so the dark text remains perfectly readable */}
                                <div className="absolute inset-0  bg-white/25  backdrop-blur-[1px]"></div>
                            </div>

                            {/* --- CONTENT LAYER (Needs relative & z-10 to sit above the background) --- */}
                            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                                
                                {/* Icon & Title Area */}
                                <div className="mb-6 flex items-start gap-4">
                                    {/* <div className="w-12 h-12 rounded-full bg-white shadow-sm text-[#17818A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#17818A] group-hover:text-white transition-all duration-300">
                                        <FileText className="w-6 h-6" />
                                    </div> */}
                                    <div>
                                        {/* <h3 className="text-xl font-bold text-[#0a2342] mb-2">{plan.title}</h3> */}
                                     
                                    </div>
                                </div>

                                {/* Push buttons to the bottom */}
                                <div className="mt-auto pt-6 border-t border-[#17818A]/10 flex items-center gap-3">

                                    {/* View Button */}
                                    <a
                                        href={plan.fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white shadow-sm border border-gray-100 text-[#17818A] font-bold hover:bg-[#17818A] hover:text-white transition-all duration-300"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>{plan.title}</span>
                                    </a>

                                    {/* Download Button */}
                                    <a
                                        href={plan.fileUrl}
                                        download
                                        className="flex-none flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 text-gray-600 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
                                        title={`Download ${plan.title}`}
                                    >
                                        <Download className="w-5 h-5" />
                                    </a>

                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FloorPlan2;