// import Card from "./components/Card";
import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import "./styles/Hello.css";

function App() {
  const user = {
    name:'anoop',
    age:23
  }
  return (
    <div>
      <NavBar user={user}/>
      <Grid />
    </div>
  );
}
export default App;
