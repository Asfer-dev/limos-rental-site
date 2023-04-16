import SectionHeading from "../SectionHeading";
import ServiceCard from "./ServiceCard";
import services from "./services";

const ServicesSection = () => {
  return (
    <div className="container-default mt-32" id="services">
      <SectionHeading
        title="Services"
        text="We invite you to try our services, and we personally guarantee that
          you will be completely satisfied."
      />
      <div className="services grid gap-8 lg:grid-cols-2 justify-center">
        {services.map((service) => (
          <ServiceCard {...service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
