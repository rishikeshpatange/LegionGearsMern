import { NavLink } from "react-router-dom";

const Home = () => {
  // const filteredProducts = products.filter(
  //   (product) => product.category === "jacket"
  // );

  return (
    <div className="min-h-screen bg-white">
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
        <div className="absolute bottom-0 left-0 right-0  py-9 text-center">
          {/* Text Above Button */}
          <p className="text-white text-xl md:text-4xl font-medium mb-3">
            2025 Touring Collection
          </p>
          <p className="text-white text-sm md:text-sm  mb-6">
            Protection and functionality to explore the world.
          </p>

          {/* Buy Now Button */}
            <NavLink to="/adventure">
          <button className="bg-white  text-black hover:bg-black hover:text-white  py-2 px-4 md:py-3 md:px-8 rounded-none text-base md:text-sm transition-all duration-100 shadow-lg hover:scale-102">
            NEW ARIVALS
          </button>
          </NavLink>
        </div>
      </div>

      {/* Products Section */}

      <div className="container mx-auto px-4 py-12">
        {/* Centered Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            OUR PRODUCT CATEGORIES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the best gear by riding style
          </p>
        </div>

        {/* Image Grid - 1 row on desktop, 2x2 on mobile/tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Item 1 - Racing */}

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

          {/* Item 2 - Sport */}
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

          {/* Item 3 - Touring */}
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

          {/* Item 4 - Urban */}
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

        {/* Text & Button Container (Bottom-Aligned) */}
        <div className="absolute bottom-0 left-0 right-0  py-9 text-center">
          {/* Text Above Button */}
          <p className="text-white text-xl md:text-4xl font-medium mb-3">
            Bike Collection
          </p>
          <p className="text-white text-sm md:text-sm  mb-6 text-wrap">
            Protection, resistance, the utmost freedom to ride. Get ready for
            the trail and park season with Dainese Bike garments.
          </p>

          {/* Buy Now Button */}
          <button className="bg-white  text-black hover:bg-black hover:text-white  py-2 px-4 md:py-3 md:px-8 rounded-none text-base md:text-sm transition-all duration-100 shadow-lg hover:scale-102">
            NEW ARIVALS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
