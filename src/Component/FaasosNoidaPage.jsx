import React from 'react';
import { FiStar, FiClock, FiMapPin, FiShoppingBag, FiInfo } from 'react-icons/fi';

const FaasosNoidaPage = () => {
  const menuItems = [
    { name: "Chicken Tikka Wrap", price: "₹149", rating: 4.2, votes: 1250 },
    { name: "Paneer Tikka Wrap", price: "₹129", rating: 4.3, votes: 980 },
    { name: "Peri Peri Fries", price: "₹89", rating: 4.1, votes: 750 },
    { name: "Chicken Biryani", price: "₹199", rating: 4.0, votes: 1100 },
    { name: "Chocolate Lava Cake", price: "₹99", rating: 4.5, votes: 650 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <img 
            src="https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png" 
            alt="Faasos logo" 
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>
        
        <div className="w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-3xl font-bold mb-2">Faasos - Noida Sector 2</h1>
          <p className="text-gray-600 mb-4">Fast Food, Wraps, Biryani, Desserts</p>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
              <FiStar className="text-green-600 mr-1" />
              <span className="font-semibold">4.1</span>
            </div>
            <span>1,200+ ratings</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <FiClock className="text-gray-500 mr-2" />
              <span>25-30 mins</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-gray-500 mr-2" />
              <span>1.2 km away</span>
            </div>
            <div className="flex items-center">
              <FiShoppingBag className="text-gray-500 mr-2" />
              <span>₹150 for one</span>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-start">
              <FiInfo className="text-yellow-600 mt-1 mr-2" />
              <p>Free delivery on orders above ₹199</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Offers Section */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Available offers</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-3 font-bold">50% OFF</div>
            <div>
              <p className="font-medium">USE EATSURE | UPTO 50% OFF</p>
              <p className="text-sm text-gray-600">Use code EATSURE to get upto 50% OFF | Above ₹199</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-3 font-bold">FREE</div>
            <div>
              <p className="font-medium">FREE DELIVERY</p>
              <p className="text-sm text-gray-600">On all orders above ₹199</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recommended</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
              <div className="flex justify-between items-center">
                <span className="font-medium">{item.price}</span>
                <div className="flex items-center">
                  <FiStar className="text-yellow-500 mr-1" />
                  <span>{item.rating} ({item.votes})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Restaurant Info */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">About Faasos - Noida Sector 2</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Cuisines</h3>
            <p>Fast Food, Wraps, Biryani, Desserts</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p>Shop 5, Sector 2, Near Metro Station, Noida, Uttar Pradesh 201301</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Average Cost</h3>
            <p>₹150 for one (approx.)</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">More Info</h3>
            <p>Open now - 11:00am to 11:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaasosNoidaPage;