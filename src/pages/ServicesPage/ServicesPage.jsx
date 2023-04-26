import { useEffect } from "react";
import services from "../../data/services";

const Service = ({ heading, image, text }) => {
  return (
    <div className="mb-16">
      <img className="mx-auto" src={image} alt={"service-" + heading} />
      <h2 className="text-4xl font-medium mt-12">{heading}</h2>
      <p className="text-zinc-600 mt-4">
        {text}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        inventore iste repellendus, quibusdam optio autem nobis! Quam dicta
        blanditiis animi? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Autem adipisci illum nisi quasi consequatur ea totam quia
        necessitatibus ab dicta. <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus animi
        ipsum ab exercitationem error tenetur quo, explicabo, ducimus alias
        quibusdam eos! Animi odio saepe, sunt nulla est enim id ab ipsam optio
        tempora iure iste atque numquam debitis illum quis.
      </p>
    </div>
  );
};

const ServicesPage = ({ scrollUp }) => {
  useEffect(() => scrollUp(), []);
  return (
    <div className="container-default mt-28">
      <h1 className="text-5xl md:text-7xl font-semibold">Our Services</h1>
      <p className="text-zinc-600 md:w-2/3">
        We provide a variety of luxury ride services for you to choose from.
        Whether you want intercity rides or a wedding event, we've got you
        covered.
      </p>

      <div className="mt-20">
        {services.map((service) => (
          <Service {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
