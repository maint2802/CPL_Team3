import Logo from "./Logo";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/content">Content</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/todolist">Todolist</NavLink>
    </div>
  );
}

export default Header;
