import { useState } from "react";
import SectionHeading from "../SectionHeading";
import CarSlider from "./CarSlider";
import Tabs from "./Tabs";

const FleetSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="mt-32">
      <div className="container-default">
        <SectionHeading
          title="Our Fleet"
          text="We offer an extensive fleet of vehicles including sedans, limousines and crossovers"
        />
        <Tabs active={activeTab} handleClick={setActiveTab} />
      </div>
      <CarSlider activeTab={activeTab} />
    </div>
  );
};

export default FleetSection;
