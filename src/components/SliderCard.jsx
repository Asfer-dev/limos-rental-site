import { faBriefcase, faPerson } from "@fortawesome/free-solid-svg-icons";
import CapacityItem from "../pages/Home/FleetSection/CapacityItem";
import { Link } from "react-router-dom";
const SliderCard = ({ index, image, name, seats, luggage, handleClick }) => {
  return (
    <Link to={"/vehicles"}>
      <div
        onClick={() => handleClick(name)}
        className={`slider-card mx-2 pb-8 cursor-pointer ${
          index === 0 && "md:ml-16"
        }`}
      >
        <div
          className={`car-image h-[290px] flex items-center justify-center ${
            index === 0 ? "bg-accent/20" : "bg-zinc-100"
          } rounded-[1.5rem]`}
        >
          <img
            className="car w-80 transition"
            src={image}
            alt={name + " - image"}
          />
        </div>
        <h2 className="text-lg font-medium my-4">{name}</h2>
        <div className="capacity-info flex gap-2">
          <CapacityItem text={seats} icon={faPerson} />
          <CapacityItem text={luggage} icon={faBriefcase} />
        </div>
      </div>
    </Link>
  );
};

export default SliderCard;
