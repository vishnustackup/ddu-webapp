import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthProvider);

  return (
    <div>
      {user ? (
        <>
          {" "}
          <h1>welcome {user.name}</h1>
          <Link to="/create">blogCreation</Link>
          <Link to="/edit">Edit blog</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
