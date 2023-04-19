import { useLocation } from "react-router-dom";
import Button from "../../components/Button";

const Reservation = () => {
  const location = useLocation();

  return (
    <div className="reservation container-default text-center md:text-left mt-28">
      <h1 className="text-5xl md:text-7xl font-semibold">Reservation</h1>
      <div className="my-8 rounded-[1.5rem] bg-white shadow-lg grid md:grid-cols-2 gap-6">
        <div className="bg-zinc-100 px-4 flex justify-center items-center rounded-l-[1.5rem]">
          <img src={location.state.image} alt="selected-vehicle" />
        </div>
        <form className="p-8">
          <label className="mb-1 block font-medium" htmlFor="pick-up">
            Pick Up:
          </label>
          <input placeholder="Pick Up Address" type="text" id="pick-up" />
          <label className="mb-1 block font-medium" htmlFor="drop-off">
            Drop Off:
          </label>
          <input placeholder="Drop Off Address" type="text" id="drop-off" />
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
          <input type="date" id="date" />
          <label className="mb-1 block font-medium" htmlFor="time">
            Choose Time:
          </label>
          <input className="mb-8" type="time" id="time" />
          <Button>Reserve Now</Button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;