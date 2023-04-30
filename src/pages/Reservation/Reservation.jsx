import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ReservationContext from "../../contexts/ReservationContext";

const Reservation = ({ scrollUp, selectedVehicle }) => {
  useEffect(() => scrollUp(), []);

  const { reservationInfo, handleInput } = useContext(ReservationContext);
  console.log(reservationInfo);

  return (
    <div className="reservation container-default text-center md:text-left mt-28">
      <h1 className="text-5xl md:text-7xl font-semibold">Reservation</h1>
      <div className="my-8 rounded-[1.5rem] overflow-hidden bg-white shadow-default grid md:grid-cols-2 gap-6">
        <div className="bg-zinc-100 px-4 flex justify-center items-center">
          <img src={selectedVehicle.image} alt="selected-vehicle" />
        </div>
        <form className="p-8">
          <label className="mb-1 block font-medium" htmlFor="pick-up">
            Pick Up:
          </label>
          <input
            onChange={(e) => handleInput(e)}
            value={reservationInfo.pickup}
            placeholder="Pick Up Address"
            type="text"
            name="pickup"
            id="pick-up"
          />
          <label className="mb-1 block font-medium" htmlFor="drop-off">
            Drop Off:
          </label>
          <input
            onChange={(e) => handleInput(e)}
            value={reservationInfo.dropoff}
            placeholder="Drop Off Address"
            type="text"
            name="dropoff"
            id="drop-off"
          />
          <label className="mb-1 block font-medium" htmlFor="one-way">
            One/Two way:
          </label>
          <select
            className="bg-gray-100 mb-3 rounded-[0.6rem] py-2 px-4 w-full"
            style={{ appearance: "none" }}
            disabled
            name=""
            id="one-way"
          >
            <option value="one_way">One Way</option>
          </select>
          <label className="mb-1 block font-medium" htmlFor="date">
            Choose Date:
          </label>
          <input
            onChange={(e) => handleInput(e)}
            value={reservationInfo.date}
            type="date"
            name="date"
            id="date"
          />
          <label className="mb-1 block font-medium" htmlFor="time">
            Choose Time:
          </label>
          <input
            onChange={(e) => handleInput(e)}
            value={reservationInfo.time}
            className=""
            type="time"
            name="time"
            id="time"
          />
        </form>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between px-8">
        <Link to={"/vehicles"}>
          <Button>
            <FontAwesomeIcon icon={faArrowLeft} className="text-white mr-4" />
            Select Vehicle
          </Button>
        </Link>
        <Link to={"/thankyou"}>
          <Button>Reserve Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Reservation;
