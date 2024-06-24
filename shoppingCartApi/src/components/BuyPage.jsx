import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker';

const localUrl = "https://randomuser.me/api/?results=6";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhoto = async () => {
    try {
      const { data } = await axios.get(localUrl);
      const { results } = data;

      const allProducts = results.map(result => ({
        smallImage: result.picture.large,
        productName: faker.word.sample(),
        productPrice: faker.commerce.price(),
        id: faker.string.uuid()
      }));
      setProduct(allProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Buy Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map(item => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.smallImage} alt={item.productName} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.productName}</h2>
              <p className="text-gray-700">Price: ${item.productPrice}</p>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => addInCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyPage;
