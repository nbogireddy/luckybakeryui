import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import './NavMenu.css'; // Import your CSS file for styling if needed

const NavMenu = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="nav-menu">
      <div className="nav-item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item">
        <span className="nav-submenu-toggle" onClick={toggleSubmenu}>Inventory</span>
        {submenuOpen && (
          <ul className="submenu">
            <li><Link to="/inventory/category">Category</Link></li>
            <li><Link to="/inventory/product">Product</Link></li>
            <li><Link to="/inventory/warehouse">Warehouse</Link></li>
          </ul>
        )}
      </div>
      <div className="nav-item">
        <Link to="/about">About</Link>
      </div>
      <div className="nav-item">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavMenu;
