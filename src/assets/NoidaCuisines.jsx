import React from 'react';
import { FiSearch, FiClock, FiStar, FiShoppingBag } from 'react-icons/fi';

const NoidaCuisines = () => {
  const cuisines = [
    { name: "North Indian", count: 42 },
    { name: "Chinese", count: 38 },
    { name: "Biryani", count: 25 },
    { name: "South Indian", count: 18 },
    { name: "Pizza", count: 22 },
    { name: "Burgers", count: 15 },
    { name: "Desserts", count: 20 },
    { name: "Street Food", count: 30 },
    { name: "Fast Food", count: 28 },
    { name: "Continental", count: 12 },
    { name: "Italian", count: 17 },
    { name: "Thai", count: 8 },
  ];

  const popularRestaurants = [
    {
      name: "Faasos",
      cuisine: "Wraps, Fast Food",
      rating: 4.1,
      time: "25-30 mins",
      cost: "₹150 for one",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png"
    },
    {
      name: "Oven Story Pizza",
      cuisine: "Pizzas, Italian",
      rating: 4.3,
      time: "30-35 mins",
      cost: "₹200 for one",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/6e9e2b372ca0e0635f8c3e0126f3ced6_1589436786.png"
    },
    {
      name: "Behrouz Biryani",
      cuisine: "Biryani, Mughlai",
      rating: 4.2,
      time: "35-40 mins",
      cost: "₹250 for one",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png"
    },
    {
      name: "The Good Bowl",
      cuisine: "Healthy Food, Salads",
      rating: 4.0,
      time: "20-25 mins",
      cost: "₹180 for one",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/3e80a89c4a5c5a5dc0b5b0a0c0b5b0a0_1617875100.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Location Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Noida Sector 2 Restaurants</h1>
        <p className="text-gray-600">Discover the best restaurants, cafes and bars in Noida Sector 2</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Search for restaurants or cuisines"
        />
      </div>

      {/* Cuisine Categories */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6">Cuisines in Noida Sector 2</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cuisines.map((cuisine, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-20 bg-gray-200 rounded mb-2"></div>
              <h3 className="font-medium">{cuisine.name}</h3>
              <p className="text-sm text-gray-500">{cuisine.count} places</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Restaurants */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6">Popular restaurants in Noida Sector 2</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRestaurants.map((restaurant, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-40 bg-gray-200 relative">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center">
                  <FiStar className="text-yellow-400 mr-1" />
                  <span>{restaurant.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <FiClock className="mr-1" />
                    {restaurant.time}
                  </span>
                  <span className="flex items-center">
                    <FiShoppingBag className="mr-1" />
                    {restaurant.cost}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Restaurants CTA */}
      <div className="text-center mb-12">
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors">
          View all restaurants in Noida Sector 2
        </button>
      </div>

      {/* Location Info */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">About Noida Sector 2</h2>
        <p className="text-gray-700 mb-4">
          Noida Sector 2 is a bustling commercial and residential area with a wide variety of dining options. 
          From street food to fine dining, you'll find all types of cuisines here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Popular Areas</h3>
            <p className="text-gray-600">Sector 2 Market, Near Metro Station, Central Market</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Best Time to Visit</h3>
            <p className="text-gray-600">Evenings (6PM - 10PM) for the best dining experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoidaCuisines;