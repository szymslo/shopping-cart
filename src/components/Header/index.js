import React, { useContext } from 'react';
import Context from "../../store/context";

const Header = () => {
    const { globalState, globalDispatch } = useContext(Context);

    return (
        <div className="header">
            <p id="title">Shopping Cart</p>
            <button 
            className="headerbutton"
            onClick={() => {
                    if(globalState.finalamount > 0 && globalState.isCartVisible) {
                      globalDispatch({ type: "CHECKOUT" });
                      alert("Your order has been submitted successfully");
                    }
                    else alert("No items in cart!");
                  }}
            >
            Proceed to checkout
            </button>
        </div>
    )
}

export default Header;