import React, { Suspense, lazy } from "react";

// 1. Eagerly load the Hero section so the user sees the top of the site instantly
import Hero from "../Components/Home/banner/Hero";
import PageSkeleton from "../Components/Layout/PageSkeleton";

// 2. Lazy load the "below-the-fold" sections
const AboutPropertiesSection = lazy(() => import("../Components/Home/AboutProperty/AboutPropertiesSection"));
const PropertiesSection = lazy(() => import("../Components/Home/PropertiesSection/PropertiesSection"));
const Attractions = lazy(() => import("../Components/Home/Attractions/Attraction"));

function Home() {
  return (
    <>
      {/* Renders immediately without delay */}
      <Hero />

      {/* Suspense catches the lazy-loaded components. 
          You can replace the fallback text with a skeleton loader or a spinner if you prefer */}
      <Suspense fallback={<PageSkeleton />}>
        <AboutPropertiesSection />
        <PropertiesSection />
        <Attractions />
      </Suspense>
    </>
  );
}

export default Home;