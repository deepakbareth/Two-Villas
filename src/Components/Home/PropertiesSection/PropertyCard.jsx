import React from 'react';

// Helper component to render the correct SVG icon cleanly
const Icon = ({ name }) => {
  const icons = {
    Bedrooms: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12"/><path d="M3 21h18"/><path d="M9 21v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8"/><path d="M14 15h.01"/></svg>,
    Bathrooms: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/></svg>,
    Sleeps: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    Sqft: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>,
    Pool: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6 0 1.2-.2 1.8-.6l.4-.3c.6-.4 1.2-.6 1.8-.6.6 0 1.2.2 1.8.6l.4.3c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6l.4-.3c.6-.4 1.2-.6 1.8-.6.6 0 1.2.2 1.8.6l.4.3c.6.4 1.2.6 1.8.6"/><path d="M2 12c.6 0 1.2-.2 1.8-.6l.4-.3c.6-.4 1.2-.6 1.8-.6.6 0 1.2.2 1.8.6l.4.3c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6l.4-.3c.6-.4 1.2-.6 1.8-.6.6 0 1.2.2 1.8.6l.4.3c.6.4 1.2.6 1.8.6"/><path d="M2 18c.6 0 1.2-.2 1.8-.6l.4-.3c.6-.4 1.2-.6 1.8-.6.6 0 1.2.2 1.8.6l.4.3c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6l.4-.3c.6-.4 1.2-.6 1.8-.6.6 0 1.2.2 1.8.6l.4.3c.6.4 1.2.6 1.8.6"/></svg>,
    Kitchen: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="14" x="3" y="5" rx="2"/><path d="M12 9v4"/><path d="M8 9v4"/><path d="M16 9v4"/></svg>,
    'Pet friendly': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 11a2.5 2.5 0 0 1-2.5-2.5C9.5 7 12 5 12 5s2.5 2 2.5 3.5A2.5 2.5 0 0 1 12 11Z"/><path d="M18.5 10a2.5 2.5 0 0 1-2.5-2.5C16 6 18.5 4 18.5 4s2.5 2 2.5 3.5A2.5 2.5 0 0 1 18.5 10Z"/><path d="M5.5 10A2.5 2.5 0 0 1 3 7.5C3 6 5.5 4 5.5 4s2.5 2 2.5 3.5A2.5 2.5 0 0 1 5.5 10Z"/><path d="M12 21a5 5 0 0 1-5-5c0-2.5 2-4 5-4s5 1.5 5 4a5 5 0 0 1-5 5Z"/></svg>,
    'Hot tub': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13h18"/><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8"/><path d="M8 9a2 2 0 0 0 2-2V5"/><path d="M14 9a2 2 0 0 0 2-2V5"/></svg>,
    Washer: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M8 6h.01"/><path d="M11 6h.01"/></svg>,
    'Air conditioning': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><path d="m20 4-4 4"/><path d="m4 20 4-4"/><path d="m4 4 4 4"/><path d="m20 20-4-4"/></svg>,
    'Free WiFi': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>,
  };
  return icons[name] || null;
};

const PropertyCard = ({ property, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-0`}>
      
      {/* Huge Editorial Image */}
      <div className="w-full lg:w-[70%] h-[450px] sm:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl relative group">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* OVERLAPPING BLURRED SPECS PILL (Screenshot 1 & 2) */}
       {/* OVERLAPPING BLURRED SPECS PILL */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[2rem] px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 z-20">
  
  <div className="flex items-center gap-2 md:gap-3 text-[#0a2342] shrink-0 md:border-r border-gray-300 md:pr-6">
    <Icon name="Bedrooms" />
    <span className="text-sm sm:text-base font-semibold">4 bedrooms</span>
  </div>
  
  <div className="flex items-center gap-2 md:gap-3 text-[#0a2342] shrink-0 md:border-r border-gray-300 md:pr-6">
    <Icon name="Bathrooms" />
    <span className="text-sm sm:text-base font-semibold">4 bathrooms</span>
  </div>
  
  <div className="flex items-center gap-2 md:gap-3 text-[#0a2342] shrink-0 md:border-r border-gray-300 md:pr-6">
    <Icon name="Sleeps" />
    <span className="text-sm sm:text-base font-semibold">Sleeps 21</span>
  </div>
  
  <div className="flex items-center gap-2 md:gap-3 text-[#0a2342] shrink-0">
    <Icon name="Sqft" />
    <span className="text-sm sm:text-base font-semibold">3552.1 sq.ft.</span>
  </div>

</div>
      </div>

      {/* Floating Glassmorphism Content Card */}
      <div 
        className={`w-11/12 sm:w-5/6 lg:w-[40%] bg-white/95 backdrop-blur-xl p-8 sm:p-10 lg:p-12 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/80 z-10 relative lg:absolute 
        ${isEven ? 'lg:right-0' : 'lg:left-0'} 
        -mt-0 lg:mt-0`}
      >
        <span className="text-6xl font-serif text-gray-100 absolute top-4 right-8 -z-10 select-none">
          0{index + 1}
        </span>

        <h3 className="text-xl md:text-4xl font-serif text-[#17818A] text-center mb-8 leading-tight">
          {property.title}
        </h3>
        
        {/* AMENITIES SECTION (Screenshot 3 & 4) */}
        <div className="mb-10">
          <h4 className="text-lg font-bold text-[#0a2342] mb-5 text-center">Popular amenities</h4>
          <div className="grid grid-cols-2 gap-y-5 gap-x-4">
            {property.amenities.map((amenity, i) => (
              <div key={i} className="flex items-center gap-3 text-[#0a2342] font-medium">
                <Icon name={amenity} />
                <span className="text-[15px]">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Yellow Arrow Button */}
        <button className="group flex items-center gap-4 text-black font-semibold text-sm tracking-widest uppercase transition-all">
          <span className="bg-yellow-500 px-4 py-4 rounded-full group-hover:bg-yellow-500 group-hover:shadow-lg transition-all duration-300">
            Explore Villa
          </span>
          <div className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-yellow-400 group-hover:bg-yellow-50 transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </button>
      </div>

    </div>
  );
};

export default PropertyCard;