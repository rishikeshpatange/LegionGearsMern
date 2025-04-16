// src/pages/SingleProduct.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://legiongearsmern.onrender.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt={product.name}
        className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded bg-gray-100 p-4"
        src={product.imageUrl}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      <p>Racing helmet</p>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
        <p className="leading-relaxed mb-4 text-gray-600">{product.description || "No description provided."}</p>
        <div className="flex items-center mb-4">
          <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
        </div>
        <button
          className="flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</section>


    
  );
};

export default SingleProduct;
