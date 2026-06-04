import React from "react";
import { Bed, BedDouble, Sofa } from "lucide-react";
import bedroomImg from '../../../assets/home/bedroom.png';

const RoomsAndBeds2 = () => {
    return (
        <section className="py-5 md:pt-12 md:pb-0 bg-white">
            <div className="max-w-[1400px] mx-auto px-0 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Image */}
                    <div className="w-full lg:w-[54%]">
                        <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                            <img
                                src={bedroomImg}
                                alt="Luxury Bedroom"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-[46%] flex flex-col justify-center">
                        <div className="mb-2 border-b border-gray-200 pb-2">
                            <h2 className="text-3xl md:text-4xl font-serif text-[#17818A] mb-6 tracking-tight">
                                5 Bedrooms
                            </h2>

                            <div className="flex items-center gap-2 flex-wrap">
                                <p className="text-xl text-slate-600 font-medium">
                                    Standard sleep 13, Max. capacity 22 with
                                </p>

                                <span className="text-xl text-[#ef4444] font-medium">
                                    8 Extra beds
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">

                            {/* Bedroom 1 */}
                            <div>
                                <h3 className="text-[1.15rem] font-serif text-[#0a2342] mb-1.5">
                                    Bedroom 1
                                </h3>

                                <div className="flex items-center gap-1.5">
                                    <Bed className="w-6 h-6 text-[#17818A]" />
                                    <Bed className="w-6 h-6 text-[#17818A]" />
                                    <span className="text-gray-600 font-bold">2</span>
                                </div>
                            </div>

                            {/* Bedroom 2 */}
                            <div>
                                <h3 className="text-[1.15rem] font-serif text-[#0a2342] mb-1.5">
                                    Bedroom 2
                                </h3>

                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center gap-1.5">
                                        <Bed className="w-6 h-6 text-[#17818A]" />
                                        <Bed className="w-6 h-6 text-[#17818A]" />
                                        <Bed className="w-6 h-6 text-[#17818A]" />
                                        <span className="text-gray-600 font-bold">3</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Bed className="w-6 h-6 text-red-500" />
                                        <span className="text-red-500 font-bold">1</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bedroom 3 */}
                            <div>
                                <h3 className="text-[1.15rem] font-serif text-[#0a2342] mb-1.5">
                                    Bedroom 3
                                </h3>

                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center gap-1.5">
                                        <Bed className="w-6 h-6 text-[#17818A]" />
                                        <Bed className="w-6 h-6 text-[#17818A]" />
                                        <span className="text-gray-600 font-bold">2</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Bed className="w-6 h-6 text-[#17818A]" />
                                        <span className="text-gray-600 font-bold">1</span>
                                        <span className=" text-[15px]">
                                            Bunkbed
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bedroom 4 */}
                            <div>
                                <h3 className="text-[1.15rem] font-serif text-[#0a2342] mb-1.5">
                                    Bedroom 4
                                </h3>

                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center gap-1.5">
                                        <BedDouble className="w-6 h-6 text-[#17818A]" />
                                        <span className="text-gray-600 font-bold">1</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Bed className="w-6 h-6 text-red-500" />
                                        <span className="text-red-500 font-bold">1</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bedroom 5 */}
                            <div>
                                <h3 className="text-[1.15rem] font-serif text-[#0a2342] mb-1.5">
                                    Bedroom 5
                                </h3>

                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center gap-1.5">
                                        <BedDouble className="w-6 h-6 text-[#17818A]" />
                                        <span className="text-gray-600 font-bold">1</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Bed className="w-6 h-6 text-red-500" />
                                        <Bed className="w-6 h-6 text-red-500" />
                                        <span className="text-red-500 font-bold">2</span>
                                    </div>
                                </div>
                            </div>

                            {/* Living Room 1 */}
                            <div>
                                <h3 className="text-[1.15rem] font-serif text-[#0a2342] mb-1.5">
                                    Living Room 1
                                </h3>

                                <div className="flex items-center gap-1.5">
                                    <Bed className="w-6 h-6 text-[#17818A]" />
                                    <Bed className="w-6 h-6 text-[#17818A]" />
                                    <span className="text-gray-600 font-bold">2</span>
                                </div>
                            </div>

                            {/* Living Room 2 */}
                            <div>
                                <h3 className="text-[1.15rem] font-serif text-[#0a2342] mb-1.5">
                                    Living Room 2
                                </h3>

                                <div className="flex items-center gap-1.5">
                                    <Sofa className="w-6 h-6 text-[#17818A]" />
                                    <Sofa className="w-6 h-6 text-[#17818A]" />
                                    <Sofa className="w-6 h-6 text-[#17818A]" />
                                    <span className="text-gray-600 font-bold">3</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RoomsAndBeds2;