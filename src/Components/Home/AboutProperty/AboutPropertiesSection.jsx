import React, { useState } from 'react';

const AboutSection = () => {
  // States to track if the boxes are expanded
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  return (
    <section className="md:py-24 py-6 relative overflow-hidden">
      {/* Optional: Subtle background blur blobs for a high-end feel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#17818A]/10 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-[#17818A] mb-4 font-serif">
            About These Properties
          </h2>
        </div>

        {/* Side-by-Side Container - Removed 'items-start' so they stretch to equal height */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">



          {/* LEFT  BOX: All Nature */}
          <div className="flex-1 w-full bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full">
            <h3 className="text-2xl font-serif text-[#0a2342] mb-8 text-center leading-snug">
              All Nature Villa
            </h3>

            {/* flex-grow ensures this takes up all available space, pushing the button to the bottom */}
            <div className="space-y-4 text-gray-600 leading-relaxed font-light text-[17px] flex-grow">
              <p>
                All Nature is an IBIZA style villa created to make you feel surrounded by nature and freshness. An oasis of enjoyment and relaxation. Very spacious, modern and fully equipped.
              </p>
              <p>
                2.400m2 garden. Outdoor Lounge, Double Chill-Out bed. 2 Jacuzzi (1 in the pool and a hot tub on the terrace), Bar and BBQ. HIFI, WIFI, Smart TV.
              </p>


            </div>


          </div>

          {/*  RIGHT BOX: Blue Diamond Villa */}
          <div className="flex-1 w-full bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full">
            <h3 className="text-2xl font-serif text-[#0a2342] mb-8 text-center leading-snug">
              Blue Diamond Villa
            </h3>

            {/* flex-grow ensures this takes up all available space, pushing the button to the bottom */}
            <div className="space-y-4 text-gray-600 leading-relaxed font-light text-[17px] flex-grow">
              <p>
                Space designed to make you feel in an exclusive environment. Spacious, modern and very well equipped. 1,600m2 of garden. 100m2 terrace with longe, dining area, bar and barbecue. Chill out bed, jacuzzi in the pool, WIFI, AA/CC + ceiling fans. 4 bedrooms, 4 bathrooms. 13 single beds. King size beds under demand. Maximum capacity of 18 (sleeping in the living room).Total privacy.
              </p>

              {/* Smooth Animated Reveal */}
              <div className={`grid transition-all duration-500 ease-in-out ${isExpanded1 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden space-y-4">
                  <p>
                    Maximum capacity of 18 (sleeping in the living room).Total privacy. Supermarket 4km away. Paella delivery and chef services. We help with Taxi Services.
                    <br /><br />
                    Reduce noise in the garden after 22h. The breach of this rule will cancel the rental contract with no rights to any refund. CONFETTI not allowed.
                  </p>
                  <p className="font-medium text-gray-800">
                    Our prices include all fees. No hidden fees.
                  </p>
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;