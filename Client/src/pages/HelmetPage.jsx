import { Link } from "react-router-dom";

const HelmetPage = ({ products, isLoading, error }) => {
  const helmets = products.filter((product) => product.category === "helmet");

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Helmets</h2>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mb-4"></div>
          <p>Loading helmets...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <div className="text-red-500 font-medium">{error}</div>
        </div>
      ) : helmets.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No helmets available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {helmets.map((helmet, i) => (
            <div key={i} className="bg-white p-2 sm:p-4">
              <Link to={`/product/${helmet._id}`} className="block">
                <div className="bg-gray-100 h-40 sm:h-64 lg:h-80 flex items-center justify-center rounded mb-2 sm:mb-4">
                  <img
                    src={helmet.imageUrl}
                    alt={helmet.name}
                    className="h-full object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Helmet</p>
                <h3
                  className="font-medium text-sm sm:text-xl mb-1 sm:mb-2 mt-1 sm:mt-2 truncate whitespace-nowrap overflow-hidden text-ellipsis"
                  title={helmet.name}
                >
                  {helmet.name}
                </h3>
                <p className="font-medium text-sm sm:text-base">₹{helmet.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HelmetPage;