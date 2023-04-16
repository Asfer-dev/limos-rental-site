import { faBriefcase, faPerson } from "@fortawesome/free-solid-svg-icons";
import CapacityItem from "./CapacityItem";
const SliderCard = ({ index, image, name, seats, luggage }) => {
  return (
    <div
      className={
        index === 0
          ? "slider-card mx-2 pb-8 cursor-pointer md:ml-16"
          : "slider-card pb-8 mx-2 cursor-pointer"
      }
    >
      <div
        className={
          index === 0
            ? "car-image h-[290px] flex items-center justify-center bg-accent/20 rounded-[1.5rem]"
            : "car-image h-[290px] flex items-center justify-center bg-zinc-100 rounded-[1.5rem]"
        }
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
  );
};

export default SliderCard;
