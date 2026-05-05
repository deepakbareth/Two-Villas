import AboutPropertiesSection from "../Components/Home/AboutProperty/AboutPropertiesSection";
import Attractions from "../Components/Home/Attractions/Attraction";
import Banner from "../Components/Home/banner/Banner";
import Banner2 from "../Components/Home/banner/Banner2";
import PropertiesSection from "../Components/Home/PropertiesSection/PropertiesSection";
import SpacesSection from "../Components/Home/SpacesSection/SpacesSection";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      {/* <Banner/> */}
      <Banner2 />
      <AboutPropertiesSection />
      <PropertiesSection />
      {/*<SpacesSection/>*/}
      <Attractions />
      <Footer />
    </>
  )
}

export default Home;