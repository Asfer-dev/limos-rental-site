import { useEffect } from "react";
import services from "../../data/services";

const Service = ({ heading, image, text }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h2 className="text-4xl font-medium">{heading}</h2>
      <p className="text-zinc-600">{text}</p>
    </div>
  );
};

const ServicesPage = ({ scrollUp }) => {
  useEffect(() => scrollUp(), []);
  return (
    <div className="container-default mt-28">
      <h1 className="text-5xl md:text-7xl font-semibold">Our Services</h1>
      <p className="text-zinc-600 w-2/3">
        We provide a variety of luxury ride services for you to choose from.
        They go from intercity, rides to, wedding events to business events and
        much more. Below are all the services we provide with all the detail you
        need.
      </p>

      <div>
        {services.map((service) => (
          <Service {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
