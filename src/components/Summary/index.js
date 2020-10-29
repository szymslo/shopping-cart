import React from "react";

const Summary = () => {
  return (
    <div className="summary">
      <div className="shipping">
        <p>SHIPPING</p>
        <p>$23.80</p>
      </div>
      <div className="totals">
        <div className="total">
          <p>CART TOTALS</p>
        </div>
        <div className="subtotals">
          <div className="subtotal">
            <p className="ptot">Subtotal</p>
            <p>$23.80</p>
          </div>
          <div className="grandtotal">
            <p className="ptot">Grand Total</p>
            <p className="gtot">$23.80</p>
          </div>
          <div className="divbuttontotals">
            <button className="totalsbutton">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
