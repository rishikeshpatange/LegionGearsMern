import { NavLink, Link } from "react-router-dom";

const Home = ({ products, isLoading, error }) => {
  // Filter first 4 motocross products
  const motocrossProducts = products
    ? products
        .filter((product) => product.category === "motocross")
        .slice(0, 4)
    : [];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Video Section */}
      <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="Images/bannerDesktop1.jpeg"
        >
          <source
            src="/Videos/videoPhone.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
          <source
            src="/Videos/videoDesktop.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
          <img
            src="/Images/banner2desktop.jpeg"
            alt="Steeler Limited Edition"
            className="w-full h-full object-cover"
          />
        </video>

        <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 md:pb-16 text-center">
          <div className="w-full max-w-2xl px-4">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Alpinestars MX & Off-Road Collection
            </h2>
            <NavLink to="/motocross">
              <button className="bg-white text-black hover:bg-black hover:text-white py-2 px-6 md:py-3 md:px-8 rounded-none text-sm md:text-base transition-all duration-300">
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>

           {/* Product Categories Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            OUR PRODUCT CATEGORIES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the best gear by riding style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <NavLink to="/racing">
            <div className="group relative overflow-hidden">
              <img
                src="/Images/racing.jpeg"
                alt="racing"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl md:text-2xl font-medium tracking-wider text-center">
                  RACING
                </h3>
              </div>
            </div>
          </NavLink>

          <NavLink to="/sports">
            <div className="group relative overflow-hidden">
              <img
                src="/Images/sports.jpeg"
                alt="sports"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl md:text-2xl font-medium tracking-wider text-center">
                  SPORTS
                </h3>
              </div>
            </div>
          </NavLink>

          <NavLink to="/adventure">
            <div className="group relative overflow-hidden">
              <img
                src="/Images/adventure.jpeg"
                alt="Adventure"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl md:text-2xl font-medium tracking-wider text-center">
                  ADVENTURE
                </h3>
              </div>
            </div>
          </NavLink>

          <div className="group relative overflow-hidden">
            <img
              src="/Images/urban.jpeg"
              alt="urban"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl md:text-2xl font-medium tracking-wider text-center">
                URBAN
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Top Banner */}
      <div className="relative">
        <picture>
          <source
            srcSet="/Images/bannerDesktop1.jpeg"
            media="(min-width: 768px)"
          />
          <img
            src="/Images/bannerphone1.jpeg"
            alt="Big Poster"
            className="w-full h-auto md:h-[560px] object-cover"
          />
        </picture>

        {/* Text & Button Container (Bottom-Aligned) */}
        <div className="absolute bottom-0 left-0 right-0 py-9 text-center">
          <p className="text-white text-xl md:text-4xl font-medium mb-3">
            2025 Touring Collection
          </p>
          <p className="text-white text-sm md:text-sm mb-6">
            Protection and functionality to explore the world.
          </p>
          <NavLink to="/adventure">
            <button className="bg-white text-black hover:bg-black hover:text-white py-2 px-4 md:py-3 md:px-8 rounded-none text-base md:text-sm transition-all duration-100 shadow-lg hover:scale-102">
              NEW ARRIVALS
            </button>
          </NavLink>
        </div>
      </div>


      {/* Motocross Products Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              FEATURED MOTOCROSS GEAR
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-performance protection for your rides
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : motocrossProducts.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              No featured products available
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
              {motocrossProducts.map((product) => (
                <Link
                  to={`/product/${product._id}`}
                  key={product._id}
                  className="group"
                >
                  <div className="bg-gray-50 p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 md:h-64 flex items-center justify-center mb-4">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-sm md:text-base mb-1 truncate">
                      {product.name}
                    </h3>
                    <p className="text-gray-800 font-bold">₹{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <NavLink to="/motocross">
              <button className="bg-black text-white hover:bg-gray-800 py-2 px-6 md:py-3 md:px-8 rounded-none text-sm md:text-base transition-all duration-300">
                VIEW ALL MOTOCROSS PRODUCTS
              </button>
            </NavLink>
          </div>
        </div>
      </div>




 
      {/* Bottom Banner */}
      <div className="relative">
        <picture>
          <source
            srcSet="/Images/banner3desktop.jpeg"
            media="(min-width: 768px)"
          />
          <img
            src="/Images/banner3phone.jpeg"
            alt="Big Poster"
            className="w-full h-auto md:h-[660px] object-cover"
          />
        </picture>

        <div className="absolute bottom-0 left-0 right-0 py-9 text-center">
          <p className="text-white text-xl md:text-4xl font-medium mb-3">
            Bike Collection
          </p>
          <p className="text-white text-sm md:text-sm mb-6 text-wrap">
            Protection, resistance, the utmost freedom to ride. Get ready for
            the trail and park season with Dainese Bike garments.
          </p>
          <button className="bg-white text-black hover:bg-black hover:text-white py-2 px-4 md:py-3 md:px-8 rounded-none text-base md:text-sm transition-all duration-100 shadow-lg hover:scale-102">
            NEW ARRIVALS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;