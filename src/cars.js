import imgBenzSClass from "./assets/cars/car-benz-s-class.png";
import imgBenzVClass from "./assets/cars/car-benz-v-class.png";
import imgAudiA8 from "./assets/cars/car-audi-a8.png";
import imgEscalade from "./assets/cars/car-cadillac-escalade.png";
const cars = [
  {
    id: 1,
    name: "Mersedes Benz S Class",
    image: imgBenzSClass,
    seats: 2,
    luggage: 2,
    type: ["luxury"],
  },
  {
    id: 2,
    name: "Mersedes Benz V Class",
    image: imgBenzVClass,
    seats: 6,
    luggage: 4,
    type: ["crossover"],
  },
  {
    id: 3,
    name: "Audi A8",
    image: imgAudiA8,
    seats: 2,
    luggage: 2,
    type: ["business"],
  },
  {
    id: 4,
    name: "Cadillac Escalade",
    image: imgEscalade,
    seats: 4,
    luggage: 4,
    type: ["luxury", "business"],
  },
];

export default cars;
