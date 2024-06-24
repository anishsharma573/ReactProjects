import React from 'react';

const Cart = ({ cartItem, removeItem, buyNow }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItem.length > 0 ? (
        <div>
          {cartItem.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={item.smallImage} alt={item.productName} className="w-12 h-12 object-cover rounded mr-4"/>
                <div>
                  <h3 className="text-lg font-semibold">{item.productName}</h3>
                  <p className="text-gray-700">Price: ${item.productPrice}</p>
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => removeItem(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={buyNow}
          >
            Buy Now
          </button>
        </div>
      ) : (
        <p className="text-gray-700">No items in cart</p>
      )}
    </div>
  );
};

export default Cart;
