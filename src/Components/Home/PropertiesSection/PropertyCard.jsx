import React from 'react';

// Simplified icons to match the thin-stroke style in the screenshot
const Icon = ({ name }) => {
  const icons = {
    Sleeps: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    Bedrooms: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h18v14H3z" /><path d="M3 11h18M7 7v4M17 7v4" /></svg>,
    Bathrooms: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /></svg>,
    Sqft: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18M9 3v18" /></svg>,
  };
  return icons[name] || null;
};

const PropertyCard = ({ property, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 mb-12`}>

      {/* ---------------- LEFT SIDE: Content Area ---------------- */}
      <div className="w-full lg:w-[40%] md:text-start text-center md:text-start  flex flex-col justify-center order-2 lg:order-none">

        {/* 1. Location Tag */}
        <span className="text-[#c4a661]  tracking-[0.3em] text-sm font-semibold mb-3">
          {"Villa " + (index + 1)}
        </span>

        {/* 2. Main Heading */}
        <h3 className="text-3xl md:text-4xl font-serif text-[#17818A] mb-6 tracking-tight">
          {property.title}
        </h3>

        {/* 3. Minimal Specs Row */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-[#0c2d35]/80">
          <div className="flex items-center gap-2">
            <Icon name="Sleeps" /> <span className="text-lg">+{property.specs.sleeps}</span>
            sleeps
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Bedrooms" /> <span className="text-lg">{property.specs.bedrooms}</span>
            bedrooms
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Bathrooms" /> <span className="text-lg">{property.specs.bathrooms}</span>
            bathrooms
          </div>

        </div>

        {/* 4. Description Paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
          Spectacular villa in a natural setting, just minutes away from local attractions.
          Very bright and peaceful with a spacious outdoor area, ideal for families and groups
          looking for an exclusive retreat.
        </p>

        {/* 5. Dual Action Buttons */}
        <div className="flex items-center gap-10">
          <button className="px-10 py-3 border font-serif rounded-xl border-[#0c2d35] text-[#0c2d35] uppercase tracking-widest text-sm font-bold hover:bg-[#0c2d35] hover:text-white transition-all duration-300">
            Explore
          </button>

          <button className="flex items-center gap-2 text-[#c4a661] uppercase tracking-widest text-xs font-bold group">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
            <span className="border-b border-transparent group-hover:border-[#c4a661] md:text-xl text-sm transition-all">Book Now</span>
          </button>
        </div>
      </div>

      {/* ---------------- RIGHT SIDE: Editorial Image ---------------- */}
      <div className="w-full lg:w-[60%] order-1 lg:order-none">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>

    </div>
  );
};

export default PropertyCard;