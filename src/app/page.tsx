import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BrowseUsedcard from './components/BrowseUsedcard';
import Offering from './components/Offering';
import Manage from './components/Manage';
import Featured from './components/Featured';
import FeaNewcar from './components/FeaNewcar';
import Comparision from './components/Comparision';
import CarAccessories from './components/CarAccessories';
import Bikeslogo from './components/Bikeslogo';
import PopularBikes from './components/PopularBikes';
import BrowsVideo from './components/BrowsVideo';
import NewsDiscuss from './components/NewsDiscuss';
import Getpakwhhelapp from './components/Getpakwhhelapp';

export default function page() {
  return (
<div>
    <Navbar/>
    <Hero/>
    <BrowseUsedcard/>
    <Offering/>
    <Manage/>
    <Featured/>
    <FeaNewcar/>
    <Comparision/>
    <CarAccessories/>
    <Bikeslogo/>
    <PopularBikes/>
    <BrowsVideo/>
    <NewsDiscuss/>
    <Getpakwhhelapp/>
    <Footer/>
</div>
  );
}
