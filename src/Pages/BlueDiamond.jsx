
import AccommodationDetails from "../Components/BlueDiamond/AccommodationDetails/AccommodationDetails";
import PropertyBanner from "../Components/BlueDiamond/Banner";
import VillaSpaces from "../Components/BlueDiamond/VillaSpaces/VillaSpaces";
import Calendar from "../Components/ReusableComp/Calendar/Calendar";
import OurServices from "../Components/ReusableComp/OurServices/OurServices";



function BlueDiamond() {
    return (
        <>
            <PropertyBanner />
            <AccommodationDetails />
            <VillaSpaces />
            <OurServices />
            <Calendar />

        </>
    )
}

export default BlueDiamond;