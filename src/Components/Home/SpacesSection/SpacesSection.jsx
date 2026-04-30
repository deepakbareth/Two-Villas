import React from 'react';
// Importing the specific matching icons from the react-icons library
import { TbMicrowave, TbSofa, TbClover, TbUmbrella } from "react-icons/tb";
import { MdOutlineBalcony, MdOutlineRestaurant, MdOutlineRoofing } from "react-icons/md";

// Helper component that maps the space name to the exact react-icon
const SpaceIcon = ({ name }) => {
  const iconStyle = "w-7 h-7 text-[#0a2342] group-hover:text-[#17818A] transition-colors duration-300";
  
  // Mapping the text to the matching imported icon
  const icons = {
    'Deck or patio': <TbUmbrella className={iconStyle} />,
    'Kitchen': <TbMicrowave className={iconStyle} />,
    'Number of living rooms': <TbSofa className={iconStyle} />,
    'Garden': <TbClover className={iconStyle} />, 
    'Outdoor play area': <TbClover className={iconStyle} />, // Reusing Clover as per your screenshot
    'Porch or lanai': <MdOutlineRoofing className={iconStyle} />,
    'Balcony': <MdOutlineBalcony className={iconStyle} />,
    'Separate dining area': <MdOutlineRestaurant className={iconStyle} />,
    'Dining area': <MdOutlineRestaurant className={iconStyle} />,
  };

  return icons[name] || null;
};

const SpacesSection = () => {
  // Data from your screenshots
  const blueDiamondSpaces = [
    "Deck or patio",
    "Kitchen",
    "Number of living rooms",
    "Garden"
  ];

  const allNatureSpaces = [
    "Deck or patio",
    "Porch or lanai",
    "Kitchen",
    "Balcony",
    "Separate dining area",
    "Outdoor play area",
    "Garden",
    "Dining area"
  ];

  return (
    <section className="py-10 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading in Turquoise Blue */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-[#17818A] mb-4">
            Spaces
          </h2>
        </div>

        {/* Side-by-Side Cards */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT CARD: The Blue Diamond Villa */}
          <div className="flex-1 w-full bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-gray-500 tracking-wider uppercase mb-8 border-b border-gray-100 pb-4">
              The Blue Diamond Villa
            </h3>
            
            <ul className="space-y-6">
              {blueDiamondSpaces.map((space, index) => (
                <li key={index} className="flex items-center gap-4 group cursor-default">
                  <SpaceIcon name={space} />
                  <span className="text-lg text-[#0a2342] font-medium group-hover:text-[#17818A] transition-colors duration-300">
                    {space}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD: All Nature */}
          <div className="flex-1 w-full bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium text-gray-500 tracking-wider uppercase mb-8 border-b border-gray-100 pb-4">
              "ALL NATURE" Private Oasis
            </h3>
            
            {/* Using a 2-column grid for this list since it's longer */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {allNatureSpaces.map((space, index) => (
                <li key={index} className="flex items-center gap-4 group cursor-default">
                  <SpaceIcon name={space} />
                  <span className="text-lg text-[#0a2342] font-medium group-hover:text-[#17818A] transition-colors duration-300">
                    {space}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SpacesSection;