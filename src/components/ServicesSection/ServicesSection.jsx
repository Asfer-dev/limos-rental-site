import ServiceCard from "./ServiceCard";
import services from "./services";

const ServicesSection = () => {
  return (
    <div className="container-default my-16">
      <div className="mb-16 md:flex md:space-x-16 justify-center items-center">
        <h1 className="text-6xl font-semibold">Services</h1>
        <p className="md:w-[41ch] text-justify">
          We invite you to try our services, and we personally guarantee that
          you will be completely satisfied.
        </p>
      </div>
      <div className="services grid gap-8 md:grid-cols-2 justify-center">
        {services.map((service) => (
          <ServiceCard {...service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
