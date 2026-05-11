import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import AllNature from "./Pages/AllNature";
import BlueDiamond from "./Pages/BlueDiamond";
// import Navbar from "./Components/Layout/Navbar2Logo";


function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      {/* <Navbar/> */}

      <Routes>
        <Route path="/twovillas/" element={<Home />} />
        <Route path="/twovillas/villas/all-nature" element={<AllNature />} />
        <Route path="/twovillas/villas/blue-diamond" element={<BlueDiamond />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;