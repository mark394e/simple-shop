import { useRef } from "react";
import { insertOrder } from "./modules/db";

function CheckoutForm(props) {
  const theForm = useRef(null);

  function submit(e) {
    // forhindre submit i at refresh hele siden ved klik på knap
    e.preventDefault();
    theForm.current.elements.name.value;
    // object det bliver POST'et til database
    insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      basket: props.cart,
    });
  }

  return (
    <form onSubmit={submit} ref={theForm}>
      <div className="form-control">
        <label htmlFor="form-name">Name</label>
        <input required type="text" name="name" id="form-name" />
      </div>
      <div className="form-control">
        <label htmlFor="form-email">E-mail</label>
        <input required type="email" name="email" id="form-email" />
      </div>
      <div className="form-control">
        <label htmlFor="form-address">Address</label>
        <textarea required name="address" id="form-address" cols="20" rows="5"></textarea>
      </div>
      <button>Pay</button>
    </form>
  );
}

export default CheckoutForm;
