import FooterLink from "./FooterLink";

const FooterLinkColumn = ({ title, links }) => {
  return (
    <div className="text-neutral-400">
      <h2 className="font-semibold text-white my-6">{title}</h2>
      <ul>
        {links.map((link, i) => {
          return (
            <FooterLink link={"#"} key={i}>
              {link}
            </FooterLink>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;
