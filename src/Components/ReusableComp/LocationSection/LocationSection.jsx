import React from 'react';

const LocationSection = ({
    title = "Location -",
    mapEmbedUrl
}) => {
    return (
        <section id='location' className="py-10 md:py-20 bg-white w-full scroll-mt-16" >
            {/* Container to control max width and padding */}
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">

                {/* Simple Header matching the screenshot */}
                <div className="mb-10">
                    <h2 className="text-4xl text-center md:text-6xl font-serif text-[#17818A]">
                        {title}
                    </h2>

                </div>

                {/* Full-width Map Container */}
                <div className="w-full h-[300px] md:h-[500px] bg-gray-100 border border-gray-200 ">
                    <iframe
                        title="Google Maps Location"
                        src={mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </section>
    );
};

export default LocationSection;