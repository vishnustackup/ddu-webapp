import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
const Homepage = () => {
  return (
    <>
      <h1>homepage</h1>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Homepage;
