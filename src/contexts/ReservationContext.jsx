import { createContext, useState } from "react";

export const ReservationContext = createContext(null);

export const ReservationContextProvider = ({ children }) => {
  const [reservationInfo, setReservationInfo] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  const handleInput = (e) => {
    setReservationInfo({ ...reservationInfo, [e.target.name]: e.target.value });
  };

  return (
    <ReservationContext.Provider value={{ reservationInfo, handleInput }}>
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationContext;
