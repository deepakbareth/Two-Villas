
import AccommodationDetails from "../Components/BlueDiamond/AccommodationDetails/AccommodationDetails";
import PropertyBanner from "../Components/BlueDiamond/Banner";
import VillaSpaces from "../Components/BlueDiamond/VillaSpaces/VillaSpaces";
import BathroomAmenities from "../Components/ReusableComp/BathroomAmenities/BathroomAmenities";
import Calendar from "../Components/ReusableComp/Calendar/Calendar";
import OurServices from "../Components/ReusableComp/OurServices/OurServices";
import { Droplets, Wind, Toilet, ShowerHead, Check } from 'lucide-react';
import bathroomImg from "../assets/Blue-diamond-villa-img/59-baño 3 corr.jpg";
import VillaSpaces2 from "../Components/VillasAllNaturePage/VillaSpaces/VillaSpaces2";
import villasSpaceImgBlueDiamond from "../Data/villasSpaceImgBlueDiamond";
import LocationSection from "../Components/ReusableComp/LocationSection/LocationSection";
const googleMapsLink =
    "https://maps.google.com/maps?q=39.392498,-0.6108777&hl=en&z=19&t=h&output=embed";

const amenitiesList = [
    { label: "Soap", Icon: Droplets },
    { label: "Towels provided", Icon: Check },
    { label: "Bidet", Icon: Toilet },
    { label: "Toilet", Icon: Toilet },
    { label: "Shower only", Icon: ShowerHead },
    { label: "Hair dryer", Icon: Wind },
];


function BlueDiamond() {
    return (
        <>
            <PropertyBanner />
            <AccommodationDetails />
            <BathroomAmenities
                id="bathrooms"
                title="4 Bathrooms"
                description="Each of our 4 bathrooms is fully equipped with premium soap, fresh towels, a bidet, modern toilet, walk-in shower, and a hair dryer for your complete convenience."
                amenitiesList={amenitiesList}
                image={bathroomImg}
                imageAlt="Luxury Villa Bathroom"
                bgColor="bg-white"
                primaryColor="#17818A"
                titleColor="#0a2342"
            />
            <VillaSpaces2 images={villasSpaceImgBlueDiamond} />
            <LocationSection title="Location" mapEmbedUrl={googleMapsLink} />
            {/* <VillaSpaces /> */}
            {/* <OurServices /> */}
            <Calendar />

        </>
    )
}

export default BlueDiamond;