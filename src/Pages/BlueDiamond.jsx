
import AccommodationDetails from "../Components/BlueDiamond/AccommodationDetails/AccommodationDetails";
import PropertyBanner from "../Components/BlueDiamond/Banner";
import VillaSpaces from "../Components/BlueDiamond/VillaSpaces/VillaSpaces";
import BathroomAmenities from "../Components/ReusableComp/BathroomAmenities/BathroomAmenities";
import Calendar from "../Components/ReusableComp/Calendar/Calendar";
import OurServices from "../Components/ReusableComp/OurServices/OurServices";
import { Droplets, Wind, Toilet, ShowerHead, Check, Sparkles, Bath } from 'lucide-react';
import bathroomImg from "../assets/home/blue-bath.jpg";
import VillaSpaces2 from "../Components/VillasAllNaturePage/VillaSpaces/VillaSpaces2";
import villasSpaceImgBlueDiamond from "../Data/villasSpaceImgBlueDiamond";
import LocationSection from "../Components/ReusableComp/LocationSection/LocationSection";
import FloorPlan2 from "../Components/ReusableComp/FloorPlan/FloorPlan2";
import blue_diamond_floorData from "../Data/blue-diamond-floordata";
import GalleryPage from "../Components/ReusableComp/Gallery/GalleryTry";
import { imageAssets } from "../Data/BlueDiamondGallery";
const bgImage = imageAssets[0];


const googleMapsLink =
    "https://maps.google.com/maps?q=39.392498,-0.6108777&hl=en&z=18&t=h&output=embed";

const amenitiesList = [
    { label: "Hand Soap", Icon: Sparkles },
    { label: "Towels Provided", Icon: Check },
    { label: "Modern Toilet - Bidet", Icon: Toilet },
    { label: "Rains Effect Shower", Icon: Bath },
    { label: "Shower Gel", Icon: Droplets },
    { label: "Hair Dryer", Icon: Wind },
];


function BlueDiamond() {
    return (
        <>
            <PropertyBanner />
            <AccommodationDetails />
            <BathroomAmenities
                id="bathrooms"
                title="4 Bathrooms"
                description="Start and end your day in absolute comfort. Our meticulously designed bathrooms offer a serene, atmosphere equipped with all the essentials you need for a refreshing stay."
                amenitiesList={amenitiesList}
                image={bathroomImg}
                imageAlt="Luxury Villa Bathroom"
                bgColor="bg-white"
                primaryColor="#17818A"
                titleColor="#0a2342"
            />
            <VillaSpaces2 images={villasSpaceImgBlueDiamond} />
            <FloorPlan2 data={blue_diamond_floorData} />
            <LocationSection title="Location" mapEmbedUrl={googleMapsLink} />

            <Calendar />
            <GalleryPage imageAssets={imageAssets} bgImage={bgImage} />

        </>
    )
}

export default BlueDiamond;