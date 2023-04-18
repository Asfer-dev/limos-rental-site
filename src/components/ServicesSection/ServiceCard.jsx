import Button from "../Button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ image, heading, text }) => {
  // scroll animation
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="service-card bg-zinc-100 p-6 rounded-[1.5rem] w-[300px] sm:w-full sm:flex sm:space-x-8 text-sm"
    >
      <img
        className="card-img w-[260px] rounded-[1rem] mb-8 sm:mb-0"
        src={image}
        alt="service-illustration"
      />
      <div className="card-content flex flex-col justify-between">
        <h2 className="text-2xl font-semibold mb-3">{heading}</h2>
        <p className="text-neutral-600 mb-3">{text}</p>
        <Button>Read More</Button>
      </div>
    </div>
  );
};

export default ServiceCard;
