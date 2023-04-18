import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CapacityItem = ({ text, icon }) => {
  return (
    <div className="text-lg bg-zinc-100 px-3 py-1 rounded-[0.4rem]">
      <span className="font-medium mr-2">{text}</span>
      <FontAwesomeIcon className="text-neutral-800" icon={icon} />
    </div>
  );
};

export default CapacityItem;
