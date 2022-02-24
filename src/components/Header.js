import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = {
    marginLeft: 'auto',
    marginRight: '50px',
  };
  return (
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <div style={links}>
        <NavLink to="/" className="linklist"> Home </NavLink>
        <NavLink to="/Calculator" className="linklist"> Calculator </NavLink>
        <NavLink to="/Quote" className="linklist"> Quote </NavLink>
      </div>
    </nav>
  );
};

export default Header;
