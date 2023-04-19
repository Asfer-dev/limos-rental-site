import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReservationCard from "./ReservationCard";
const BannerSection = () => {
  return (
    <div className="banner relative container-big rounded-[1.5rem] text-center mt-24">
      <h1 className="text-5xl md:text-8xl font-semibold pt-8 tracking-wide">
        Luxury Limo Hire
      </h1>
      <p className="md:w-[42ch] mx-auto mb-8">
        We offer professional car rental & limousine services in our range of
        high-end vehicles
      </p>
      <Link to={"/vehicles"}>
        <Button>Open Fleet</Button>
      </Link>
      <ReservationCard />
    </div>
  );
};

export default BannerSection;
