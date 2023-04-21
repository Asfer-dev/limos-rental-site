import { useEffect } from "react";

const ThankYou = ({ scrollUp }) => {
  useEffect(() => scrollUp(), []);

  return (
    <div className="container-default mt-28">
      <h1 className="text-5xl md:text-7xl font-semibold">Reserved!</h1>
      <p className="text-zinc-600">
        Thank You for choosing us. Your ride is booked!
      </p>
    </div>
  );
};

export default ThankYou;
