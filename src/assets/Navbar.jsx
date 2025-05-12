import React from 'react';
import { FaShoppingCart, FaPhone,FaSignInAlt,FaUserCircle } from 'react-icons/fa';
import { Search } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';





const Navbar = () => {
  const navigate=useNavigate();
  const handleSignInClick = () => {
    navigate("/PhoneLogin"); // Navigate to the PhoneLogin page
  };
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-6">
        <img
          src="https://product-assets.faasos.io/eatsure/production/es-brandcolor-logo.svg"
          alt="EatSure Logo"
          className="h-10 w-auto"
        />
        <div className='text-black font-bold relative space-x-2 ml-6'>
            <h1 >Delta 1,Noida^</h1>
            <p className='text-xs'>sec-22 Cetpa</p>
        </div>
        <div className="flex relative ml-36 items-center space-x-2">
      <FaPhone className="text-blue-600 text-sm" />
      <span className="text-sm relative  text-gray-700">Call us At <br />9958815201</span>

    </div>
    <div>
        <Search className="relative ml-36 text-2xl"></Search>
    </div>
    <div >
      <Link to="/emptyCart">
    <FaShoppingCart className='relative ml-36 text-2xl space-x-2 '></FaShoppingCart>
    </Link>
    </div>

    <div>
        <FaSignInAlt className='relative ml-32 text-2xl space-x-2'></FaSignInAlt>
    </div>
    <div onClick={handleSignInClick}
    className='text-blue-600 font-bold'>
        <h3>SignIn</h3>
    </div>
    <div className='relative ml-10'>
    <FaUserCircle className='relative ml-3 mt-3space-x-2 text-2xl'></FaUserCircle>
        <p className='relative ml-10 text-bold'>MY-PROFILE</p>
    </div>
    </div>
    
    </nav>
  );
};

export default Navbar;
// <div className="relative mx-auto max-w-screen-lg">
        //     <div className="relative mx-auto max-w-screen-lg font-bold text-2xl  ">
        //     Choose From Trusted Restaurants in One Single Order
        //     </div>
        // </div>
