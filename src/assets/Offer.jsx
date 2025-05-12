import React from 'react';
import { FaBicycle,FaGift } from 'react-icons/fa';

const Offer = () => {
  return (
    <div className="mt-8 bg-purple-600 rounded-xl text-orange-500 font-bold text-2xl max-w-screen-lg mx-auto">
      <div className="h-[100px] md:h-[100px] lg:h-[200px]">
        <img
          src="https://product-assets.faasos.io/eatsure/production/icon_elite2_new_v2.png"
          alt="Elite Icon"
          className="h-8 relative ml-[200px]"
        />

        <div className="bg-white ml-[300px] rounded-2xl m-8 relative w-[500px] h-[100px]">
          <div className="bg-yellow-400 mt-3 rounded-xl h-12 flex items-center space-x-3 px-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <FaBicycle className="text-blue-500 text-xl" />
            </div>
            <span className="text-black text-sm  ">free Dilivery</span>
            <div className="w-10 h-10 relative  bg-gray-200 rounded-full flex items-center justify-center">
              <FaGift className="text-blue-500 text-xl" />
            </div>
            <span className="text-black text-sm  ">Free Dises</span>
          </div>
          <div className='flex'>
          <p className='text-sm text-black relative m-3'>Clame yourelight banifit</p>
          <button className='bg-blue-600 rounded-xl text-white ml-20 m-1 w-20'>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
