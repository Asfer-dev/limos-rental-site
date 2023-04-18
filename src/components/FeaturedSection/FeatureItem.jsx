import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FeatureItem = ({ text }) => {
  return (
    <li>
      <FontAwesomeIcon icon={faCheck} style={{ color: "#000000" }} />
      <span className="ml-3">{text}</span>
    </li>
  );
};

export default FeatureItem;
