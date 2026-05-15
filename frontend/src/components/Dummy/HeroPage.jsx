import { useState } from "react";
import ChildPage from "./ChildPage";

const HeroPage = () => {
  const [data, setdata] = useState("hello world");
  const product = {
    name: "toycar",
    color: "red",
    price: 400,
    instock: false,
  };
  return (
    <div>
      <h1>Hero parent component</h1>
      <ChildPage products={product} />

      <h1>{data}</h1>
      <button onClick={() => setdata("he  how are you")}>increment</button>
    </div>
  );
};

export default HeroPage;
