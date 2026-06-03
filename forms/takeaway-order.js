import { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Order Successful! Your order was ${order}.Please show your confirmation number for pickup.
    `);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="number"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      ></input>
      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      ></input>
      <label htmlFor="order">Order</label>
      <input
        id="order"
        name="order"
        type="text"
        onChange={(e) => setOrder(e.target.value)}
        value={order}
      ></input>

      <button type="submit">Submit Order</button>
    </form>
  );
}

export default FoodOrderForm;
