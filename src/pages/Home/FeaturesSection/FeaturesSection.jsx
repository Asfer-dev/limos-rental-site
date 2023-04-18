import SectionHeading from "../../../components/SectionHeading";
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
      <div className="features grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature) => (
          <FeatureCard {...feature} key={feature.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
