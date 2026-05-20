import Login from "./components/Auth/Login";
import Createblog from "./components/Blogs/Createblog";
import NavBar from "./components/RoutingSection/NavBar";
import Getdata from "./components/Blogs/Getdata";
// import ProductList from "./components/ProductList";
import "./styles/Hello.css";
import { Routes, Route } from "react-router-dom";
import EditBlog from "./components/Blogs/EditBlog";
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <>
<ToastContainer position="top-right" autoClose={5000}/>
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
