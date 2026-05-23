import React from "react";
import { Image } from "lucide-react"; // Importing the gallery icon

// Your Images
import img1 from "../../assets/home/b3.png";
import img4 from "../../assets/home/b4.png";
import img3 from "../../assets/home/b5.png";
import img2 from "../../assets/home/p1.png";

const PropertyBanner = () => {
    return (
        <section className="w-full px-2 md:px-4 pt-28 pb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:h-[570px]">

                {/* LEFT BIG IMAGE */}
                {/* Added 'relative' to the container for the absolute text */}
                <div className="relative overflow-hidden rounded-[20px] border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.15)] group">
                    <img
                        src={img1}
                        alt="All Nature Villa"
                        className="w-full h-[300px] lg:h-full object-cover hover:scale-105 duration-700"
                    />
                    {/* Soft gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                    {/* Floating Text */}
                    <h1 style={{ fontFamily: "'Futura PT', serif" }} className="uppercase absolute top-1/2 left-1/2 translate-x-[-50%] w-full translate-y-[-50%] text-white text-2xl md:text-4xl lg:text-5xl text-center font-medium tracking-wide [text-shadow:6px_5px_4px_rgba(0,0,0,5)] pointer-events-none">
                        Blue Diamond Villa
                    </h1>
                </div>

                {/* RIGHT SIDE */}
                <div className="grid grid-rows-[1fr_1fr] gap-3 h-[570px]">

                    {/* TOP IMAGE */}
                    <div className="overflow-hidden rounded-[20px] border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                        <img
                            src={img2}
                            alt=""
                            className="w-full h-full object-cover hover:scale-105 duration-700"
                        />
                    </div>

                    {/* BOTTOM IMAGES */}
                    <div className="grid grid-cols-2 gap-3">

                        {/* BOTTOM LEFT IMAGE */}
                        <div className="overflow-hidden rounded-[20px] border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                            <img
                                src={img3}
                                alt=""
                                className="w-full h-full object-cover hover:scale-105 duration-700"
                            />
                        </div>

                        {/* BOTTOM RIGHT IMAGE (With Gallery Button) */}
                        {/* Added 'relative' to the container for the absolute button */}
                        <div className="relative overflow-hidden rounded-[20px] border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                            <img
                                src={img4}
                                alt=""
                                className="w-full h-full object-cover hover:scale-105 duration-700"
                            />

                            {/* PERFECTED GALLERY BUTTON */}
                            <a
                                href="#gallery"
                                className="absolute bottom-4 right-4 md:bottom-5 md:right-5 z-10"
                            >
                                <button
                                    className="flex items-center gap-2.5 bg-[#f2f4f7] text-[#1a2b3c] px-4 py-2 md:px-5 md:py-2.5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:bg-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-white/60"
                                >
                                    <Image className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
                                    <span className="text-sm md:text-base tracking-wide font-medium">Gallery</span>
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyBanner;