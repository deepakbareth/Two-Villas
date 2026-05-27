import React, { Suspense, lazy } from "react";
import { Bath, ShowerHead, Wind, Droplets, Sparkles, Toilet, Check } from 'lucide-react';

import BannerPage from "../Components/VillasAllNaturePage/bannerPage/bannerPage";

import PageSkeleton from "../Components/Layout/PageSkeleton";
import ScrollHandler from "../Components/Layout/ScrollHandler";
import Calendar from "../Components/ReusableComp/Calendar/Calendar";
import FloorPlan2 from "../Components/ReusableComp/FloorPlan/FloorPlan2";
import OurServices from "../Components/ReusableComp/OurServices/OurServices";
import BathroomAmenities from "../Components/ReusableComp/BathroomAmenities/BathroomAmenities";
const AccommodationDetails = lazy(() => import("../Components/VillasAllNaturePage/AccommodationDetails/AccommodationDetails"));
// const VillaSpaces = lazy(() => import("../Components/VillasAllNaturePage/VillaSpaces/VillaSpaces"));
const Gallery = lazy(() => import("../Components/ReusableComp/Gallery/GalleryTry"));
const LocationSection = lazy(() => import("../Components/ReusableComp/LocationSection/LocationSection"));

import bathroomImg from "../assets/home/bathhroom2.png";
import floorData from "../Data/floorData";
import villasSpaceImg from "../Data/villasSpaceImgAllNature";
import VillaSpaces2 from "../Components/VillasAllNaturePage/VillaSpaces/VillaSpaces2";
import { imageAssets } from '../Data/Gallery';

const bgImage = imageAssets[0];


const googleMapsLink = "https://maps.google.com/maps?q=39.4124602,-0.6152275&hl=en&z=19&t=h&output=embed";


const amenitiesList = [
    { label: "Premium Soap", Icon: Sparkles },
    { label: "Towels Provided", Icon: Check },
    { label: "Bathtub or Shower", Icon: Bath },
    { label: "Modern Toilet", Icon: Toilet },
    { label: "Luxury Shampoo", Icon: Droplets },
    { label: "Hair Dryer", Icon: Wind },
];



function AllNature() {
    return (
        <>
            {/* Renders instantly at the top of the page */}
            <BannerPage />
            <ScrollHandler />

            {/* Everything below the banner is lazy-loaded with a smooth skeleton transition if needed */}
            <Suspense fallback={<PageSkeleton />}>
                <AccommodationDetails />
                <BathroomAmenities
                    id="bathrooms"

                    title="5 Bathrooms"
                    description="Start and end your day in absolute comfort. Our meticulously designed bathrooms offer a serene, atmosphere equipped with all the premium essentials you need for a refreshing stay."
                    amenitiesList={amenitiesList}
                    image={bathroomImg}
                    imageAlt="Luxury Villa Bathroom"

                    bgColor="bg-white"
                    primaryColor="#17818A"
                    titleColor="#0a2342"
                />
                {/* <VillaSpaces /> */}
                <VillaSpaces2 images={villasSpaceImg} />

                {/* <OurServices /> */}
                <FloorPlan2 data={floorData} />
                <LocationSection
                    title="Location"
                    mapEmbedUrl={googleMapsLink}
                />
                <Calendar />
                <Gallery imageAssets={imageAssets} bgImage={bgImage} />
            </Suspense>
        </>
    );
}

export default AllNature;