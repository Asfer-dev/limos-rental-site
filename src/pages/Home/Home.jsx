import { useEffect } from "react";
import BannerSection from "./BannerSection/BannerSection";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import FleetSection from "./FleetSection/FleetSection";
import ServicesSection from "./ServicesSection/ServicesSection";

const Home = ({ scrollUp, setSelectedVehicle }) => {
  useEffect(() => {
    scrollUp();
  }, []);
  return (
    <>
      <BannerSection />
      <ServicesSection />
      <FleetSection setSelectedVehicle={setSelectedVehicle} />
      <FeaturesSection />
      <FeaturedSection />
    </>
  );
};

export default Home;
