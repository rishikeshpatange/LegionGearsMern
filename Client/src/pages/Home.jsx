import React from "react";
import { Link } from "react-router-dom";

const Home = ({ products }) => {
  const filteredProducts = products.filter(
    (product) => product.category === "jacket"
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Top Banner */}
      <div className="relative">
        <picture>
          <source
            srcSet="/Images/bannerdesktop.jpeg"
            media="(min-width: 768px)"
          />
          <img
            src="/Images/bannerPhone.jpeg"
            alt="Big Poster"
            className="w-full h-auto"
          />
        </picture>
      </div>

      {/* Products Section */}
      <div className="p-5 mt-5">
        <h2 className="text-white text-2xl font-bold">Featured Products</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 p-4">
        {filteredProducts.map((product, i) => (
          <div key={i} className="bg-black p-1">
            <Link to={`/product/${product._id}`}>
            <div className="h-80 sm:h-96 lg:h-[450px] w-full mb-2 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Helmet Info */}
              <h3
                className="text-white font-bold text-l mb-2 mt-2 truncate whitespace-nowrap overflow-hidden text-ellipsis"
                title={product.name}
              >
                {product.name}
              </h3>
              <p className="font-medium text-gray-400  text-l">₹{product.price}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="relative mt-7">
        <picture>
          <source
            srcSet="/Images/banner2desktop.jpeg"
            media="(min-width: 768px)"
          />
          <img
            src="/Images/banner2Phone.jpeg"
            alt="Big Poster"
            className="w-full h-auto"
          />
        </picture>
      </div>
    </div>
  );
};

export default Home;
