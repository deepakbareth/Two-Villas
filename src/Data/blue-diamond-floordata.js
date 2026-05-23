// src/data/floorData.js

import pdf1 from '../assets/blue-diamond-floorPlan/Blue Diamond Floor plan.pdf';
import pdf2 from '../assets/blue-diamond-floorPlan/Blue Diamond Plot plan.pdf';
import pdf3 from '../assets/blue-diamond-floorPlan/Blue Diamond Pool mesuraments.pdf';

import bg1 from '../assets/blue-diamond-floorPlan/f1.png';
import bg2 from '../assets/blue-diamond-floorPlan/f2.png';
import bg3 from '../assets/blue-diamond-floorPlan/f3.png';

const blue_diamond_floorData = [
    {
        id: 1,
        title: "Ground Floor Plan",
        description:
            "Detailed layout of the main living areas, kitchen, and outdoor spaces.",
        fileUrl: pdf1,
        bgImage: bg1,
    },
    {
        id: 2,
        title: "Semi-Basement Plan",
        description:
            "Explore the lower level layout, including additional rooms and amenities.",
        fileUrl: pdf2,
        bgImage: bg2,
    },
    {
        id: 3,
        title: "Master Plot Plan",
        description:
            "Complete property overview including the pool, gardens, and property boundaries.",
        fileUrl: pdf3,
        bgImage: bg3,
    },
];

export default blue_diamond_floorData;