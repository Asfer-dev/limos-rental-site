const Tabs = ({ handleClick, active }) => {
  return (
    <div className="tabs text-center mb-12">
      <button
        className={active === 1 ? "active" : ""}
        onClick={() => handleClick(1)}
      >
        All
      </button>
      <button
        className={active === 2 ? "active" : ""}
        onClick={() => handleClick(2)}
      >
        Luxury
      </button>
      <button
        className={active === 3 ? "active" : ""}
        onClick={() => handleClick(3)}
      >
        Business
      </button>
      <button
        className={active === 4 ? "active" : ""}
        onClick={() => handleClick(4)}
      >
        Crossover
      </button>
    </div>
  );
};

export default Tabs;
