import Button from "../Button";

const ServiceCard = ({ image, heading, text }) => {
  return (
    <div className="service-card bg-zinc-100 p-6 rounded-[1.5rem] w-[300px] sm:w-full sm:flex sm:space-x-8 text-sm">
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
