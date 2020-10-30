import React, { useContext, useState, useEffect } from "react";
import Context from "../../store/context";

const Summary = () => {
  const { globalState, globalDispatch } = useContext(Context);
  const [shipping, setShipping] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [grandtotal, setGrandtotal] = useState(0);

  useEffect(() => {
    setSubtotal(11.9 * globalState.finalamount);

    if (subtotal <= 100 && globalState.finalamount > 0) {
      setShipping(23.8);
    } else setShipping(0);

    setGrandtotal(subtotal + shipping);
  }, [globalState.finalamount, subtotal, shipping]);

  return (
    <>
      {globalState.isCartVisible && (
        <div className="summary">
          <div className="shipping">
            <p>SHIPPING</p>
            <p>{"$" + shipping.toFixed(2)}</p>
          </div>
          <div className="totals">
            <div className="total">
              <p>CART TOTALS</p>
            </div>
            <div className="subtotals">
              <div className="subtotal">
                <p className="ptot">Subtotal</p>
                <p>{"$" + subtotal.toFixed(2)}</p>
              </div>
              <div className="grandtotal">
                <p className="ptot">Grand Total</p>
                <p className="gtot">{"$" + grandtotal.toFixed(2)}</p>
              </div>
              <div className="divbuttontotals">
                <button
                  className="totalsbutton"
                  onClick={() => {
                    if(globalState.finalamount > 0) {
                      globalDispatch({ type: "CHECKOUT" });
                      alert("Your order has been submitted successfully");
                    }
                    else alert("No items in cart!");
                  }}
                >
                Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Summary;
