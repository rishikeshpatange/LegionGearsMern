import React from "react";
import { Link } from "react-router-dom";

const Jacket = ({ products }) => {
  const helmets = products.filter((product) => product.category === "jacket");

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Jackets</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px]">
        {helmets.map((helmet, i) => (
          <div key={i} className="bg-white p-1">
            <Link to={`/product/${helmet._id}`}>
              <div className="h-80 sm:h-96 lg:h-[450px] w-full mb-2 overflow-hidden">
                <img
                  src={helmet.imageUrl}
                  alt={helmet.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Helmet Info */}
              <p className="text-gray-600 text-sm">Racing Helmet</p>
              <h3
                className="font-medium text-base mb-1 mt-1 truncate"
                title={helmet.name}
              >
                {helmet.name}
              </h3>
              <p className="font-medium text-sm">₹{helmet.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jacket;
