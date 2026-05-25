// src/data/floorData.js

import pdf1 from '../assets/all-nature-floorPlan/All Nature plot plans.pdf';
import pdf2 from '../assets/all-nature-floorPlan/All Nature Floor plan 1-Ground floor.pdf';
import pdf3 from '../assets/all-nature-floorPlan/All Nature Floor plan2- Semi-basement .pdf';

import bg1 from '../assets/all-nature-floorPlan/f9.png';
import bg2 from '../assets/all-nature-floorPlan/f10.png';
import bg3 from '../assets/all-nature-floorPlan/f11.png';

const floorData = [
    {
        id: 1,
        title: "Ground Floor Plan",
        description:
            "Explore the lower level layout, including additional rooms and amenities.",
        fileUrl: pdf2,
        bgImage: bg2,
    },
    {
        id: 2,
        title: "Semi-Basement Plan",
        description:
            "Complete property overview including the pool, gardens, and property boundaries.",
        fileUrl: pdf3,
        bgImage: bg3,
    },
    {
        id: 3,
        title: "Garden Plot Plan",
        description:
            "Detailed layout of the main living areas, kitchen, and outdoor spaces.",
        fileUrl: pdf1,
        bgImage: bg1,
    },
];

export default floorData;