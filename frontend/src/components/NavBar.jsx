
const NavBar = ({ user }) => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red", color: "white" }}>from navbar</h1>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
    </div>
  );
};

export default NavBar;
