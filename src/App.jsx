import "./App.css";
import BannerSection from "./components/BannerSection/BannerSection";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ServicesSection from "./components/ServicesSection/ServicesSection";

function App() {
  return (
    <>
      <Header />
      <BannerSection />
      <ServicesSection />
      <FeaturesSection />
      <FeaturedSection />
      <Footer />
    </>
  );
}

export default App;
