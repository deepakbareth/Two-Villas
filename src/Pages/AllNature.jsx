import AboutPropertiesSection from "../Components/Home/AboutProperty/AboutPropertiesSection";
import Attractions from "../Components/Home/Attractions/Attraction";
import Banner2 from "../Components/Home/banner/Banner2";
import Hero from "../Components/Home/banner/Hero";

import PropertiesSection from "../Components/Home/PropertiesSection/PropertiesSection";
import SpacesSection from "../Components/Home/SpacesSection/SpacesSection";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";
import AccommodationDetails from "../Components/VillasAllNaturePage/AccommodationDetails/AccommodationDetails";
import Amenities from "../Components/VillasAllNaturePage/Amenities/Amenities";
import BannerPage from "../Components/VillasAllNaturePage/bannerPage/bannerPage";
import VillaSpaces from "../Components/VillasAllNaturePage/VillaSpaces/VillaSpaces";

function AllNature() {
    return (
        <>


            <BannerPage />
            {/* text in main img ok banner and gallery btn and remove bottum sectio and put amenities in  new section  */}
            <div className=" bottom-13 left-0 right-0 flex justify-center z-20 pointer-events-none">
                <div className="px-8 py-3 rounded-full  transform transition-transform duration-700">
                    <h3 style={{ fontFamily: "'Futura PT', sans-serif" }} className="text-white md:text-[58px] text-[20px] font-[Sans-Serif] uppercase tracking-widest  text-center  [text-shadow:5px_5px_4px_rgba(0,0,0,5)]">
                        All Nature
                    </h3>
                </div>
            </div>
            <AccommodationDetails />
            <VillaSpaces />


        </>
    )
}

export default AllNature;