import logoFooter from "../../assets/logo-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterLink from "./FooterLink";

const Footer = () => {
  const linkCols = [
    {
      title: "Top cities",
      links: ["New York", "London", "Berlin", "Los Angeles", "Paris"],
    },
    {
      title: "Explore",
      links: [
        "Intercity rides",
        "Limousine service",
        "Chauffeur service",
        "Private car service",
        "Airport transfers",
      ],
    },
    {
      title: "Intercity rides",
      links: [
        "East Hampton - New York",
        "New York - Washington",
        "New York - Philadelphia",
        "Abu Dhabi - Dubai",
        "London - Birmingham",
      ],
    },
  ];

  const socialIcons = [
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
  ];

  return (
    <footer className="container-big text-center md:text-left bg-neutral-800 text-sm font-light text-white rounded-[1.5rem] flex flex-col items-center md:block mt-20 mb-[2.5vw] py-12 md:px-20">
      <div className="flex flex-col md:flex-row gap-8 md:justify-between mb-12">
        <div>
          <img className="w-28 mb-16" src={logoFooter} alt="logo" />
          <FooterNewsLetter />
        </div>

        <div className="footer-links flex flex-col md:flex-row md:justify-between md:w-2/3">
          {linkCols.map((col) => (
            <FooterLinkColumn {...col} />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <p className="font-medium mb-2">&copy; 2023 LIMOS</p>

        <ul className="bottom-links flex flex-col md:flex-row gap-4 text-neutral-400 font-normal">
          <FooterLink link={"#"}>Terms</FooterLink>
          <FooterLink link={"#"}>Privacy policy</FooterLink>
          <FooterLink link={"#"}>Legal notice</FooterLink>
          <FooterLink link={"#"}>Accessibility</FooterLink>
        </ul>

        <ul className="social-links text-2xl flex gap-6">
          {socialIcons.map((icon) => (
            <FooterLink link="#">
              <FontAwesomeIcon
                className="text-neutral-400 hover:text-white transition"
                icon={icon}
              />
            </FooterLink>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
