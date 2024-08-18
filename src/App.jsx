import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import DiscoverProducts from './components/Text/DiscoverProducts'
import ProductCard from './components/ProductCard/ProductCard'
import Filter from './components/Filter/Filter'
import Recommended from './components/Recommended/Recommended.jsX'
import { ProductContext } from './components/Context/ProductContext';
import { useContext } from 'react';
import Footer from './components/Footer/Footer'

function App() {
  const { isFilter } = useContext(ProductContext);

  return (
    <div className="wrapper">
    <Navbar/>
    <DiscoverProducts/>
    <Recommended/>
    {
      (isFilter)?<span className='span-elem'>
      <Filter/>
      <ProductCard/>
      </span>
      :
      <span className='span-elem'>
      <ProductCard/>
      </span>
    }
    <Footer/>
    </div>
  )
}

export default App
