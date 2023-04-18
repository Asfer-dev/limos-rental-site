const FooterLink = ({ link, children }) => {
  return (
    <li className="mb-2">
      <a className="hover:text-white transition" href={link}>
        {children}
      </a>
    </li>
  );
};

export default FooterLink;
