import Login from "./components/Auth/Login";
import Createblog from "./components/Blogs/Createblog";
import NavBar from "./components/RoutingSection/NavBar";
import Getdata from "./components/Getdata";
// import ProductList from "./components/ProductList";
import "./styles/Hello.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
    

       <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
      

        <Route path="/" element={<NavBar />} />
        <Route path="/create" element={<Createblog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allposts" element={<Getdata />} />
      </Routes>
    </>
  );
}
export default App;
