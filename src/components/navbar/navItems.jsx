import { Link } from "react-router-dom";
import { navItems } from "../../assets/data/navItems";

const NavItems = () => {
  return (
    <ul>
      {navItems.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
