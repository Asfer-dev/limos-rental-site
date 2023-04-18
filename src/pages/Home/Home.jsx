import BannerSection from "./BannerSection/BannerSection";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import FleetSection from "./FleetSection/FleetSection";
import ServicesSection from "./ServicesSection/ServicesSection";

const Home = () => {
  return (
    <>
      <BannerSection />
      <ServicesSection />
      <FleetSection />
      <FeaturesSection />
      <FeaturedSection />
    </>
  );
};

export default Home;
