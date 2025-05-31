import { Link } from "react-router-dom";

const Adventure = ({ products, isLoading, error }) => {
  const adventureProducts = products.filter((product) => product.category === "adventure");

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Adventure</h2>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mb-4"></div>
          <p>Loading adventure gear...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <div className="text-red-500 font-medium">{error}</div>
        </div>
      ) : adventureProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No adventure products available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {adventureProducts.map((product, i) => (
            <div key={i} className="bg-white p-2 sm:p-4">
              <Link to={`/product/${product._id}`} className="block">
                <div className="bg-gray-100 h-40 sm:h-64 lg:h-90 flex items-center justify-center rounded mb-2 sm:mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Adventure Helmet</p>
                <h3
                  className="font-medium text-sm sm:text-xl mb-1 sm:mb-2 mt-1 sm:mt-2 truncate whitespace-nowrap overflow-hidden text-ellipsis"
                  title={product.name}
                >
                  {product.name}
                </h3>
                <p className="font-medium text-sm sm:text-base">₹{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Adventure;