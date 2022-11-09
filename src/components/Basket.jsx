function Basket(props) {
  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }

  return (
    <section className="Basket">
      <h3>Your cart:</h3>
      <ul>
        {props.cart.map((item) => (
          <li key={item.id}>
            {item.productdisplayname} x {item.amount}, {item.amount * item.price},-
            <button onClick={() => props.removeFromCart(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <h3>Total: {getTotal()},-</h3>
      <button>Buy Now</button>
    </section>
  );
}

export default Basket;
