import React from 'react';
import { Link } from 'react-router-dom';

const PopularCuisines = () => {
  const categories = [  
    {
      name: '1+1 Combos',
      bgImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Satvik Specials',
      bgImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Pizza',
      bgImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Burgers',
      bgImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-8 font-sans bg-purple-100 ">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Popular Cuisines in your area
        </h2>
        <p className="text-gray-600 mb-6">
          Curated specials from India's most trusted restaurants
        </p>
       <div>
        <Link to="/noidaCuisines">
       <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded transition-all duration-200 hover:-translate-y-0.5">
          Explore All Dishes
        </button>
        </Link>
       </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative h-48 rounded-lg overflow-hidden group"
          >
            {/* Background Image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${category.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            
            {/* Category Name */}
            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-white text-xl font-bold z-10">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCuisines;