import imgBenzSClass from "../assets/cars/car-benz-s-class.png";
import imgBenzVClass from "../assets/cars/car-benz-v-class.png";
import imgAudiA8 from "../assets/cars/car-audi-a8.png";
import imgEscalade from "../assets/cars/car-cadillac-escalade.png";
import imgRoyce from "../assets/cars/car-rolls-royce-ghost.png";
const cars = [
  {
    id: 1,
    name: "Mersedes Benz S Class",
    detail:
      "The campaign for the new S-Class provides authentic insights into the lives of Alicia Keys, Lewis Hamilton and Roger Federer. The spot shows what “Cares for what matters” really means to our testimonials.",
    image: imgBenzSClass,
    seats: 2,
    luggage: 2,
    type: ["luxury"],
  },
  {
    id: 2,
    name: "Mersedes Benz V Class",
    detail:
      "The V-Class impresses with its modern design and high-class appeal – both inside and out. Strong character lines and high-quality materials as well as the attractive operating and display concept make it a highly desirable vehicle.",
    image: imgBenzVClass,
    seats: 6,
    luggage: 4,
    type: ["crossover"],
  },
  {
    id: 3,
    name: "Audi A8",
    detail:
      "Live the future with us. A design that takes elegance and dynamics to a new level, with numerous assistance systems, a new operating concept that offers a new level of intuitive use, and above all more space. Configure your own personal space in the back, more flexible and comfortable than ever before, and experience even greater luxury in the new Audi A8 L.",
    image: imgAudiA8,
    seats: 2,
    luggage: 2,
    type: ["business"],
  },
  {
    id: 4,
    name: "Cadillac Escalade",
    detail:
      "Exciting, bold, iconic—move through the world in a vehicle befitting your status. In motion and at rest, Escalade demands attention with exceptional physicality and magnificent design. Witness as luxury transforms into legendary.",
    image: imgEscalade,
    seats: 4,
    luggage: 4,
    type: ["luxury", "business", "crossover"],
  },
  {
    id: 5,
    name: "Rolls Royce Ghost",
    detail:
      "The Rolls-Royce Ghost is a luxury sedan known for its elegance, comfort, and performance. The Ghost also comes equipped with advanced technology, such as a 12.3-inch infotainment screen, adaptive headlights. Additionally, the interior is crafted from high-quality materials, including soft leather and real wood trim, providing a refined and luxurious experience for passengers.",
    image: imgRoyce,
    seats: 5,
    luggage: 5,
    type: ["luxury", "business", "crossover"],
  },
];

export default cars;
