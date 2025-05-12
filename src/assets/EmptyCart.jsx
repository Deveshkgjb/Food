import React from 'react';
import { FiShoppingBag, FiArrowRight } from 'react-icons/fi';

const EmptyCart = () => {
  const restaurants = [
    { name: "Faasos", logo: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png" },
    { name: "Behrouz Biryani", logo: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png" },
    { name: "Ovenstory", logo: "https://b.zmtcdn.com/data/brand_creatives/logos/6e9e2b372ca0e0635f8c3e0126f3ced6_1589436786.png" },
    { name: "Firangi Bake", logo: "https://example.com/firangi-bake-logo.jpg" }, // Replace with actual logo
    { name: "Sweet Truth", logo: "https://example.com/sweet-truth-logo.jpg" }, // Replace with actual logo
    { name: "The Good Bowl", logo: "https://b.zmtcdn.com/data/brand_creatives/logos/3e80a89c4a5c5a5dc0b5b0a0c0b5b0a0_1617875100.png" },
    { name: "Lunchbox - Meals", logo: "https://example.com/lunchbox-logo.jpg" }, // Replace with actual logo
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb and Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="text-amber-600">Home</span>
          <FiArrowRight className="mx-2" />
          <span>Checkout</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Secure Checkout</h1>
      </div>

      {/* Restaurant Logos */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        <span className="text-gray-600 mr-2">All Restaurants</span>
        {restaurants.map((restaurant, index) => (
          <img 
            key={index}
            src={restaurant.logo} 
            alt={restaurant.name}
            className="h-10 w-10 object-contain rounded-full border border-gray-200"
          />
        ))}
      </div>

      {/* Divider with decorative elements */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center space-x-4">
          <img 
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" 
            alt="Highest bowl" 
            className="h-12 w-auto"
          />
          <img 
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" 
            alt="Bite Club" 
            className="h-12 w-auto"
          />
        </div>
      </div>

    
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <FiShoppingBag className="text-gray-400 text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Empty Cart!</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't made your choice yet.</p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center mx-auto">
          Browse Menu
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;