import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/user">User</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
    </ul>
  );
};
export default Header;
