import LanguageSelector from "./LanguageSelector";

const PrimaryNav = ({ navHidden, screenSize }) => {
  return (
    <nav
      className={`absolute z-10 rounded-[1rem] top-20 left-4 right-4 sm:w-96 sm:right-4 sm:left-auto py-8 text-center md:py-0 bg-white md:bg-transparent md:static ${
        navHidden && "hidden"
      }`}
    >
      <ul className="flex flex-col md:flex-row gap-16 mb-8 md:mb-0 justify-center">
        <li className="">
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li className="">
          <a className="nav-link" href="#">
            Vehicle
          </a>
        </li>
        <li className="">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        <li className="">
          <a className="nav-link" href="#">
            Contacts
          </a>
        </li>
      </ul>

      {/* Language Selector changes its place from header to nav bar at smaller screen sizes */}
      {screenSize < 800 && <LanguageSelector />}
    </nav>
  );
};

export default PrimaryNav;
