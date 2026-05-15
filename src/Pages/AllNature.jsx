import React, { Suspense, lazy } from "react";

// 1. Eagerly load the top banner so it appears instantly
import BannerPage from "../Components/VillasAllNaturePage/bannerPage/bannerPage";

import PageSkeleton from "../Components/Layout/PageSkeleton";
import ScrollHandler from "../Components/Layout/ScrollHandler";
import Calendar from "../Components/ReusableComp/Calendar/Calendar";

// 3. Lazy load all the heavy "below-the-fold" sections
const AccommodationDetails = lazy(() => import("../Components/VillasAllNaturePage/AccommodationDetails/AccommodationDetails"));
const VillaSpaces = lazy(() => import("../Components/VillasAllNaturePage/VillaSpaces/VillaSpaces"));
const Gallery = lazy(() => import("../Components/ReusableComp/Gallery/GalleryTry"));
const LocationSection = lazy(() => import("../Components/ReusableComp/LocationSection/LocationSection"));

const googleMapsLink = "https://maps.google.com/maps?q=39.4124602,-0.6152275&hl=en&z=17&t=h&output=embed";

function AllNature() {
    return (
        <>
            {/* Renders instantly at the top of the page */}
            <BannerPage />
            <ScrollHandler />

            {/* Everything below the banner is lazy-loaded with a smooth skeleton transition if needed */}
            <Suspense fallback={<PageSkeleton />}>
                <AccommodationDetails />
                <VillaSpaces />
                <Gallery />
                <LocationSection
                    title="Location"
                    mapEmbedUrl={googleMapsLink}
                />
                <Calendar />
            </Suspense>
        </>
    );
}

export default AllNature;