import Button from "../Button";

const Reservation = () => {
  return (
    <form className="w-[320px] p-8 absolute bottom-24 right-16 shadow-lg bg-white rounded-[1rem] text-left text-[15px]">
      <input placeholder="Pick Up Address" type="text" />
      <input placeholder="Drop Off Address" type="text" />
      <select
        className="bg-gray-100 mb-3 rounded-[0.6rem] py-2 px-4 w-full"
        style={{ appearance: "none" }}
        disabled
        name=""
        id=""
      >
        <option value="one_way">One Way</option>
      </select>
      <input type="date" />
      <div className="flex space-x-4 items-center">
        <label className="text-gray-700 w-5/6 mb-3" htmlFor="time">
          Pick Up Time
        </label>
        <input type="time" id="time" />
      </div>
      <Button>Reserve Now</Button>
    </form>
  );
};

export default Reservation;
