import { useState } from "react";
import CheckoutForm from "./CheckoutForm";

function Basket(props) {
  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }

  const [showForm, setShowForm] = useState(false);

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
      {!showForm && <button onClick={() => setShowForm(true)}>Buy Now</button>}
      {showForm && <CheckoutForm cart={props.cart}></CheckoutForm>}
    </section>
  );
}

export default Basket;
