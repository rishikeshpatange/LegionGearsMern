import { Link } from "react-router-dom";

const Sports = ({ products, isLoading, error }) => {
  const sportProducts = products.filter(product => product.category === "sport");

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Sports</h2>

      {error ? (
        <div className="text-center py-10">
          <div className="text-red-500 font-medium mb-2">{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      ) : isLoading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mb-4"></div>
          <p>Loading sports gear...</p>
        </div>
      ) : sportProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No sports products available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {sportProducts.map((product, i) => (
            <div key={i} className="bg-white p-4">
              <Link to={`/product/${product._id}`} className="block">
                <div className="bg-gray-100 h-94 flex items-center justify-center rounded mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-98 object-contain"
                  />
                </div>
                <p className="text-gray-600">Sports Helmet</p>
                <h3
                  className="font-medium text-xl mb-2 mt-2 truncate whitespace-nowrap overflow-hidden text-ellipsis"
                  title={product.name}
                >
                  {product.name}
                </h3>
                <p className="font-medium">₹{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sports;