import SingleProduct from "./SingleProduct"

const ProductList = () => {
    const product={
        name:'car toy',
        price:400,
        color:'red',
        instock:true
    }
    const book = (item)=>{
        alert(`you have booked this${item} `)
    }
  return (
    <div>
      <h1>Products</h1>
       <SingleProduct product={product} book={book}/>
    </div>
  )
}

export default ProductList
