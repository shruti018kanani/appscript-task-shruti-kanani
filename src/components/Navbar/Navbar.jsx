import React, { useState } from 'react';
import './Navbar.css';
import LogoIcon from './LogoIcon.jsx';
import Logo from './Logo.jsx';
import { FaSearch, FaHeart, FaShoppingBag, FaUser, FaGlobe, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showTabs, setShowTabs] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const toggleTabs = () => {
    setShowTabs(!showTabs);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setShowTabs(false);
  };

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <div className="top-bar-content">
            <LogoIcon className="icon"/>
            <p className="top-bar-text">Lorem ipsum dolor</p>
          </div>
          <div className="top-bar-content">
            <LogoIcon className="icon"/>
            <p className="top-bar-text">Lorem ipsum dolor</p>
          </div>
          <div className="top-bar-content">
            <LogoIcon className="icon"/>
            <p className="top-bar-text">Lorem ipsum dolor</p>
          </div>
        </div>

        <div className="navbar">
          <div className="navbar-left">
            <Logo className="logo"/>
          </div>
          <div className="navbar-center">
            <div className="logo-text">Logo</div>
          </div>

          <div className="navbar-right">
  <a href="#" className="icon"><FaSearch /></a>
  <a href="#" className="icon"><FaHeart /></a>
  <a href="#" className="icon"><FaShoppingBag /></a>
  <a href="#" className="icon"><FaUser /></a>
  <a href="#" className="icon"><FaGlobe /></a>
  <a href="#" className="icon" onClick={toggleTabs}><FaBars /></a>
</div>

          <div className={`tabs ${showTabs ? 'show' : ''}`}>
            <ul className="nav-links">
              {['Shop', 'Skills', 'Stories', 'About', 'Contact Us'].map((tab, index) => (
                <li key={index} className={index === activeTab ? 'show' : ''} onClick={() => handleTabClick(index)}>
                  <a className='top-tabs'href={`#${tab.toLowerCase()}`}>{tab}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
