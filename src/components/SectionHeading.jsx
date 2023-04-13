const SectionHeading = ({ title, text }) => {
  return (
    <div className="mb-16 text-center space-y-4 md:space-y-0 md:flex md:space-x-16 justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
      <p className="md:w-[41ch] text-neutral-600 text-justify">{text}</p>
    </div>
  );
};

export default SectionHeading;
