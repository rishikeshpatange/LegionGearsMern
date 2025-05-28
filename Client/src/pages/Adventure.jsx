import { Link } from "react-router-dom";

const Adventure = ({ products }) => {
  const Adventure = products.filter((product) => product.category === "adventure");

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Adventure</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {Adventure.map((Adventure, i) => (
          <div key={i} className="bg-white p-4 ">
            <Link to={`/product/${Adventure._id}`} className="block">
              <div className="bg-gray-100 h-94 flex items-center justify-center rounded mb-4">
                <img
                  src={Adventure.imageUrl}
                  alt={Adventure.name}
                  className="h-98 object-contain"
                />
              </div>

              {/* Helmet Info */}
              <p className="text-gray-600">Adventure Helmet</p>
              <h3
                className="font-medium text-xl mb-2 mt-2 truncate whitespace-nowrap overflow-hidden text-ellipsis"
                title={Adventure.name}
              >
                {Adventure.name}
              </h3>
              <p className="font-medium">₹{Adventure.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventure;