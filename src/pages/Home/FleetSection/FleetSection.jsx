import { useState } from "react";
import SectionHeading from "../../../components/SectionHeading";
import CarSlider from "./CarSlider";
import Tabs from "./Tabs";

const FleetSection = ({ setSelectedVehicle }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="mt-32 overflow-x-hidden">
      <div className="container-default">
        <SectionHeading
          title="Our Fleet"
          text="We offer an extensive fleet of vehicles including sedans, limousines and crossovers"
        />
        <Tabs active={activeTab} handleClick={setActiveTab} />
      </div>
      <CarSlider
        activeTab={activeTab}
        setSelectedVehicle={setSelectedVehicle}
      />
    </div>
  );
};

export default FleetSection;
