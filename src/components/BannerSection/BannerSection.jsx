import Button from "../Button";
import Reservation from "./Reservation";
const BannerSection = () => {
  return (
    <div className="banner relative container-big rounded-[1rem] text-center">
      <h1 className="text-5xl md:text-7xl font-semibold pt-8 tracking-wide">
        Luxury Limo Hire
      </h1>
      <p className="md:w-[42ch] mx-auto my-4 mb-6">
        We offer professional car rental & limousine services in our range of
        high-end vehicles
      </p>
      <Button>Open Fleet</Button>
      <Reservation />
    </div>
  );
};

export default BannerSection;
