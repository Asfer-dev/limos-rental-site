const FeatureCard = ({ featureIcon, heading, text }) => {
  return (
    <div className="feature-card w-[200px] mx-auto">
      <img className="mb-5" src={featureIcon} alt="feature-illustration" />
      <h2 className="mb-2 text-lg font-medium">{heading}</h2>
      <p className="text-neutral-600 text-sm">{text}</p>
    </div>
  );
};

export default FeatureCard;
