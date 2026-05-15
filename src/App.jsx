import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Layout components
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import ScrollHandler from "./Components/Layout/ScrollHandler";
import PageSkeleton from "./Components/Layout/PageSkeleton"; // Import the new skeleton

// Lazy loaded pages
const Home = lazy(() => import("./Pages/Home"));
const AllNature = lazy(() => import("./Pages/AllNature"));
const BlueDiamond = lazy(() => import("./Pages/BlueDiamond"));

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
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;