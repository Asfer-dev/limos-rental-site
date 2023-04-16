import SectionHeading from "../SectionHeading";
import FeatureCard from "./FeatureCard";
import features from "./features";

const FeaturesSection = () => {
  return (
    <div className="container-default mt-32">
      <SectionHeading
        title="Why Choose Us"
        text="At LIMOS we pride ourselves in delivering extensive services to fulfill all of your
         needs with first rate customer care"
      />
      <div className="features flex flex-col md:flex-row md:space-x-32 space-y-8 md:space-y-0">
        {features.map((feature) => (
          <FeatureCard {...feature} key={feature.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
