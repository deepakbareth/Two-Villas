import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Layout components
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import ScrollHandler from "./Components/Layout/ScrollHandler";
import PageSkeleton from "./Components/Layout/PageSkeleton"; // Import the new skeleton
import WhatsAppButton from "./Components/Layout/WhatsAppButton";
// import BlueDiamondReviewsPage from "./Pages/BlueDiamondReviewsPage";

// Lazy loaded pages
const Home = lazy(() => import("./Pages/Home"));
const AllNature = lazy(() => import("./Pages/AllNature"));
const BlueDiamond = lazy(() => import("./Pages/BlueDiamond"));
const Services = lazy(() => import("./Pages/Services"));
const Activity = lazy(() => import("./Pages/Activities"));
const VillasAllNatureReviews = lazy(() => import("./Pages/VillasAllNatureReviewsPage"));
const BlueDiamondReviewsPage = lazy(() => import("./Pages/BlueDiamondReviewsPage"));
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollHandler />
      <Navbar />

      <main className="flex-grow">
        {/* Pass the Skeleton into the fallback */}
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/twovillas/" element={<Home />} />
            <Route path="/twovillas/villas/all-nature" element={<AllNature />} />
            <Route path="/twovillas/villas/blue-diamond" element={<BlueDiamond />} />
            <Route path="/twovillas/services" element={<Services />} />
            <Route path="/twovillas/activities" element={<Activity />} />
            <Route path="/twovillas/reviews/all-nature" element={<VillasAllNatureReviews />} />
            <Route path="/twovillas/reviews/blue-diamond" element={<BlueDiamondReviewsPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;