import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import HomePage from './pages/HomePage'; 
import About from './pages/About';
import Category from './pages/Category';
import AddCategory from './pages/AddCategory';
// import Product from './pages/Product';
// import Warehouse from './pages/Warehouse';
import Contact from './pages/Contact';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavMenu />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<HomePage />} />AddCategory
            <Route path="/inventory/category" element={<Category />} />
            <Route path="/inventory/category/addCategory" element={<AddCategory />} />
            {/* <Route path="/inventory/product" element={<Product />} />
            <Route path="/inventory/warehouse" element={<Warehouse />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

