import React from 'react';

const AboutPropertyBlock = ({ data, index }) => {
  // Alternate layout for the zigzag editorial feel
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-start`}>
      
      {/* ---------------- LEFT: Narrative & Services ---------------- */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center ">
        
        {/* Decorative thin line */}
        

        <h3 className="text-2xl md:text-4xl font-serif text-[#17818A] text-center mb-4 leading-tight">
          {data.title}
        </h3>
        <p className="text-gray-500 font-medium tracking-widest text-center uppercase text-xs mb-10">
          {data.subtitle}
        </p>
        
        <div className="text-gray-600 font-light leading-relaxed space-y-6 text-[17px]">
          {data.description.map((paragraph, idx) => (
            <p 
              key={idx} 
              // Add a gorgeous Editorial Drop Cap to the very first paragraph only
              className={idx === 0 ? "" : ""}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Exclusive Services - Clean List */}
        <div className="mt-12 pt-10 border-t border-gray-200">
          <h4 className="text-sm font-bold tracking-widest uppercase text-[#0a2342] text-center mb-8">
            Exclusive Services
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
            {data.services.map((service, idx) => (
              <li key={idx} className="flex items-start gap-4 text-gray-600 group">
                {/* Minimalist animated line bullet */}
                <span className="w-6 h-[2px] bg-yellow-400 mt-2.5 shrink-0 transition-all duration-300 group-hover:w-8 group-hover:bg-[#17818A]" />
                <span className="text-[15px] leading-snug font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------------- RIGHT: The "Fact Sheet" Card ---------------- */}
      <div className="w-full lg:w-[45%] bg-white rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden sticky top-32">
        
       

        <div className="p-8 md:p-10 space-y-10">
          
          {/* Outdoor & Indoor Split */}
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex-1">
              <h5 className="font-semibold text-xs uppercase tracking-widest text-yellow-500 mb-6">Outdoor Oasis</h5>
              <ul className="space-y-4">
                {data.outdoor.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h5 className="font-semibold text-xs uppercase tracking-widest text-yellow-500 mb-6">Indoor Comforts</h5>
              <ul className="space-y-4">
                {data.indoor.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Important Info / Rules (Softened aesthetic) */}
          <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
             
              <h4 className="text-sm font-bold tracking-widest uppercase text-[#0a2342] text-center w-full">House Rules</h4>
            </div>
            
            <ul className="space-y-4">
              {data.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                  <span className="text-[#17818A] font-serif font-bold shrink-0">&middot;</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default AboutPropertyBlock;