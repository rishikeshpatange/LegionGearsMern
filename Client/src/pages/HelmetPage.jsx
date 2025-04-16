import React from "react";
import { Link } from "react-router-dom";

const HelmetPage = ({ products }) => {
  const helmets = products.filter((product) => product.category === "helmet");

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Helmets</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {helmets.map((helmet, i) => (
          <div key={i} className="bg-white p-1">
            <Link to={`/product/${helmet._id}`}>
              <div className="bg-gray-100 h-94 flex items-center justify-center rounded mb-5">
                <img
                  src={helmet.imageUrl}
                  alt={helmet.name}
                  className="h-98 object-contain"
                />
              </div>

              {/* Helmet Info */}
              <p className="text-gray-600">Racing Helmet</p>
              <h3
                className="font-medium text-xl mb-2 mt-2 truncate whitespace-nowrap overflow-hidden text-ellipsis"
                title={helmet.name}
              >
                {helmet.name}
              </h3>
              <p className="font-medium">₹{helmet.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelmetPage;
