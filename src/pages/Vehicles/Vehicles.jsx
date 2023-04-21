import { useEffect, useState } from "react";
import cars from "../../data/cars";
import SliderCard from "../../components/SliderCard";
import Button from "../../components/Button";
import { Link, useLocation } from "react-router-dom";

const Vehicles = ({ scrollUp }) => {
  const location = useLocation();
  const [selectedVehicle, setSelectedVehicle] = useState(cars[0]);

  const [filter, setFilter] = useState("1");

  useEffect(() => {
    let initialVehicle;
    if (location.state)
      initialVehicle = cars.find((car) => car.name === location.state);
    else initialVehicle = cars[0];
    setSelectedVehicle(initialVehicle);

    scrollUp();
  }, []);

  const chooseVehicle = (name) => {
    setSelectedVehicle(cars.find((car) => car.name === name));
  };

  return (
    <div className="container-default text-center md:text-left mt-28">
      <h1 className="text-5xl md:text-7xl font-semibold">Vehicles</h1>
      <p className="md:w-2/3 text-zinc-600">
        We offer a variety of luxurious vehicles for you to choose. Select your
        vehicle of choice from our collection of luxury, crossover and business
        class vehicles.
      </p>
      <div className="grid md:grid-cols-2 gap-12 my-16">
        <div className="bg-accent/40 p-4 rounded-[1rem]">
          <img className="w-full" src={selectedVehicle.image} alt="" />
        </div>
        <div className="mt-4">
          <h2 className="text-4xl font-semibold">{selectedVehicle.name}</h2>
          <p className="text-zinc-600 mt-4">{selectedVehicle.detail}</p>
          <h3 className="mt-8 text-2xl font-medium">Capacity</h3>
          <p className="mt-1">
            Luggage:{" "}
            <span className="font-medium">{selectedVehicle.luggage}</span>
          </p>
          <p className="mt-1 mb-12">
            Seats: <span className="font-medium">{selectedVehicle.seats}</span>
          </p>
          <Link to={"/reservation"} state={selectedVehicle}>
            <Button>Proceed to Reservation</Button>
          </Link>
        </div>
      </div>
      <h2 className="text-4xl font-semibold mb-6">Other Cars</h2>
      <label className="ml-2" htmlFor="filter">
        Filter By:
      </label>
      <select
        className="rounded-[0.4rem] border-2 border-zinc-400 py-1 px-4 ml-2 mb-8"
        name=""
        id=""
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="1">All</option>
        <option value="2">Luxury</option>
        <option value="3">Business</option>
        <option value="4">Crossover</option>
      </select>
      <div className="grid sm:grid-cols-3 md:grid-cols-3">
        {cars
          .filter((car) => {
            switch (filter) {
              case "1":
                return true;
              case "2":
                return car.type.includes("luxury");
              case "3":
                return car.type.includes("business");
              case "4":
                return car.type.includes("crossover");
            }
          })
          .map((car, i) => (
            <SliderCard handleClick={chooseVehicle} {...car} key={i} />
          ))}
      </div>
    </div>
  );
};

export default Vehicles;
