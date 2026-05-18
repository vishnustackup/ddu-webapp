import Login from "./components/Auth/Login";
import Createblog from "./components/Blogs/Createblog";
import NavBar from "./components/RoutingSection/NavBar";
import Getdata from "./components/Blogs/Getdata";
// import ProductList from "./components/ProductList";
import "./styles/Hello.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EditBlog from "./components/Blogs/EditBlog";
function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/create" element={<Createblog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allposts" element={<Getdata/>}/>
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </>
  );
}
export default App;
