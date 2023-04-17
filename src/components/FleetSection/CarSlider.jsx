import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cars from "../../cars";
import SliderCard from "./SliderCard";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const CarSlider = ({ activeTab }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 800, min: 480 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div data-aos="fade-left">
      <Carousel
        responsive={responsive}
        showDots={true}
        partialVisible={true}
        swipeable={true}
        draggable={true}
      >
        {cars
          .filter((car) => {
            switch (activeTab) {
              case 1:
                return true;
              case 2:
                return car.type.includes("luxury");
              case 3:
                return car.type.includes("business");
              case 4:
                return car.type.includes("crossover");
            }
          })
          .map((car, i) => (
            <SliderCard {...car} index={i} key={car.id} />
          ))}
      </Carousel>
    </div>
  );
};

export default CarSlider;
