import React from 'react';
import Slides from './Slides';
import Info from './Info';
import Slides2 from './Slides2';
import Offer from './Offer';
import Free from './Free';
import PopularCuisines from './PopularCuisines';
import GiveSure from './GiveSure';
import AppDownload from './AppDownload';
import RestaurantInfo from './RestaurantInfo';

const HomePage = () => {
  return (
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
  );
};

export default HomePage;