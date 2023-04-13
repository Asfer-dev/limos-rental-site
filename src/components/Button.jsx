const Button = ({ children }) => {
  return (
    <button className="bg-black hover:bg-neutral-800 transition text-sm font-light text-white rounded-[0.6rem] py-3 px-8">
      {children}
    </button>
  );
};

export default Button;
