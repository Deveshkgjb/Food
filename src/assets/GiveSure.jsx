import React from 'react';

const GiveSure = () => {
  return (
    <div className="relative ">
      {/* Emotional Background Image with Strong Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Underprivileged people receiving food"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 py-24 lg:py-32 text-white">
        {/* Main Heading Section */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Give Sure
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Join us as we serve tasty and safe meals, cooked freshly in our network of 300+ kitchens across India.
          </p>
        </div>

        {/* Impact Statistic - Made More Prominent */}
        <div className="bg-amber-500 bg-opacity-95 border-l-8 border-amber-300 px-8 py-6 mb-14 max-w-md mx-auto transform hover:scale-105 transition duration-300">
          <p className="text-3xl md:text-4xl font-bold text-center">
            4,64,059 Meals delivered
          </p>
        </div>

        {/* Mission Section with Enhanced Visibility */}
        <div className="mt-16 bg-black bg-opacity-70 p-8 lg:p-10 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-amber-400">
            #Food ForGood Mission
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            It is our mission to bring assured goodness for the underprivileged to enjoy a meal that is fresh, safe, nutritious and delicious. With every meal, we work towards a better tomorrow where no one sleeps unfed.
          </p>
          
          {/* Call to Action Button */}
          <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiveSure;