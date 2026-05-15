const ChildPage = ({ products }) => {
  return (
    <div>
      <h2>from details of child component</h2>
      <h1>{products.name}</h1>
      <h1>{products.color}</h1>
      <h1>{products.price}</h1>
      <span> {products.instock ? "available" : "out of stock"}</span>
    </div>
  );
};

export default ChildPage;
