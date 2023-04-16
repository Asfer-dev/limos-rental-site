import logo from "../../assets/logo-default.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const Header = () => {
  const [navHidden, setNavHidden] = useState(true);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  }, []);

  useEffect(() => {
    if (screenSize >= 800) setNavHidden(false);
    else setNavHidden(true);
  }, [screenSize]);

  return (
    <header className="container-big py-6 flex justify-between">
      <a href="#">
        <img className="w-28" src={logo} alt="LIMO-logo" />
      </a>
      <nav
        className={
          !navHidden
            ? "absolute z-10 rounded-[1rem] top-20 left-4 right-4 sm:w-96 sm:right-4 sm:left-auto py-8 text-center md:py-0 bg-white md:bg-transparent md:static"
            : "absolute z-10 rounded-[1rem] top-20 left-4 right-4 sm:w-96 sm:right-4 sm:left-auto py-8 text-center md:py-0 bg-white md:bg-transparent md:static hidden"
        }
      >
        <ul className="md:flex md:space-x-12">
          <li className="">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="mt-8 md:mt-0">
            <a className="nav-link" href="#">
              Vehicle
            </a>
          </li>
          <li className="mt-8 md:mt-0">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="mt-8 md:mt-0">
            <a className="nav-link" href="#">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      {screenSize >= 800 && (
        <select name="">
          <option value="english">Eng</option>
        </select>
      )}
      {screenSize < 800 && (
        <button onClick={() => setNavHidden(!navHidden)} className="text-lg">
          {navHidden ? (
            <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
          ) : (
            <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} />
          )}
        </button>
      )}
    </header>
  );
};

export default Header;
