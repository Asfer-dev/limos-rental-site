import Button from "../Button";
import featuredCarImg from "../../assets/cars/car-cadillac-escalade.png";
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

const FeaturedSection = () => {
  return (
    <div className="container-default mt-32">
      <h1 className="font-semibold text-5xl md:text-7xl text-center mb-6">
        Only today $75/day
      </h1>
      <p className="md:w-[50ch] mx-auto text-center text-neutral-600 mb-12">
        Take advantage Of our hot offers, saving a significant amount when
        renting a limousine
      </p>
      <div className="p-12 bg-zinc-200 rounded-[1.5rem] relative">
        <h2 className="text-5xl mb-8 mt-24 sm:mt-0">Cadillac Escalade</h2>
        <ul className="feature-list text-sm text-neutral-600 grid gap-1 md:grid-cols-2 md:w-6/12 mb-8">
          <FeatureItem text="For upto 8 passengers" />
          <FeatureItem text="Tinted Windows" />
          <FeatureItem text="Incredible Sound System" />
          <FeatureItem text="Divider With Premium Style" />
          <FeatureItem text="Fiber Optic Lights" />
          <FeatureItem text="Multipurpose Designed Limo" />
          <FeatureItem text="Bar Area With Fridge" />
          <FeatureItem text="Chill Air Conditioning" />
        </ul>
        <Button>Reserve Now</Button>
        <img
          className="w-[450px] md:w-[620px] absolute -top-12 sm:top-24 md:-top-12 right-0"
          src={featuredCarImg}
          alt="featured-vehicle"
        />
      </div>
    </div>
  );
};

export default FeaturedSection;
