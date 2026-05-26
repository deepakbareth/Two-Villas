import React from 'react';

const BathroomAmenities = ({
    id,
    subtitle,
    title,
    description,
    amenitiesList = [],
    image,
    imageAlt,
    badgeText,
    bgColor = "bg-white",
    primaryColor = "#17818A",
    titleColor = "#0a2342",
}) => {
    return (
        <section className={`py-5 ${bgColor}`} id={id}>
            <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">

                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-20">

                    {/* LEFT SIDE */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-center">

                        {/* HEADING */}
                        <div className="mb-10">


                            <h2
                                style={{ fontFamily: "'Futura PT', serif" }}
                                className="text-3xl md:text-5xl font-medium tracking-wide mb-6  text-[#1a2b3c]"
                            >
                                {title}
                            </h2>


                            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                                {description}
                            </p>
                        </div>

                        {/* AMENITIES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                            {amenitiesList.map((item, index) => {
                                const IconComponent = item.Icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-sm border"
                                            style={{
                                                backgroundColor: `${primaryColor}10`,
                                                color: primaryColor,
                                                borderColor: `${primaryColor}20`
                                            }}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </div>

                                        <span
                                            className="font-medium text-lg transition-colors duration-300"
                                            style={{ color: titleColor }}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>


                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    {/* LEFT SIDE: Image */}
                    <div className="w-full lg:w-[53%]">
                        <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                            />
                            {/* <div className="absolute inset-4 border border-white/30 rounded-[24px] pointer-events-none"></div> */}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BathroomAmenities;