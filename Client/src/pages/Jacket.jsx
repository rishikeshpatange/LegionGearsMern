import React from "react";
import { Link } from "react-router-dom";

const Jacket = ({ products, isLoading, error }) => {
  const jackets = products.filter((product) => product.category === "jacket");

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Jackets</h2>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mb-4"></div>
          <p>Loading jackets collection...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <div className="text-red-500 font-medium">{error}</div>
        </div>
      ) : jackets.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No jackets available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2px]">
          {jackets.map((jacket, i) => (
            <div key={i} className="bg-white p-1">
              <Link to={`/product/${jacket._id}`} className="block">
                <div className="h-60 sm:h-96 lg:h-[450px] w-full mb-2 overflow-hidden">
                  <img
                    src={jacket.imageUrl}
                    alt={jacket.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">Racing Jacket</p>
                <h3
                  className="font-medium text-base mb-1 mt-1 truncate"
                  title={jacket.name}
                >
                  {jacket.name}
                </h3>
                <p className="font-medium text-sm">₹{jacket.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jacket;