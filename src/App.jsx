// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Vehicles from "./pages/Vehicles/Vehicles";
import Reservation from "./pages/Reservation/Reservation";
import ThankYou from "./pages/ThankYou/ThankYou";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import BackToTopButton from "./components/BackToTopButton";
import { useState } from "react";
import cars from "./data/cars";

function App() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [selectedVehicle, setSelectedVehicle] = useState(cars[0]);

  const [reservationInfo, setReservationInfo] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              scrollUp={scrollUp}
              setSelectedVehicle={setSelectedVehicle}
              reservationInfo={reservationInfo}
              setReservationInfo={setReservationInfo}
            />
          }
        />
        <Route
          path="/services"
          element={<ServicesPage scrollUp={scrollUp} />}
        />
        <Route
          path="/vehicles"
          element={
            <Vehicles
              scrollUp={scrollUp}
              selectedVehicle={selectedVehicle}
              setSelectedVehicle={setSelectedVehicle}
            />
          }
        />
        <Route
          path="/reservation"
          element={
            <Reservation
              scrollUp={scrollUp}
              selectedVehicle={selectedVehicle}
              reservationInfo={reservationInfo}
              setReservationInfo={setReservationInfo}
            />
          }
        />
        <Route path="/thankyou" element={<ThankYou scrollUp={scrollUp} />} />
        <Route path="*" element={<NotFound scrollUp={scrollUp} />} />
      </Routes>

      <Footer />
      <BackToTopButton scrollUp={scrollUp} />
    </>
  );
}

export default App;
