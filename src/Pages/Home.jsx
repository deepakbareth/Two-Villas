import AboutPropertiesSection from "../Components/Home/AboutProperty/AboutPropertiesSection";
import Attractions from "../Components/Home/Attractions/Attraction";
import Banner2 from "../Components/Home/banner/Banner2";
import Hero from "../Components/Home/banner/Hero";

import PropertiesSection from "../Components/Home/PropertiesSection/PropertiesSection";
import SpacesSection from "../Components/Home/SpacesSection/SpacesSection";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";

function Home() {
  return (
    <>
      {/* <Navbar /> */}

      {/* <Banner2 /> */}
      <Hero />
      <AboutPropertiesSection />
      <PropertiesSection />
      {/*<SpacesSection/>*/}
      <Attractions />
      {/* <Footer /> */}
    </>
  )
}

export default Home;