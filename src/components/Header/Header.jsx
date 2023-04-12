import logo from "../../assets/logo-default.png";
const Header = () => {
  return (
    <header className="container-big py-6 flex justify-between">
      <img className="w-28 h-full" src={logo} alt="" />
      <nav className="absolute rounded-[1rem] top-12 left-4 right-4 py-8 text-center md:py-0 bg-white md:bg-transparent md:static">
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
      <select name="" id="">
        <option value="english">Eng</option>
      </select>
    </header>
  );
};

export default Header;
