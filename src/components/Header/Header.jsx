import logo from "../../assets/logo-default.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import PrimaryNav from "./PrimaryNav";
import LanguageSelector from "./LanguageSelector";
const Header = () => {
  const screenMd = 800;

  // shodow for header only when the page is a bit scrolled down
  const [shadowVisible, setShadowVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) setShadowVisible(true);
      else setShadowVisible(false);
    });
  }, []);

  // state for knowing when the navigation bar is hidden or not(for mobile)
  const [navHidden, setNavHidden] = useState(true);

  // state for the width of the screen
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // setting the screen size every time the window is resized
  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  }, []);

  // always showing the navigation once the desktop size is reached because there's enough space on the page
  useEffect(() => {
    if (screenSize >= screenMd) setNavHidden(false);
    else setNavHidden(true);
  }, [screenSize]);

  return (
    <header
      className={`py-6 fixed z-10 bg-white left-0 right-0 top-0 ${
        shadowVisible && "shadow-default"
      }`}
    >
      <div className="container-big flex justify-between">
        <a href="/">
          <img className="w-28" src={logo} alt="LIMO-logo" />
        </a>
        <PrimaryNav screenSize={screenSize} navHidden={navHidden} />

        {screenSize >= screenMd && <LanguageSelector />}

        {screenSize < screenMd && (
          <button onClick={() => setNavHidden(!navHidden)} className="text-lg">
            <FontAwesomeIcon
              icon={navHidden ? faBars : faXmark} // replacing the hamburger icon with the close button once the nav bar is displayed
              style={{ color: "#000000" }}
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
