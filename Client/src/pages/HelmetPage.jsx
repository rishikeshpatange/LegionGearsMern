import { Link } from "react-router-dom";

const HelmetPage = ({ products, isLoading, error }) => {
  const helmets = products.filter((product) => product.category === "helmet");

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Helmets</h2>

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
          <p>Loading helmets...</p>
        </div>
      ) : helmets.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No helmets available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {helmets.map((helmet, i) => (
            <div key={i} className="bg-white p-1">
              <Link to={`/product/${helmet._id}`} className="block">
                <div className="bg-gray-100 h-94 flex items-center justify-center rounded mb-5">
                  <img
                    src={helmet.imageUrl}
                    alt={helmet.name}
                    className="h-98 object-contain"
                  />
                </div>
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
      )}
    </div>
  );
};

export default HelmetPage;