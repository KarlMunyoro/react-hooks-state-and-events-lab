import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  const appclass = cart? "in-cart":""

  return (
    <li className={appclass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setCart(x => !x)}>{cart? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
