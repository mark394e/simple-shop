import Product from "./Product";

function ProductList(props) {
  return (
    <main className="ProductList">
      {props.products.map((product) => (
        <Product key={product.id} data={product} addToCart={props.addToCart}></Product>
      ))}
    </main>
  );
}

export default ProductList;
