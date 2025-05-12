import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Navbar from './assets/Navbar';
import Slides from './assets/Slides';
import Info from './assets/Info';
import Slides2 from './assets/Slides2';
import Offer from './assets/Offer';
import Free from './assets/Free';
import WrapsPage from './Component/WrapsPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import PopularCuisines from './assets/PopularCuisines';
import GiveSure from './assets/GiveSure';
import AppDownload from './assets/AppDownload';
import RestaurantInfo from './assets/RestaurantInfo';
import FaasosNoidaPage from './Component/FaasosNoidaPage';
import PhoneLogin from './assets/PhoneLogin';
import NoidaCuisines from './assets/NoidaCuisines'; 
import EmptyCart from './assets/EmptyCart';
import Loading from './assets/Loading'; 

function App() {
  const [isLoading, setIsLoading] = useState(false); 

  return (
    <Router>
      <LoadingWrapper>
        <Navbar />
        <Routes>
         
          <Route
            path="/"
            element={
              <>
                <Slides />
                <Info />
                <Slides2 />
                <Offer />
                <Free />
                <br />
                <PopularCuisines />
                <GiveSure />
                <AppDownload />
                <RestaurantInfo />
              </>
            }
          />
        
          <Route path="/faasosNoidaPage" element={<FaasosNoidaPage />} />
          <Route path="/wrapsPage" element={<WrapsPage />} />
          <Route path="/PhoneLogin" element={<PhoneLogin />} />
          <Route path="/noidaCuisines" element={<NoidaCuisines />} />
          <Route path="/emptyCart" element={<EmptyCart />} />
        </Routes>
      </LoadingWrapper>
    </Router>
  );
}

function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true); 
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, [location]);

  return (
    <>
      {isLoading && <Loading />} 
      {!isLoading && children} 
    </>
  );
}

export default App;