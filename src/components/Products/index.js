import React, { useState, useContext } from "react";
import Context from "../../store/context";

const Products = () => {
  const [amount, setAmount] = useState(0);
  const { globalState, globalDispatch } = useContext(Context);

  return (
    <div className="products">
      <div className="pheader">
        <div id="empty"></div>
        <p>Product Name</p>
        <p>Unit Price</p>
        <p>Qty</p>
      </div>
      {globalState.isProductVisible && (
        <div className="pdetail">
          <div className="product">
            <button
              aria-expanded="false"
              className="iconbutton"
              onClick={() => globalDispatch({ type: "HIDE_PRODUCT" })}
            >
              <img alt="icon" src="x-img.png" />
            </button>
            <img className="image" src="headphones.png" alt="headphones" />
          </div>
          <div>Headphones</div>
          <div>$11.90</div>
          <div className="product">
            <button
              className="counterbutton"
              onClick={() => {
                if (amount > 0) setAmount(amount - 1);
              }}
            >
              -
            </button>
            <p className="itemcount">{amount}</p>
            <button
              className="counterbutton"
              onClick={() => setAmount(amount + 1)}
            >
              +
            </button>
            <button
              aria-expanded="false"
              className="iconbutton"
              onClick={() =>
                globalDispatch({ type: "UPDATE_AMOUNT", payload: amount })
              }
            >
              <img alt="icon" src="edit-img.png" />
            </button>
          </div>
        </div>
      )}
      <div className="divbuttonproduct">
        <button
          className="productsbutton"
          onClick={() =>
            globalDispatch({ type: "UPDATE_AMOUNT", payload: amount })
          }
        >
          Update Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
