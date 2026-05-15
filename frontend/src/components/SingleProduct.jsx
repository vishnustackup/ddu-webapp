import { useEffect, useState } from "react";
import { getdata } from "../Api/api";

const SingleProduct = () => {
  const [data, Setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getdata();
        Setdata(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* <h1>{product.name}</h1>
      <h1>{product.price}</h1>

      <h1>{product.color}</h1>
      <p> {product.instock ? "available" : "out of stock"}</p>
      <button onClick={() => book(product.name)}>Click to book</button>

      <form action="">
        <input
          type="text"
          name=""
          id="name"
          placeholder="name"
          onChange={(e) => Setname(e.target.value)}
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <h1>{name}</h1>
      <h1>{password}</h1> */}

      <div>
        {data.map((u, index) => (
          <div key={index}>
            <h1>{u.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
