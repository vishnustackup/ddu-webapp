import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/create">blogCreation</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default NavBar;
