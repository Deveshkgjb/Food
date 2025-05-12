import React from 'react';

const AppDownload = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 bg-blue-300 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Download</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-6">EatSure App</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            EatSure, when you want to enjoy multiple cuisines from different trusted restaurants in one single order. Become an EatSure Elite, unlock FREE dishes on orders above ₹399 and pay ZERO delivery fees for orders above ₹199.
          </p>
        </div>

        {/* Download Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          {/* Google Play Button */}
          <div className="bg-black text-white p-4 rounded-lg flex items-center w-64 hover:bg-gray-800 transition duration-300 cursor-pointer">
            <div className="mr-3">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
            </div>
            <div>
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl font-semibold">Google Play</div>
            </div>
          </div>

          {/* App Store Button */}
          <div className="bg-black text-white p-4 rounded-lg flex items-center w-64 hover:bg-gray-800 transition duration-300 cursor-pointer">
            <div className="mr-3">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="text-xl font-semibold">App Store</div>
            </div>
          </div>
        </div>

        
        <div className="text-center">
          <div className="mb-2 text-lg font-medium text-gray-700">Scan To Download</div>
          <div className="inline-block p-3 bg-white rounded-lg border border-gray-200">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://eatsure.com/download" 
              alt="QR Code" 
              className="w-32 h-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;