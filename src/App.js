import React from 'react';
import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Import the custom CSS for App
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import ProductTools from './components/ProductsTools';
import WhyAdveco from './components/WhyAdveco';
import Resources from './components/Resources.js'
import Careers from './components/Careers.js';
import ContactUs from './components/ContactUs.js';
import CommunitySpace from './components/CommunitySpace.js';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ minHeight: '75vh', padding: '0px' }}>
          <Routes>
            {/* Define routes here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/About-Us" element={<AboutUs />} /> {/* About Us route */}
            <Route path='/Products-Tools' element={<ProductTools/>} />
            <Route path='/WhyAdveco' element={<WhyAdveco/>}/>
            <Route path='/Resources' element={<Resources/>} />
            <Route path='/Careers' element={<Careers/>} />
            <Route path='/Contact-Us' element={<ContactUs/>} />
            <Route path='/Community-Space' element={<CommunitySpace/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
