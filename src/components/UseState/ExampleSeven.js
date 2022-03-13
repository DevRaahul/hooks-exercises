import React from "react";
import "../Component.css";

const ExampleSeven = ({ productList, cartList, addToCart }) => {
  const updateCart = (data) => {
    addToCart(data);
  };

  return (
    <div>
      <h3>Example 7. Add to Cart</h3>
      <div className="code-sample">
        <ul>
          {productList?.map((data) => {
            return (
              <li key={data.id}>
                {data.name} <button onClick={updateCart(data)}>Add to cart</button>
              </li>
            );
          })}
        </ul>
      </div>
      <h3>Cart</h3>
      <div className="code-sample">
        <ul>
          {cartList?.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExampleSeven;
