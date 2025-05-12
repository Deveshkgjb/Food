import React from 'react';

const RestaurantInfo = () => {
  const restaurants = [
    {
      name: "Behrouz Biryani",
      about: "200+ stringent quality checks",
      earlyOrder: "Even Story Franchise Enquiry",
      link: "Order Biryani Online"
    },
    {
      name: "Ovenstory",
      about: "No artificial colors or flavors",
      earlyOrder: "",
      link: "Order Dessert Online"
    },
    {
      name: "Friangi Bake",
      about: "Double-sealed packaging",
      earlyOrder: "EatSure App",
      link: "Order Cake Online"
    },
    {
      name: "Sweet Truth",
      about: "Know your food",
      earlyOrder: "Android",
      link: "Order Pizza Online"
    },
    {
      name: "The Good Bowl",
      about: "FAQs",
      earlyOrder: "iOS",
      link: "Chicken Biryani Online"
    },
    {
      name: "Lunchbox - Meals & Thails",
      about: "Sure Points FAQs",
      earlyOrder: "",
      link: "Order Chinese near me"
    },
    {
      name: "16+ More",
      about: "Terms & Conditions",
      earlyOrder: "",
      link: "Veg Biryani Online"
    },
    {
      name: "",
      about: "",
      earlyOrder: "",
      link: "Order Cheese Burst Pizza Online"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Sure choice of Restaurants
      </h1>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Fasos Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold pb-2 border-b border-gray-200">Fasos</h2>
          {restaurants.map((restaurant, index) => (
            restaurant.name && <div key={index} className="p-3 hover:bg-gray-50 rounded-lg">
              <p>{restaurant.name}</p>
            </div>
          ))}
        </div>

        {/* About Us Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold pb-2 border-b border-gray-200">About Us</h2>
          {restaurants.map((restaurant, index) => (
            restaurant.about && <div key={index} className="p-3 hover:bg-gray-50 rounded-lg">
              <p>{restaurant.about}</p>
            </div>
          ))}
        </div>

        {/* Early Orders Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold pb-2 border-b border-gray-200">Early Orders</h2>
          {restaurants.map((restaurant, index) => (
            restaurant.earlyOrder && <div key={index} className="p-3 hover:bg-gray-50 rounded-lg">
              <p>{restaurant.earlyOrder}</p>
            </div>
          ))}
        </div>

        {/* Important Links Column */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold pb-2 border-b border-gray-200">Important Links</h2>
          {restaurants.map((restaurant, index) => (
            restaurant.link && <div key={index} className="p-3 group">
              <a href="#" className="text-amber-600 hover:text-amber-700 hover:underline transition">
                {restaurant.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Contact */}
      <div className="mt-12 text-center bg-gray-50 p-6 rounded-lg">
        <p className="text-lg text-gray-700">
          We are here to help you. Call us at 
          <span className="text-amber-600 font-semibold ml-2">07204047007</span>
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfo;