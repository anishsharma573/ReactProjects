import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import BuyPage from './components/BuyPage';
import Cart from './components/Cart';

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex((array) => array.id === item.id);
    if (isAlreadyAdded !== -1) {
      toast("Already added in the cart", {
        type: "error",
      });
      return;
    }
    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Complete", {
      type: 'success',
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      <ToastContainer />
      <div className="flex-1">
        <BuyPage addInCart={addInCart} />
      </div>
      <div className="w-full md:w-1/3">
        <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
      </div>
    </div>
  );
};

export default App;
