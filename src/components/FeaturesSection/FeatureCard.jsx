import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const FeatureCard = ({ featureIcon, heading, text }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="feature-card w-[200px] mx-auto" data-aos="fade-left">
      <img className="mb-5" src={featureIcon} alt="feature-illustration" />
      <h2 className="mb-2 text-lg font-medium">{heading}</h2>
      <p className="text-neutral-600 text-sm">{text}</p>
    </div>
  );
};

export default FeatureCard;
