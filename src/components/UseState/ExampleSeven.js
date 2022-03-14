import React, { useState } from "react";
import "../Component.css";

const ExampleSeven = ({ productList, dummy }) => {
  const [cartList, setCartList] = useState([]);

  const addTocart = (prod) => {
    setCartList([...cartList, prod]);
  };

  return (
    <div>
      <h3>Example 7. Add to Cart</h3>
      <div className="code-sample container">
        <ul>
          {productList.map((prod) => {
            return (
              <li key={prod.id}>
                {prod.name}{" "}
                <button
                  onClick={() => {
                    addTocart(prod);
                  }}
                >
                  Add to cart
                </button>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <h3>Cart</h3>
          </li>
          {cartList?.map((data, index) => {
            return <li key={index}>{data.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExampleSeven;
