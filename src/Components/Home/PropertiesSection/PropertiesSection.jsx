import React from 'react';
import PropertyCard from './PropertyCard';
import p1 from '../../../assets/home/p1.png';
import p2 from '../../../assets/home/p2.png';

const PropertiesSection = () => {
  // Data updated to match Screenshots 1, 2, 3, and 4
  const propertiesData = [
    {
      id: 1,
      title: "The Blue Diamond Villa",
      specs: { bedrooms: 4, bathrooms: 4, sleeps: 21, sqft: "3552.1" },
      amenities: ['Pool', 'Kitchen', 'Pet friendly', 'Hot tub', 'Washer', 'Air conditioning'],
      image: p1 
    },
    {
      id: 2,
      title: 'All Nature',
      specs: { bedrooms: 5, bathrooms: 5, sleeps: 19, sqft: "2712.5" },
      amenities: ['Pool', 'Kitchen', 'Pet friendly', 'Hot tub', 'Washer', 'Free WiFi'],
      image: p2
    }
  ];

  return (
    <section className="py-14 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Turquoise Blue Heading with Subtitle */}
        <div className="text-center mb-20">
         
          <h2 className="text-4xl md:text-6xl   text-[#17818A]">
            Our Properties
          </h2>
          
        </div>

        {/* Layout Wrapper with gaps */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {propertiesData.map((prop, index) => (
            <PropertyCard key={prop.id} property={prop} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PropertiesSection;