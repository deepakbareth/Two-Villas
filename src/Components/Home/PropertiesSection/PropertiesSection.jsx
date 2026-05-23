import React from 'react';
import PropertyCard from './PropertyCard';
import p1 from '../../../assets/home/b3.png';
import p2 from '../../../assets/home/b7.png';
import p3 from '../../../assets/Blue-diamond-villa-img/7-CRISTAL PISCINA 3 cor.jpg';
import p4 from '../../../assets/home/b9.png';

const PropertiesSection = ({ propertyName = "all" }) => {

  // 1. Base data WITHOUT images hardcoded
  const allPropertiesData = [
    {
      id: 2,
      title: 'All Nature Villa',
      link: "/twovillas/villas/all-nature",
      bookingLink: "/twovillas/villas/all-nature/#calendar",
      specs: { bedrooms: 5, bathrooms: 5, sleeps: 19, sqft: "2712.5" },
      amenities: ['Pool', 'Kitchen', 'Pet friendly', 'Hot tub', 'Washer', 'Free WiFi'],
    },
    {
      id: 1,
      title: "Blue Diamond Villa",
      link: "/twovillas/#villas/blue-diamond",
      bookingLink: "/twovillas/#villas/blue-diamond/#calendar",
      specs: { bedrooms: 4, bathrooms: 4, sleeps: 21, sqft: "3552.1" },
      amenities: ['Pool', 'Kitchen', 'Pet friendly', 'Hot tub', 'Washer', 'Air conditioning'],
    },
  ];

  // 2. Filter the villas based on the propertyName prop
  const filteredVillas = propertyName === "all"
    ? allPropertiesData
    : allPropertiesData.filter(villa => villa.title === propertyName);

  // 3. Check if we are showing only ONE villa, or BOTH
  const isSingleVilla = filteredVillas.length === 1;

  // 4. Smart Image Assignment exactly as you requested
  const finalPropertiesToRender = filteredVillas.map(villa => {
    if (villa.id === 2) {
      // All Nature Villa: p4 if alone, p2 if both
      return { ...villa, image: isSingleVilla ? p4 : p2 };
    } else if (villa.id === 1) {
      // Blue Diamond Villa: p3 if alone, p1 if both
      return { ...villa, image: isSingleVilla ? p3 : p1 };
    }
    return villa;
  });

  return (
    <section className="py-12 md:py-24 overflow-hidden bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-[#17818A]">
            {propertyName == "all" ? " Our Properties" : "Accomodation"}
          </h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {finalPropertiesToRender.map((prop, index) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertiesSection;