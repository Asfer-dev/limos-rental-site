import logoFooter from "../../assets/logo-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="container-big text-center md:text-left bg-neutral-800 text-sm font-light text-white rounded-[1.5rem] flex flex-col items-center md:block mt-16 mb-8 py-12 md:px-20">
      <div className="flex flex-col md:flex-row gap-8 md:justify-between mb-12">
        <div>
          <img className="w-28 mb-16" src={logoFooter} alt="logo" />
          <form className="newsletter">
            <label className="" htmlFor="email">
              Subscribe to the newsletter
            </label>
            <div className="flex items-center mt-4">
              <input
                className="bg-neutral-700 text-white placeholder:text-neutral-400 block py-3 px-4 pr-8 rounded-[0.4rem]"
                type="email"
                placeholder="Email..."
                name=""
                id="email"
              />
              <button
                className="bg-white text-black w-[38px] h-[38px] rounded-[0.4rem] -ml-[41px]"
                type="submit"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#000000" }}
                />
              </button>
            </div>
          </form>
        </div>
        <div className="footer-links flex flex-col md:flex-row md:justify-between md:w-2/3">
          <div className="column-1 text-neutral-400">
            <h2 className="font-semibold text-white my-6">Top cities</h2>
            <ul>
              <li>
                <a href="#">New York</a>
              </li>
              <li>
                <a href="#">London</a>
              </li>
              <li>
                <a href="#">Berlin</a>
              </li>
              <li>
                <a href="#">Los Angeles</a>
              </li>
              <li>
                <a href="#">Paris</a>
              </li>
            </ul>
          </div>
          <div className="column-2 text-neutral-400">
            <h2 className="font-semibold text-white my-6">Explore</h2>
            <ul>
              <li>
                <a href="#">Intercity rides</a>
              </li>
              <li>
                <a href="#">Limousine service</a>
              </li>
              <li>
                <a href="#">Chauffeur service</a>
              </li>
              <li>
                <a href="#">Private car service</a>
              </li>
              <li>
                <a href="#">Airport transfers</a>
              </li>
            </ul>
          </div>
          <div className="column-3 text-neutral-400">
            <h2 className="font-semibold text-white my-6">Top cities</h2>
            <ul>
              <li>
                <a href="#">East Hampton - New York</a>
              </li>
              <li>
                <a href="#">New York - Washington</a>
              </li>
              <li>
                <a href="#">New York - Philadelphia</a>
              </li>
              <li>
                <a href="#">Abu Dhabi - Dubai</a>
              </li>
              <li>
                <a href="#">London - Birmingham</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <p className="font-medium mb-2">&copy; 2023 LIMOS</p>
        <ul className="bottom-links flex flex-col md:flex-row gap-4 text-neutral-400 font-normal">
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Legal notice</a>
          </li>
          <li className="mb-4 md:mb-0">
            <a href="#">Accessibility</a>
          </li>
        </ul>
        <ul className="social-links text-2xl flex gap-6">
          <li>
            <a href="#">
              <FontAwesomeIcon
                className="text-neutral-400 hover:text-white transition"
                icon={faYoutube}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                className="text-neutral-400 hover:text-white transition"
                icon={faFacebook}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                className="text-neutral-400 hover:text-white transition"
                icon={faTwitter}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                className="text-neutral-400 hover:text-white transition"
                icon={faInstagram}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon
                className="text-neutral-400 hover:text-white transition"
                icon={faLinkedin}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
