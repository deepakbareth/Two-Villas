
import Gallery from "../Components/ReusableComp/Gallery/Gallery";
import AccommodationDetails from "../Components/VillasAllNaturePage/AccommodationDetails/AccommodationDetails";
import BannerPage from "../Components/VillasAllNaturePage/bannerPage/bannerPage";
import VillaSpaces from "../Components/VillasAllNaturePage/VillaSpaces/VillaSpaces";
import { imageAssets } from "../Data/Gallery";
import g29 from '../assets/all-nature-villa-img/2-cor_081223 (3).jpg'
function AllNature() {
    return (
        <>


            <BannerPage />

            <AccommodationDetails />
            <VillaSpaces />
            <Gallery
                images={imageAssets}
                heroImage={g29}
                subtitle="A Look Inside"
                title="All Nature Villa Gallery"
                heading="Our Gallery"
            />



        </>
    )
}

export default AllNature;