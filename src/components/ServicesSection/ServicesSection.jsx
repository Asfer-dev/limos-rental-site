import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div className="container-default my-16">
      <div className="mb-12 md:flex md:space-x-16 justify-center items-center">
        <h1 className="text-6xl font-semibold">Services</h1>
        <p className="md:w-[41ch] text-justify">
          We invite you to try our services, and we personally guarantee that
          you will be completely satisfied.
        </p>
      </div>
      <div className="services">
        <ServiceCard />
      </div>
    </div>
  );
};

export default ServicesSection;
