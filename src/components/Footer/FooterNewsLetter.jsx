import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const FooterNewsLetter = (props) => {
  return (
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
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000" }} />
        </button>
      </div>
    </form>
  );
};

export default FooterNewsLetter;
