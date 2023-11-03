import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
}
