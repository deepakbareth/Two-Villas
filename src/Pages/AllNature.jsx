
// import Gallery from "../Components/ReusableComp/Gallery/Gallery";
import AccommodationDetails from "../Components/VillasAllNaturePage/AccommodationDetails/AccommodationDetails";
import BannerPage from "../Components/VillasAllNaturePage/bannerPage/bannerPage";
import VillaSpaces from "../Components/VillasAllNaturePage/VillaSpaces/VillaSpaces";
import { imageAssets } from "../Data/Gallery";
import g29 from '../assets/all-nature-villa-img/2-cor_081223 (3).jpg'
import GalleryPage from "../Components/ReusableComp/Gallery/GalleryTry";
import LocationSection from "../Components/ReusableComp/LocationSection/LocationSection";
// import PropertiesSection from "../Components/Home/PropertiesSection/PropertiesSection";

const googleMapsLink = "https://maps.google.com/maps?q=39.4124602,-0.6152275&hl=en&z=15&output=embed";


function AllNature() {
    return (
        <>


            <BannerPage />
            {/* <PropertiesSection propertyName="All Nature Villa" /> */}
            <AccommodationDetails />
            <VillaSpaces />
            {/* <Gallery
                images={imageAssets}
                heroImage={g29}
                subtitle="A Look Inside"
                title="All Nature Villa Gallery"
                heading="Our Gallery"
            /> */}
            <GalleryPage />
            <LocationSection
                title="Location"
                mapEmbedUrl={googleMapsLink}
            />




        </>
    )
}

export default AllNature;